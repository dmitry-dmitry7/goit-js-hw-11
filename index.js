import{S as u,a as d,i as f}from"./assets/vendor-O8QdOga3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const a=document.querySelector(".loader"),n=document.querySelector("ul.gallery");let y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(i){const t=i.map(l=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${l.largeImageURL}">
          <img
            class="gallery-image"
            src="${l.webformatURL}"
            alt="${l.tags}"
          />
          <div class = "gallery-text">
            <ul class = "gallery-text-list">
              <li><b>Likes</b></li>
              <li>${l.likes}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Views</b></li>
              <li>${l.views}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Comments</b></li>
              <li>${l.comments}</li>
            </ul>
            <ul class = "gallery-text-list">
              <li><b>Downloads</b></li>
              <li>${l.downloads}</li>
            </ul>                        
          </div>
        </a>
      </li>
      `).join("");n.innerHTML=t,y.refresh()}function g(){n.innerHTML=""}function p(){a.classList.remove("hidden")}function h(){a.classList.add("hidden")}function b(i){g(),p(),d.get("https://pixabay.com/api/",{params:{key:"54671046-ae95888271e1d1b9b249768ad",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"9"}}).then(t=>{const l=t.data.hits;l.length===0?f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):m(l)}).catch(t=>{console.log(t)}).finally(()=>{h()})}const c=document.querySelector(".form");c.addEventListener("submit",L);function L(i){i.preventDefault();const t=i.target.elements[0].value.trim();if(!t.length){alert("Рядок повинен існувати");return}b(t),c.reset()}
//# sourceMappingURL=index.js.map
