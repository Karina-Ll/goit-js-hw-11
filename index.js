import{a as m,S as d,i as a}from"./assets/vendor-DQiTczw4.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",h="54634222-77c9b0f4b64a04c45eba29331";function y(i){return m.get(g,{params:{key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:p})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${t}</p>
          <p><b>Views</b> ${s}</p>
          <p><b>Comments</b> ${f}</p>
          <p><b>Downloads</b> ${p}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function q(){l.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",w);function w(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){a.error({message:"Please enter a search query!",position:"topRight"});return}S(),v(),y(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{a.error({message:"Something went wrong. Try again later.",position:"topRight"}),console.log(o)}).finally(()=>{q()}),u.reset()}
//# sourceMappingURL=index.js.map
