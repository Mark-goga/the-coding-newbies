import{S as l,N as u,K as a}from"./assets/vendor-c2c4a160.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();document.querySelector(".swiper-button-prev");document.querySelector(".swiper-button-next");const c=document.querySelector(".reviews-list");function d(){return fetch("https://portfolio-js.b.goit.study/api/reviews").then(t=>{if(!t.ok)throw new Error("Not found");return t.json()})}function f(t){const s=t.reduce((o,i)=>o+=`<li class="reviews-item swiper-slide"> <div class="swiper-item-wrap">
    <p class="reviews-item-text">${i.review}</p>
    <div class="reviews-item-wrap">
    <img src="${i.avatar_url}" alt="${i.author}" class="reviews-item-img">
    <h3 class="reviews-item-title">${i.author}</h3>
    </div>
    </div>
    </li>`,"");c.insertAdjacentHTML("beforeend",s)}function p(){new l(".mySwiper",{speed:400,spaceBetween:100,modules:[u,a],keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),d().then(t=>{f(t)}).catch(t=>{alert("Error: "+t.message),c.innerHTML="<li class='reviews-item'><span class='not-found'>Not found<span></li>"})}p();
//# sourceMappingURL=commonHelpers.js.map
