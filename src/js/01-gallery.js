// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line


console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');


function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) =>
        `<li> <a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a></li>`
    ).join('');

};


const listItemsMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', listItemsMarkup);



const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });