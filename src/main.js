// import axios from "axios";
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from './js/pixabay-api';

const form = document.querySelector(".form");
// const gallery = document.querySelector("ul.gallery");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const searchText = event.target.elements[0].value.trim();
  if(!searchText.length) {
    alert("Рядок повинен існувати");
    return;
  }
    
  getImagesByQuery(searchText);
    
  form.reset();
}
