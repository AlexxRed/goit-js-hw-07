import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImageClick);

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

const insertMarkup = createImagesMarkup(galleryItems);

galleryRef.innerHTML = insertMarkup;

function onImageClick(e) {
    e.preventDefault();

    if (e.target.className !== 'gallery__image') {return};

    const selectedImage = e.target.dataset.source;
    const selectedAlt = e.target.attributes.alt.nodeValue
    const minImage = e.target.attributes.src.nodeValue

    const instance = basicLightbox.create(`
    <img
    class="gallery__image-open"    
    src="${selectedImage}"
    alt="${selectedAlt}"
    data-source="${minImage}"
    />
    `);

    if (!basicLightbox.visible()) {
        instance.show();
        window.addEventListener('keydown', closeModal);
        
    function closeModal(e) {
        if (e.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', closeModal);
        };
    }
    } 
}