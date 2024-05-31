import Swiper from 'swiper';
import { Navigation , Keyboard } from 'swiper/modules';
import 'swiper/css';

const prevButton = document.querySelector('.swiper-button-prev');
const nextButton = document.querySelector('.swiper-button-next');
const reviewsListEl = document.querySelector(".reviews-list");
var swiper = new Swiper(".mySwiper", {
    speed: 400,
    spaceBetween: 100,
    modules: [Navigation, Keyboard],
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function truncate(text, lenght) {
  if (!text) return '';

  if (text.length <= lenght) return text;

  return lenght === 10 ? text.slice(0, lenght) : text.slice(0, lenght) + '...';
};

function fetchReviews() {
  return fetch("https://portfolio-js.b.goit.study/api/reviews").then(response => {
    if (!response.ok) {
      throw new Error("Not found");
    }
    return response.json();
  });
}
// truncate(data.review , 180)
function renderReviews(dataReviews) {
  const render = dataReviews.reduce((markUp, data) => {
    return markUp += `<li class="reviews-item swiper-slide"> <div class="swiper-item-wrap">
    <p class="reviews-item-text">${data.review}</p>
    <div class="reviews-item-wrap">
    <img src="${data.avatar_url}" alt="${data.author}" class="reviews-item-img">
    <h3 class="reviews-item-title">${data.author}</h3>
    </div>
    </div>
    </li>`;
  }, '');
  reviewsListEl.insertAdjacentHTML('beforeend', render);
}

fetchReviews()
.then(data => {
    renderReviews(data);  
}).catch(error => {
    alert("Error: " + error.message);
    reviewsListEl.innerHTML = "<li class='reviews-item'><span class='not-found'>Not found<span></li>";
});

