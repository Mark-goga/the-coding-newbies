// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import * as basicLightbox from 'basiclightbox';

// document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cooperation-form');
  const modal = document.getElementById('modal');
  const closeButton = document.querySelector('.close-button');
  const reviewsContainer = document.getElementById('reviews-container');
const formDataLocal = {
  email: "",
  message: "",
};
  // Function to fetch and display reviews
  // async function fetchReviews() {
  //   try {
  //     const response = await fetch('https://portfolio-js.b.goit.study/api/reviews');
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch reviews');
  //     }
  //     const reviews = await response.json();
  //     displayReviews(reviews);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }

  // function displayReviews(reviews) {
  //   reviewsContainer.innerHTML = '';
  //   reviews.forEach(review => {
  //     const reviewElement = document.createElement('div');
  //     reviewElement.className = 'review';
  //     reviewElement.innerHTML = `
  //       <img src="${review.avatar_url}" alt="${review.author}" class="avatar">
  //       <p><strong>${review.author}</strong></p>
  //       <p>${review.review}</p>
  //     `;
  //     reviewsContainer.appendChild(reviewElement);
  //   });
  // }

  // // Fetch reviews on page load
  // fetchReviews();

export default function workTogether() {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        localStorage.removeItem("feedback-form-state");
        form.reset();
        openModal();
      } else {
        showError('Failed to send the message. Please try again.');
        form.elements.email.value = formDataLocal.email;
        form.elements.comment.value = formDataLocal.message;
      }
    } catch (error) {
      console.error('Error:', error);
      showError('An error occurred. Please try again.');
    }
  });

  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
  form.addEventListener('input', (evn) => {
    const formElements = evn.currentTarget.elements;
    formDataLocal.email = formElements.email.value.trim();
    formDataLocal.message = formElements.comment.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formDataLocal));
  });
  const localData = JSON.parse(localStorage.getItem("feedback-form-state")) ;
  form.elements.email.value = localData ? localData.email : "";
  form.elements.comment.value = localData ? localData.message : "";
}
  function openModal() {
    modal.style.display = 'flex';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  function showError(message) {
    alert(message);
  }
// });


