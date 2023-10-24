import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryItemsArr = [];

galleryItems.map(element => {
    const galleryItem = `<div class="gallery__item"><a class="gallery__link" href=${element.original}>
    <img
      class="gallery__image"
      src=${element.preview}
      data-source=${element.original}
      alt=${element.description}
    />
  </a></div>`;
    galleryItemsArr.push(galleryItem);
})

galleryList.innerHTML = galleryItemsArr.join('');

let gallery = new SimpleLightbox('.gallery a');

galleryList.addEventListener('click', (event) => {
    event.preventDefault();    
})

