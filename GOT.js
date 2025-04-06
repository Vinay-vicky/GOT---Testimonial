AOS.init();

const quotes = [
  {
    quote: "Never forget what you are. The world will not. Wear it like armor.",
    author: "Tyrion Lannister",
    img: "./Images/1.avif"
  },
  {
    quote: "There is only one thing we say to Death: Not today.",
    author: "Syrio Forel",
    img: "./Images/2.avif"
  },
  {
    quote: "The man who passes the sentence should swing the sword. If you would take a man's life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die.",
    author: "Ned Stark",
    img: "./Images/3.avif"
  },
  {
    quote: "Stick Them With The Pointy End",
    author: "Jon Snow",
    img: "./Images/5.avif"
  },
  {
    quote: "Winter Is Coming",
    author: "Ned Stark",
    img: "./Images/4.avif"
  },
  {
    quote: "When the snows fall and the white winds blow, the lone wolf dies but the pack survives.",
    author: "Sansa Stark",
    img: "./Images/6.avif"
  },
  {
    quote: "Any Man Who Must Say ‘I Am The King’ Is No True King",
    author: "Tywin Lannister",
    img: "./Images/7.avif"
  },
  {
    quote: "Power resides where men believe it resides. It's a trick. A Shadow on the wall. And... a very small man can cast a very large shadow.",
    author: "Varys",
    img: "./Images/8.avif"
  },
  {
    quote: "You Know Nothing, Jon Snow",
    author: "Ygritte",
    img: "./Images/9.avif"
  },
  {
    quote: "Know Your Strengths, Use Them Wisely, And One Man Can Be Worth Ten Thousand",
    author: "Littlefinger",
    img: "./Images/11.avif"
  },
  {
    quote: "I’m Not Going To Stop The Wheel. I’m Going To Break The Wheel",
    author: "Daenerys Targaryen",
    img: "./Images/12.avif"
  },
  {
    quote: "Chaos isn't a pit. Chaos is a ladder.",
    author: "Littlefinger",
    img: "./Images/14.avif"
  },
  {
    quote: "When You Play The Game Of Thrones, You Win Or You Die",
    author: "Cersei Lannister",
    img: "./Images/15.avif"
  },
  {
    quote: "Love Is The Death Of Duty",
    author: "Maester Aemon",
    img: "./Images/16.avif"
  },
];

const carouselInner = document.getElementById('carousel-inner');
const indicators = document.getElementById('carousel-indicators');

quotes.forEach((q, index) => {
  const item = document.createElement('div');
  item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
  item.innerHTML = `
    <div class="carousel-caption" data-aos="zoom-in" data-aos-duration="1200">
      <div class="quote-text" id="quote-${index}"></div>
      <img src="${q.img}" alt="${q.author}">
      <div id="image-caption">${q.author}</div>
    </div>
  `;
  carouselInner.appendChild(item);

  const indicator = document.createElement('li');
  indicator.setAttribute('data-target', '#quoteCarousel');
  indicator.setAttribute('data-slide-to', index);
  if (index === 0) indicator.className = 'active';
  indicators.appendChild(indicator);
});

// Typing effect
let current = 0;
function typeQuote() {
  const quoteEl = document.getElementById(`quote-${current}`);
  const quote = quotes[current].quote;
  quoteEl.innerHTML = '';
  let charIndex = 0;

  function typeChar() {
    if (charIndex < quote.length) {
      quoteEl.innerHTML += quote.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 40);
    }
  }
  typeChar();
}
typeQuote();

$('#quoteCarousel').on('slide.bs.carousel', function (e) {
  current = e.to;
  setTimeout(typeQuote, 400); // Delay for smoothness
});

// Theme toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');
});

// Music toggle
const bgMusic = document.getElementById('bg-music');
bgMusic.volume = 0.3;
bgMusic.play();

document.getElementById('musicToggle').addEventListener('click', () => {
  bgMusic.muted = !bgMusic.muted;
  document.getElementById('musicToggle').textContent = bgMusic.muted ? '🔇' : '🔊';
});
