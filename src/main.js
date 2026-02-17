// import axios from "axios";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const form = document.querySelector(".form");
// const gallery = document.querySelector("ul.gallery");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const searchText = event.target.elements[0].value;
  console.log(searchText);
    
  getImagesByQuery(searchText);
    
  form.reset();
}

// new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});