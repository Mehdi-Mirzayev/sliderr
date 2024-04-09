
const slidesContainer = document.querySelector('.slides');


const imageUrls = [
  'https://ideacdn.net/idea/da/02/myassets/products/290/2as-massif-3in1-erkek-ceket-mont-63205.jpeg?revision=1710155336',
  'https://static.ticimax.cloud/cdn-cgi/image/width=-,quality=85/52168/uploads/urunresimleri/buyuk/moon-canta-050-48.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJiaW5opaEnXw7a4Sd1akK8tTKJzWmKdhgNPhlOUT2fQ&s',
  
];


imageUrls.forEach(imageUrl => {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  const image = document.createElement('img');
  image.src = imageUrl;
  slide.appendChild(image);
  slidesContainer.appendChild(slide);
});


let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= imageUrls.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}


setInterval(nextSlide, 3000);

