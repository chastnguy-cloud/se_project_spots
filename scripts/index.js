const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over teh forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

// Variable for the "Edit Profile" Button [1]
const editProfileBtn = document.querySelector(".profile__description-button");

// Variable for the whole "Edit Profile" modal [1]
const profileDescriptionModal = document.querySelector("#edit-profile-modal");

// Variable for close button on the "Edit Profile" modal [1]
const editProfileModalCloseBtn =
  profileDescriptionModal.querySelector(".modal__close-btn");

// variables to store inputs from form - textContent will be assigned to basically get the values of the input in the profileNameEl and ProfileDescriptionEl [1]
const profileNameEl = document.querySelector(".profile__description-title");
const profileDescriptionEl = document.querySelector(
  ".profile__description-subtitle",
);

// variable for profile name input in "Edit Profile" modal form [1]
const editProfileNameInput = profileDescriptionModal.querySelector(
  "#profile-name-input",
);

// variable for profile description input in "Edit Profile" modal form [1]
const editProfileDescriptionInput = profileDescriptionModal.querySelector(
  "#profile-description-input",
);

// Variables for "New Post" button [2]
const newPostBtn = document.querySelector(".profile__button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostModalCloseBtn = newPostModal.querySelector(".modal__close-btn");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const captionNameInput = newPostModal.querySelector("#caption-input");
const captionLinkInput = newPostModal.querySelector("#card-image-input");

// General functions to open and close modal by adding and removing with classList
function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// Edit Profile submission handler function [1]
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(profileDescriptionModal);
}

// New Post modal submission [2]
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(captionNameInput.value);
  console.log(captionLinkInput.value);
  closeModal(newPostModal);
  addCardFormElement.reset();
}

// event listeners for "Edit Profile" modal [1]
editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(profileDescriptionModal);
});

editProfileModalCloseBtn.addEventListener("click", function () {
  closeModal(profileDescriptionModal);
});

profileDescriptionModal.addEventListener("submit", handleProfileFormSubmit);

// event listeners for "New Post" modal [2]
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostModalCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

// event listener that will reset the form in the newPostModal after submit is pressed [2]
addCardFormElement.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (card) {
  console.log(card.name);
});
