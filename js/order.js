// Declaring variables for Slider News buttons
const prevBtnSliderNews = document.getElementById("prev-btn");
const nextBtnSliderNews = document.getElementById("next-btn");
// Declaring variables for About News buttons
const prevBtnAboutNews = document.getElementById("prev-btn-about-news");
const netxBtnAboutNews = document.getElementById("next-btn-about-news");

// Array to hold slides  for Slider News
let slides = [];
for (let i = 1; i <= 3; i++) {
  slides.push(document.getElementById(`slide-${i}`));
}
// Array to hold dots for Slider News
let dots = [];
for (let i = 1; i <= 3; i++) {
  dots.push(document.getElementById(`dot-${i}`));
}
// Array to hold slides for About News
let aboutNewsItems = [];
for (let i = 1; i <= 3; i++) {
  aboutNewsItems.push(document.getElementById(`item-${i}`));
}
// Variables for About News delays 
let delays = [0, -6, -12];
let animation_delay = 6;

// Add event listeners to Slider News buttons
prevBtnSliderNews.addEventListener("click", prevSlideNews);
nextBtnSliderNews.addEventListener("click", nextSlideNews);
// Add event listeners to Slider About News buttons
prevBtnAboutNews.addEventListener("click", prevSlideAboutNews);
netxBtnAboutNews.addEventListener("click", nextSlideAboutNews);

// Add event listeners to Slider News dots
for(let i = 0; i < dots.length; i++){
    dots[i].addEventListener("click", navDotsNews);
}
// Auto-transition every 7 seconds for Slider News
let slideInterval = window.setInterval(nextSlideNews, 7000);
// Reset the interval when clicked on a button
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = window.setInterval(nextSlideNews, 7000);   
}

// Update slide and dot classes for Slider News
function updateSlideNews(currentSlide, targetSlide){
    currentSlide.classList.remove("active");
    targetSlide.classList.add("active"); 
}
function updateDotsNews(currentDot, targetDot){
    currentDot.classList.remove("active-dot");
    targetDot.classList.add("active-dot");
}
// Navigate to the next slide for Slider News
function nextSlideNews(){
    const currentSlide = document.querySelector(".active");
    let nextSlide = currentSlide.nextElementSibling; 
    const currentDot = document.querySelector(".active-dot");
    let nextDot = currentDot.nextElementSibling; 
    if (!nextSlide) {
        nextSlide = slides[0];
        nextDot = dots[0];
    }
    updateSlideNews(currentSlide, nextSlide); 
    updateDotsNews(currentDot, nextDot); 
    resetInterval();  
};
// Navigate to the previous slide for Slider News
function prevSlideNews(){
    const currentSlide = document.querySelector(".active");
    let prevSlide = currentSlide.previousElementSibling;
    const currentDot = document.querySelector(".active-dot");
    let prevDot = currentDot.previousElementSibling;
    if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
        prevDot = dots[dots.length - 1];
    }
    updateSlideNews(currentSlide, prevSlide);
    updateDotsNews(currentDot, prevDot);
    resetInterval(); 
};
// Navigate using dots for Slider News
function navDotsNews (e){
    const targetDot = e.target.closest("button");
    if(!dots){
        return;
    };
    const currentSlide = document.querySelector(".active");
    const currentDot = document.querySelector(".active-dot"); 
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    updateDotsNews(currentDot, targetDot);
    updateSlideNews(currentSlide, targetSlide, currentDot);
    resetInterval(); 
}

// Update the animation for About News carousel
function updateAnimationDelays() {
    for (let i = 0; i < aboutNewsItems.length; i++) {
      aboutNewsItems[i].style.animationDelay = `${delays[i]}s`;
    }
}
// Calling the function to set the delays for About News carousel
updateAnimationDelays();
// Navigate to the previous slide for About News carousel
function prevSlideAboutNews() {
    delays = delays.map(delay => delay + animation_delay); 
    updateAnimationDelays();
}
// Navigate to the next slide for About News carousel
function nextSlideAboutNews() {
    delays = delays.map(delay => delay - animation_delay); 
    updateAnimationDelays();
}
