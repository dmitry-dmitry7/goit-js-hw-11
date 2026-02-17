import{a as l,i as c}from"./assets/vendor-DtLwFvvN.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function u(o){const t=document.querySelector("ul.gallery"),s=o.map(a=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a.largeImageURL}">
          <img
            class="gallery-image"
            src="${a.webformatURL}"
            alt="${a.tags}"
          />
        </a>
      </li>
      `).join("");t.insertAdjacentHTML("afterbegin",s)}function f(o){l.get("https://pixabay.com/api/",{params:{key:"54671046-ae95888271e1d1b9b249768ad",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>{const s=t.data.hits;console.log(s),s.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):u(s)}).catch(t=>{console.log(t)})}const n=document.querySelector(".form");n.addEventListener("submit",m);function m(o){o.preventDefault();const t=o.target.elements[0].value;console.log(t),f(t),n.reset()}
//# sourceMappingURL=index.js.map
