const storage = (() => {
  function getUser() {
    try {
      return (
        JSON.parse(localStorage.getItem("user")) || {
          userName: "",
          email: "",
          password: "",
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
    localStorage.setItem("likes", JSON.stringify(cartArr));
  }

  return { getUser, setUser, getLikes, setLikes, getCart, setCart };
})();

export default storage;
