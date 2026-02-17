import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { createGallery, clearGallery, showLoader, hideLoader } from './render-functions';


export function getImagesByQuery(query) {
  axios.get("https://pixabay.com/api/", {
    params: {
      key: "54671046-ae95888271e1d1b9b249768ad",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: "true"
	}
  })
    .then(response => {
      const images = response.data.hits; 
      console.log(images);
      // console.log(images.length);
      if (images.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        
        createGallery(images);


      }
    })
  	.catch(error => {
  	  console.log(error);
  	});
}
