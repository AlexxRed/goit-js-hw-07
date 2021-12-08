import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImageClick)

function createImagesMarkup(items) {
    return items.map(item => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
    </a>
</div>`
    ).join('')
};

const insertMarkup =  createImagesMarkup(galleryItems)

galleryRef.innerHTML = insertMarkup

function onImageClick(e) {
    e.preventDefault();
    
}