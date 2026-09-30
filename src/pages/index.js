import "./index.css";
import {
  enableValidation,
  resetValidation,
  settings,
} from "../scripts/validation.js";
import Api from "../utils/Api.js";

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

const cardsList = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const previewModal = document.querySelector("#preview-modal");
const previewModalImage = previewModal.querySelector(".modal__preview-image");
const previewModalCaption = previewModal.querySelector(".modal__caption");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
previewModalCloseBtn.addEventListener("click", function () {
  closeModal(previewModal);
});

//variables for "delete image modal" trash can button
const deleteModal = document.querySelector("#delete-image-modal");
const deleteModalbtn = deleteModal.querySelector(".modal__delete-btn");
const deleteModalCloseBtn = deleteModal.querySelector(".modal__close-btn");
const cancelBtn = deleteModal.querySelector(".modal__cancel-btn");
deleteModalCloseBtn.addEventListener("click", () => closeModal(deleteModal));
cancelBtn.addEventListener("click", () => closeModal(deleteModal));
let selectedCard;
let selectedCardId;

//variables for update avatar modal
const avatarModal = document.querySelector("#update-avatar-modal");
const avatarModalCloseBtn = avatarModal.querySelector(".modal__close-btn");
const avatarFormElement = avatarModal.querySelector(".modal__form");
const avatarUrlInput = avatarModal.querySelector("#avatar-url-input");
const profilePicture = document.querySelector(".profile__picture");

avatarModalCloseBtn.addEventListener("click", () => closeModal(avatarModal));

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  const submitBtn = evt.submitter;
  submitBtn.textContent = "Saving...";
  api
    .updateAvatar(avatarUrlInput.value)
    .then((userData) => {
      profilePicture.src = userData.avatar;
      closeModal(avatarModal);
    })
    .catch(console.error)
    .finally(() => {
      submitBtn.textContent = "Save";
    });
}

avatarFormElement.addEventListener("submit", handleAvatarFormSubmit);

profilePicture.addEventListener("click", () => {
  openModal(avatarModal);
});

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardDeleteBtn.addEventListener("click", function () {
    handleDeleteCard(cardElement, data);
  });

  cardLikeBtn.addEventListener("click", function () {
    const isLiked = cardLikeBtn.classList.contains("card__like-button_liked");

    const likeAction = isLiked
      ? api.unlikeCard(data._id)
      : api.likeCard(data._id);

    likeAction
      .then(() => {
        cardLikeBtn.classList.toggle("card__like-button_liked");
      })
      .catch(console.error);
  });
  cardImage.addEventListener("click", function () {
    previewModalImage.src = data.link;
    previewModalImage.alt = data.name;
    previewModalCaption.textContent = data.name;
    openModal(previewModal);
  });

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  return cardElement;
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

// General functions to open and close modal by adding and removing with classList
function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", handleEscClose);
}

// Edit Profile submission handler function [1]
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const submitBtn = evt.submitter;
  submitBtn.textContent = "Saving...";
  api
    .editUserInfo({
      name: editProfileNameInput.value,
      about: editProfileDescriptionInput.value,
    })
    .then((userData) => {
      profileNameEl.textContent = userData.name;
      profileDescriptionEl.textContent = userData.about;
      closeModal(profileDescriptionModal);
    })
    .catch(console.error)
    .finally(() => {
      submitBtn.textContent = "Save";
    });
}

// New Post modal submission [2]
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const submitBtn = evt.submitter;
  submitBtn.textContent = "Saving...";
  api
    .addCard({
      name: captionNameInput.value,
      link: captionLinkInput.value,
    })
    .then((card) => {
      const cardElement = getCardElement(card);
      cardsList.prepend(cardElement);
      closeModal(newPostModal);
      addCardFormElement.reset();
      resetValidation(addCardFormElement, settings);
    })
    .catch(console.error)
    .finally(() => {
      submitBtn.textContent = "Save";
    });
}

// event listeners for "Edit Profile" modal [1]
editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  resetValidation(
    profileDescriptionModal.querySelector(".modal__form"),
    settings,
  );
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

const modals = document.querySelectorAll(".modal");
modals.forEach((modal) => {
  modal.addEventListener("click", (evt) => {
    if (evt.target === modal) {
      closeModal(modal);
    }
  });
});

//API instantiation
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "c9933730-e37c-4b44-be10-3cfaf8519e15",
    "Content-Type": "application/json",
  },
});

api
  .getAppData()
  .then(([userData, cards]) => {
    profileNameEl.textContent = userData.name;
    profileDescriptionEl.textContent = userData.about;
    profilePicture.src = userData.avatar;
    cards.forEach((card) => {
      const cardElement = getCardElement(card);
      cardsList.prepend(cardElement);
    });
  })
  .catch(console.error);

// is the very last line that will begin the whole process
enableValidation(settings);

function handleDeleteCard(cardElement, data) {
  selectedCard = cardElement;
  selectedCardId = data._id;
  openModal(deleteModal);
}

function handleDeleteSubmit() {
  deleteModalbtn.textContent = "Deleting...";
  api
    .removeCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deleteModal);
      //remove from DOM and close modal
    })
    .catch(console.error)
    .finally(() => {
      deleteModalbtn.textContent = "Delete";
    });
}
deleteModalbtn.addEventListener("click", handleDeleteSubmit);
