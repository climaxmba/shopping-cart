const storeAPI = (() => {
  async function _resource(URL) {
    const response = await fetch(URL, { mode: "cors" });
    if (!response.ok) throw new Error(response.status);
    return await response.json();
  }

  function getProducts() {
    return new Promise((res, rej) => {
      try {
        res(_resource("https://fakestoreapi.com/products"));
      } catch (error) {
        rej(error);
      }
    });
  }

  function getProductById(id) {
    return new Promise((res, rej) => {
      try {
        res(_resource(`https://fakestoreapi.com/products/${id}`));
      } catch (error) {
        rej(error);
      }
    });
  }

  function getProductsByCategory(category) {
    return new Promise((res, rej) => {
      try {
        res(
          _resource(`https://fakestoreapi.com/products/category/${category}`)
        );
      } catch (error) {
        rej(error);
      }
    });
  }

  function getCategories() {
    return new Promise((res, rej) => {
      try {
        res(_resource("https://fakestoreapi.com/products/categories"));
      } catch (error) {
        rej(error);
      }
    });
  }

  return { getProducts, getProductById, getProductsByCategory, getCategories };
})();

export default storeAPI;
