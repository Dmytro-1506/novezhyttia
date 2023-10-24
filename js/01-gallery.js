import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

galleryItems.map(element => {
    const itemBox = document.createElement('div');
    itemBox.classList.add("gallery__item");

    const itemLink = document.createElement('a');
    itemLink.classList.add("gallery__link");
    itemLink.setAttribute('href', element.original);

    const itemImg = document.createElement('img');
    itemImg.classList.add("gallery__image");
    itemImg.setAttribute('src', element.preview);
    itemImg.setAttribute('data-source', element.original);
    itemImg.setAttribute('alt', element.description);

    itemLink.append(itemImg);
    itemBox.append(itemLink);
    galleryList.append(itemBox);
})

galleryList.addEventListener('click', (event) => {
    event.preventDefault();
    const imageItem = event.target;
    imageItem.setAttribute('src', imageItem.dataset.source);
    const itemLink = event.target.parentNode;
    const instance = basicLightbox.create(`
    <div class="modal">${itemLink.innerHTML}</div>
`)
instance.show()
})
