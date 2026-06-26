let nav = document.getElementById("navigation");
const books = document.getElementsByClassName("book");
const overlay = document.getElementById('overlay');

// modal elements
const modal = document.getElementById('bookModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');


let activeBook = null;

Array.from(books).forEach(book => {
    book.addEventListener('click', (e) => {
        e.stopPropagation();
        openBookModal(book);
    });
});

function openBookModal(book) {
    activeBook = book;

    // gather data from attributes (provide defaults if absent)
    const imgSrc = book.getAttribute('src') || book.dataset.src || '';
    const title = book.dataset.title || book.getAttribute('alt') || 'Untitled';
    const author = book.dataset.author || '';
    const desc = book.dataset.desc || 'No description provided.';

    modalImage.src = imgSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalMeta.textContent = author ? `By ${author}` : '';
    modalDesc.textContent = desc;

    // show overlay and modal
    overlay.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');

    // focus management

}

function closeBookModal() {
    activeBook = null;
    overlay.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    // clear image to stop large downloads/old images
    modalImage.src = '';
}

modalClose.addEventListener('click', (e) => { e.stopPropagation(); closeBookModal(); });
overlay.addEventListener('click', closeBookModal);

