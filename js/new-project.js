// Declaring variables for Slider Project buttons
const nextBtnProjectSections = document.getElementById("arrow-right");
const prevBtnProjectSections = document.getElementById("arrow-left");
// Array to hold slides  for Slider Project
let slidesProjects = [];
for (let i = 1; i <= 6; i++) {
  slidesProjects.push(document.getElementById(`slide-${i}`));
}
// Array to hold dots for Slider Project
let dotsProjects = [];
for (let i = 1; i <= 6; i++) {
  dotsProjects.push(document.getElementById(`dot-${i}`));
}
// Add event listeners to Slider Project dots
for(let i = 0; i < dotsProjects.length; i++){
    dotsProjects[i].addEventListener("click", navDotsprojects);
}
// Add event listeners to Slider Project buttons
nextBtnProjectSections.addEventListener("click", nextSlideProjects);
prevBtnProjectSections.addEventListener("click", prevSlideProjects);

// Auto-transition every 7 seconds for Slider News
let slideInterval = window.setInterval(nextSlideProjects, 7000);
// Reset the interval when clicked on a button
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = window.setInterval(nextSlideProjects, 7000);   
}
// Update slide and dot classes for Slider project
function updateSlideprojects(currentSlide, targetSlide){
    currentSlide.classList.remove("active-slide");
    targetSlide.classList.add("active-slide"); 
}
function updateDotsProjects(currentDot, targetDot){
    currentDot.classList.remove("active-nav-dot");
    targetDot.classList.add("active-nav-dot");
}
// Navigate to the next slide for Slider Project
function nextSlideProjects(){
    const currentSlide = document.querySelector(".active-slide");
    let nextSlide = currentSlide.nextElementSibling; 
    const currentDot = document.querySelector(".active-nav-dot");
    let nextDot = currentDot.nextElementSibling; 
    if (!nextSlide) {
        nextSlide = slidesProjects[0];
        nextDot = dotsProjects[0];
    }
    updateSlideprojects(currentSlide, nextSlide); 
    updateDotsProjects(currentDot, nextDot);  
    resetInterval(); 
};
// Navigate to the previous slide for Slider Project
function prevSlideProjects(){
    const currentSlide = document.querySelector(".active-slide");
    let prevSlide = currentSlide.previousElementSibling;
    const currentDot = document.querySelector(".active-nav-dot");
    let prevDot = currentDot.previousElementSibling;
    if (!prevSlide) {
        prevSlide = slidesProjects[slidesProjects.length - 1];
        prevDot = dotsProjects[dotsProjects.length - 1];
    }
    updateSlideprojects(currentSlide, prevSlide);
    updateDotsProjects(currentDot, prevDot);
    resetInterval(); 
};
// Navigate using dots for Slider Project
function navDotsprojects (e){
    const targetDot = e.target.closest("button");
    if(!dotsProjects){
        return;
    };
    const currentSlide = document.querySelector(".active-slide");
    const currentDot = document.querySelector(".active-nav-dot"); 
    const targetIndex = dotsProjects.findIndex(dot => dot === targetDot);
    const targetSlide = slidesProjects[targetIndex];
    updateDotsProjects(currentDot, targetDot);
    updateSlideprojects(currentSlide, targetSlide, currentDot);
    resetInterval(); 
}