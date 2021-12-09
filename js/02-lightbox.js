import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImageClick);

function createImagesMarkup(items) {
    return items.map(item => 
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
    ).join('')
};

const insertMarkup = createImagesMarkup(galleryItems);

galleryRef.innerHTML = insertMarkup;

function onImageClick(e) {
    e.preventDefault();
    if (e.target.className !== 'gallery__image') { return };
    
    new SimpleLightbox('.gallery__item', {
        captions: true,
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });
}