// Mock data
import { products, category, categories } from "../assets/data";

const storeAPI = (() => {
  //   async function _resource(URL) {
  //     const data = await (await fetch(URL)).json();
  //     return data;
  //   }

  function getProducts() {
    return new Promise((res) => {
      setTimeout(() => res(products), 3000);
    });
  }

  function getProductById(id) {
    return new Promise((res) => {
      setTimeout(
        () => res(products.filter((product) => product.id === id)),
        3000
      );
    });
  }

  function getProductsByCategory() {
    return new Promise((res) => {
      setTimeout(() => res(category), 3000);
    });
  }

  function getCategories() {
    return new Promise((res) => {
      setTimeout(() => res(categories), 3000);
    });
  }

  return { getProducts, getProductById, getProductsByCategory, getCategories };
})();

export default storeAPI;
