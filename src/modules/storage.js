const storage = (() => {
  function getUser() {
    try {
      return (
        JSON.parse(localStorage.getItem("user")) || {
          userName: "",
          email: "",
          phone: "",
          address: "",
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  function setUser(userObj) {
    localStorage.setItem("user", JSON.stringify(userObj));
  }

  function getLikes() {
    try {
      return JSON.parse(localStorage.getItem("likes")) || [];
    } catch (error) {
      console.log(error);
    }
  }

  function setLikes(likesArr) {
    localStorage.setItem("likes", JSON.stringify(likesArr));
  }

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem("cart")) || [];
    } catch (error) {
      console.log(error);
    }
  }

  function setCart(cartArr) {
    localStorage.setItem("cart", JSON.stringify(cartArr));
  }

  function getCartTotal() {
    try {
      return (JSON.parse(localStorage.getItem("cart")) || [])
        .reduce(
          (total, product) =>
            total + parseFloat(product.price) * parseFloat(product.quantity),
          0
        )
        .toFixed(2);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getUser,
    setUser,
    getLikes,
    setLikes,
    getCart,
    setCart,
    getCartTotal,
  };
})();

export default storage;
