import axios from "axios";

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
	  console.log(response.data);
    })
  	.catch(error => {
  	  console.log(error);
  	});
}
