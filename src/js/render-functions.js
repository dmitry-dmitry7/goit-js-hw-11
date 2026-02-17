export function createGallery(images) {
  const gallery = document.querySelector("ul.gallery");
  const content = images
    .map((image) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>
      </li>
      `)
    .join("");
  gallery.insertAdjacentHTML("afterbegin", content);  
}

export function clearGallery() {

}

export function showLoader() {

}

export function hideLoader() {

}

