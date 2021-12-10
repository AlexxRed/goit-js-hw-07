import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

galleryRef.addEventListener('click', onImageClick);

// ============================== create markup ==================================

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

// ============================== remove listener =================================

function closeModal(e) {
        if (e.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', closeModal);
            console.log(e); //only for check
        };
};

// ============================== add lightbox ====================================

const instance = basicLightbox.create(`
    <img
    class="gallery__image-open"    
    src=""
    alt=""
    data-source=""
    />
    `,
        {
            onShow: (instance) => {
                window.addEventListener('keydown', closeModal);
            },
        },
        {
            onClose: (instance) => {
                window.removeEventListener('keydown', closeModal);
            }
    },
    );

// ============================== make click ====================================

function onImageClick(e) {
    e.preventDefault();

    if (e.target.className !== 'gallery__image') {return};

    const selectedImage = e.target.dataset.source;//${selectedImage}
    const selectedAlt = e.target.attributes.alt.nodeValue;//${selectedAlt}
    const minImage = e.target.attributes.src.nodeValue;//${minImage}

    instance.element().querySelector('img').src = selectedImage;
    instance.element().querySelector('img').alt = selectedAlt;
    instance.element().querySelector('img').dataSource = minImage;

    instance.show();
    console.log(e);  //only for check
};
