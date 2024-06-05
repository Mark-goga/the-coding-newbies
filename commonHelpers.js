import{S as m,N as f,K as p,A as E}from"./assets/vendor-d34186f7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const v=document.querySelector(".container-reviews");document.querySelector(".swiper-button-prev");document.querySelector(".swiper-button-next");const u=document.querySelector(".reviews-list");u.children;function b(e,t){return e?e.length<=t?e:v.scrollWidth>=320&&v.scrollWidth<=767?e.slice(0,t)+"...":e:""}function L(){return fetch("https://portfolio-js.b.goit.study/api/reviews").then(e=>{if(!e.ok)throw new Error("Not found");return e.json()})}function S(e){const t=e.reduce((o,r)=>o+=`<li class="reviews-item swiper-slide"> <div class="swiper-item-wrap">
    <p class="reviews-item-text">${b(r.review,180)}</p>
    <div class="reviews-item-wrap">
    <img src="${r.avatar_url}" alt="${r.author}" class="reviews-item-img">
    <h3 class="reviews-item-title">${r.author}</h3>
    </div>
    </div>
    </li>`,"");u.insertAdjacentHTML("beforeend",t)}function k(){window.innerWidth>=1280?new m(".mySwiper",{speed:400,slidesPerView:2,spaceBetween:32,modules:[f,p],keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}):new m(".mySwiper",{speed:400,spaceBetween:100,modules:[f,p],keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),L().then(e=>{S(e)}).catch(e=>{alert("Error: "+e.message),u.innerHTML="<li class='reviews-item'><div class='not-found-wrap'><span class='not-found'>Not found<span></div></li>"})}function q(){const e=document.getElementById("toggleSwitch"),t=document.querySelectorAll(".header-link"),o=document.querySelector(".header-logo");e.addEventListener("click",function(){this.checked?(document.body.classList.add("dark-mode"),t.forEach(r=>{r.classList.add("black-theme-link")}),o.classList.add("black-theme-logo")):(document.body.classList.remove("dark-mode"),o.classList.remove("black-theme-logo"),t.forEach(r=>{r.classList.remove("black-theme-link")}))})}function I(){document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".load-more-btn"),t=document.querySelectorAll(".my-project-card.js-none");let o=0;const r=3;function n(){let s=0;for(;s<r&&o<t.length;)t[o].classList.remove("js-none"),o++,s++;o>=t.length&&(e.style.display="none")}e.addEventListener("click",n)})}const h=document.querySelector(".faq-list"),O=h.querySelectorAll(".faq-item");new E(h,{duration:400,showOne:!0,showMultiple:!1,onToggle:function(e){const o=e.target.closest(".questions").parentNode;O.forEach(n=>n.classList.remove("is-active")),o.classList.toggle("is-active");const r=o.previousElementSibling;r&&(console.log(r),r.style.borderBottom=o.classList.contains("is-active")?"none":"")}});document.querySelectorAll(".faq-item.btn-answear").forEach(function(e){e.addEventListener("click",function(){var t=e.closest(".faq-item");t.classList.toggle("is-active")})});const i=document.getElementById("cooperation-form"),c=document.getElementById("modal"),B=document.querySelector(".close-button");document.getElementById("reviews-container");const y=document.querySelector(".cooperation-iput-svg"),g=document.querySelector(".cooperation-input-text"),l={email:"",message:""};function N(){i.addEventListener("submit",async t=>{t.preventDefault();const o={email:"",comment:""},r=i.elements.email,n=i.elements.comment;try{o.email=r.value.trim(),o.comment=n.value.trim(),(await fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)})).ok?(localStorage.removeItem("feedback-form-state"),i.reset(),j()):(w("Failed to send the message. Please try again."),i.elements.email.value=l.email,i.elements.comment.value=l.message)}catch(s){console.error("Error:",s),w("An error occurred. Please try again.")}}),B.addEventListener("click",d),c.addEventListener("click",t=>{t.target===c&&d()}),document.addEventListener("keydown",t=>{t.key==="Escape"&&d()}),i.addEventListener("input",t=>{const o=t.currentTarget.elements;l.email=o.email.value.trim(),l.message=o.comment.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(l)),o.email.validity.valid?(o.email.style.color="#e74a3b",y.style.display="block",g.style.display="none"):(y.style.display="none",g.style.display="block")});const e=JSON.parse(localStorage.getItem("feedback-form-state"));i.elements.email.value=e?e.email:"",i.elements.comment.value=e?e.message:""}function j(){c.style.display="flex"}function d(){c.style.display="none"}function w(e){alert(e)}q();k();I();N();
//# sourceMappingURL=commonHelpers.js.map
