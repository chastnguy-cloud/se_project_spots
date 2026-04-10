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

// event listeners for "Edit Profile" modal [1]
editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(profileDescriptionModal);
});

editProfileModalCloseBtn.addEventListener("click", function () {
  closeModal(profileDescriptionModal);
});

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

// Edit Profile submission handler [1]

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(profileDescriptionModal);
}

profileDescriptionModal.addEventListener("submit", handleProfileFormSubmit);

// event listeners for "New Post" modal [2]
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostModalCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(captionNameInput.value);
  console.log(captionLinkInput.value);
  closeModal(newPostModal);
  addCardFormElement.requestFullscreen();
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);
