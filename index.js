const editProfileBtn = document.querySelector(".profile__description-button");
const profileDescriptionModal = document.querySelector("#edit-profile-modal");
const editProfileModalCloseBtn =
  profileDescriptionModal.querySelector(".modal__close-btn");

const newPostBtn = document.querySelector(".profile__button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
  profileDescriptionModal.classList.add("modal_is-opened");
});

editProfileModalCloseBtn.addEventListener("click", function () {
  profileDescriptionModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostModalCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
