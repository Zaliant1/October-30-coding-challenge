import { createElementWithText } from "./utils/domElements.js";
// const { createElementWithText } = require("./utils/domElements.js");
// changes
const BASE_URL = "https://jsonplaceholder.typicode.com";

let userButton = document.getElementById("get-users");
let userListContainer = document.getElementById("user-list");
let userPostContainer = document.getElementById("user-posts");
let clearButton = document.getElementById("clear-all");

clearButton.addEventListener("click", () => {
  userListContainer.innerHTML = "";
  userPostContainer.innerHTML = "";
});

userButton.addEventListener("click", () => {
  userListContainer.innerHTML = "";
  axios.get(`${BASE_URL}/users`).then((res) => {
    createElementWithText("userHeader", "p", "User List", userListContainer);

    res.data.forEach((user) => {
      let userEl = createElementWithText(
        "user",
        "li",
        user.username,
        userListContainer
      );

      userEl.addEventListener("click", () => {
        userPostContainer.innerHTML = "";
        axios.get(`${BASE_URL}/posts?userId=${user.id}`).then((res) => {
          res.data.forEach((post) => {
            createElementWithText(
              "userPostHeader",
              "h4",
              post.title,
              userPostContainer
            );

            createElementWithText(
              "userPostBody",
              "p",
              post.body,
              userPostContainer
            );
          });
        });
      });
    });
  });
});
