const storeAPI = (() => {
  async function _resource(URL) {
    const data = await (await fetch(URL)).json();
    return data;
  }

  function getProducts() {
    return new Promise((res, rej) => {
      try {
        res(_resource('https://fakestoreapi.com/products'))
      } catch (error) {
        rej(error)
      }
    });
  }

  function getProductById(id) {
    return new Promise((res, rej) => {
      try {
        res(_resource(`https://fakestoreapi.com/products/${id}`))
      } catch (error) {
        rej(error)
      }
    });
  }

  function getProductsByCategory(category) {
    return new Promise((res, rej) => {
      try {
        res(_resource(`https://fakestoreapi.com/products/category/${category}`))
      } catch (error) {
        rej(error)
      }
    });
  }

  function getCategories() {
    return new Promise((res, rej) => {
      try {
        res(_resource('https://fakestoreapi.com/products/categories'))
      } catch (error) {
        rej(error)
      }
    });
  }

  return { getProducts, getProductById, getProductsByCategory, getCategories };
})();

export default storeAPI;
