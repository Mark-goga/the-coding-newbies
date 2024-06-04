import{S as m,N as f,K as p,A as y}from"./assets/vendor-d34186f7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const v=document.querySelector(".container-reviews");document.querySelector(".swiper-button-prev");document.querySelector(".swiper-button-next");const u=document.querySelector(".reviews-list");u.children;function h(e,t){return e?e.length<=t?e:v.scrollWidth>=320&&v.scrollWidth<=767?e.slice(0,t)+"...":e:""}function E(){return fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error("Not found");return e.json()})}function b(e){const t=e.reduce((r,n)=>r+=`<li class="reviews-item swiper-slide"> <div class="swiper-item-wrap">
    <p class="reviews-item-text">${h(n.review,180)}</p>
    <div class="reviews-item-wrap">
    <img src="${n.avatar_url}" alt="${n.author}" class="reviews-item-img">
    <h3 class="reviews-item-title">${n.author}</h3>
    </div>
    </div>
    </li>`,"");u.insertAdjacentHTML("beforeend",t)}function L(){window.innerWidth>=1280?new m(".mySwiper",{speed:400,slidesPerView:2,spaceBetween:32,modules:[f,p],keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}):new m(".mySwiper",{speed:400,spaceBetween:100,modules:[f,p],keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),E().then(e=>{b(e)}).catch(e=>{alert("Error: "+e.message),u.innerHTML="<li class='reviews-item'><div class='not-found-wrap'><span class='not-found'>Not found<span></div></li>"})}function S(){const e=document.getElementById("toggleSwitch"),t=document.querySelectorAll(".header-link"),r=document.querySelector(".header-logo");e.addEventListener("click",function(){this.checked?(document.body.classList.add("dark-mode"),t.forEach(n=>{n.classList.add("black-theme-link")}),r.classList.add("black-theme-logo")):(document.body.classList.remove("dark-mode"),r.classList.remove("black-theme-logo"),t.forEach(n=>{n.classList.remove("black-theme-link")}))})}function k(){document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".load-more-btn"),t=document.querySelectorAll(".my-project-card.js-none");let r=0;const n=3;function o(){let s=0;for(;s<n&&r<t.length;)t[r].classList.remove("js-none"),r++,s++;r>=t.length&&(e.style.display="none")}e.addEventListener("click",o)})}const w=document.querySelector(".faq-list"),q=w.querySelectorAll(".faq-item");new y(w,{duration:400,showOne:!0,showMultiple:!1,onToggle:function(e){const r=e.target.closest(".questions").parentNode;q.forEach(o=>o.classList.remove("is-active")),r.classList.toggle("is-active");const n=r.previousElementSibling;n&&(console.log(n),n.style.borderBottom=r.classList.contains("is-active")?"none":"")}});document.querySelectorAll(".faq-item.btn-answear").forEach(function(e){e.addEventListener("click",function(){var t=e.closest(".faq-item");t.classList.toggle("is-active")})});const i=document.getElementById("cooperation-form"),l=document.getElementById("modal"),I=document.querySelector(".close-button");document.getElementById("reviews-container");const c={email:"",message:""};function O(){i.addEventListener("submit",async t=>{t.preventDefault();const r=new FormData(i),n=Object.fromEntries(r.entries());try{(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).ok?(localStorage.removeItem("feedback-form-state"),i.reset(),j()):(g("Failed to send the message. Please try again."),i.elements.email.value=c.email,i.elements.comment.value=c.message)}catch(o){console.error("Error:",o),g("An error occurred. Please try again.")}}),I.addEventListener("click",d),l.addEventListener("click",t=>{t.target===l&&d()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&d()}),i.addEventListener("input",t=>{const r=t.currentTarget.elements;c.email=r.email.value.trim(),c.message=r.comment.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(c))});const e=JSON.parse(localStorage.getItem("feedback-form-state"));i.elements.email.value=e?e.email:"",i.elements.comment.value=e?e.message:""}function j(){l.style.display="flex"}function d(){l.style.display="none"}function g(e){alert(e)}S();L();k();O();
//# sourceMappingURL=commonHelpers.js.map
