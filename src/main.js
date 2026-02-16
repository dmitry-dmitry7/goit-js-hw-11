import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

getImagesByQuery("cat");