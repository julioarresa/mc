"use strict";

const photoPage = document.querySelector("#photo-page");
const photoCaption = document.querySelector("#photo-caption");
const sourcePhoto = document.querySelector("#source-photo");
const photoLink = document.querySelector("#photo-link");
const photoImageLink = document.querySelector("#photo-image-link");
const previousPhoto = document.querySelector("#previous-photo");
const nextPhoto = document.querySelector("#next-photo");

function showPhoto(index) {
  photoPage.selectedIndex = index;
  const page = photoPage.value;
  const filename = "extintores-assets/paginas/" + page.padStart(2, "0") + ".jpg";
  const caption = photoPage.selectedOptions[0].textContent;
  photoCaption.textContent = caption;
  sourcePhoto.alt = "Temario de Extintores, " + caption;
  sourcePhoto.src = filename;
  photoLink.href = filename;
  photoImageLink.href = filename;
  photoImageLink.setAttribute("aria-label", "Abrir foto ampliada de la p. " + page);
  previousPhoto.disabled = index === 0;
  nextPhoto.disabled = index === photoPage.options.length - 1;
}

photoPage.addEventListener("change", () => showPhoto(photoPage.selectedIndex));
previousPhoto.addEventListener("click", () => {
  showPhoto(photoPage.selectedIndex - 1);
  if (previousPhoto.disabled) nextPhoto.focus();
});
nextPhoto.addEventListener("click", () => {
  showPhoto(photoPage.selectedIndex + 1);
  if (nextPhoto.disabled) previousPhoto.focus();
});
document.querySelector(".photos-link").addEventListener("click", () => {
  showView("images");
  requestAnimationFrame(() => document.querySelector("#images").scrollIntoView());
});
