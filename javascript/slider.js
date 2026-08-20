/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

const Vinyl = new Image();
Vinyl.src = 'resources/vinyl2.png';

const Handle = new Image();
Handle.src = 'resources/turntable.png';

let rotation = 0;
let isPlaying = false;
const play = document.getElementById('play');

play.addEventListener('click', () => {
    isPlaying = !isPlaying;
    play.textContent = isPlaying ? '\u23F8' : '\u25B6';
    play.setAttribute('aria-label', isPlaying ? 'Pause music' : 'Play music');
});

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (isPlaying) {
        rotation += 0.02;
    }

    ctx.save();
    ctx.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    ctx.rotate(rotation);
    ctx.drawImage(Vinyl, -CANVAS_WIDTH / 2, -CANVAS_HEIGHT / 2, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.restore();

    ctx.drawImage(Handle, 150, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    requestAnimationFrame(animate);
}

animate();





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 120,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination"
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    }
  }
});

