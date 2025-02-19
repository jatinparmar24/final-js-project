

let menutoggle=document.querySelector("#menu")
 let navlinks=document.querySelector("ul")

 menutoggle.addEventListener('click',()=>{
   menutoggle.classList.toggle('active');
   navlinks.classList.toggle('active');
})



// timee

setInterval(() => {
    let show=document.querySelector("#displays")
    let time= new Date()
 
    let currenttime=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
     show.innerHTML=currenttime
   },1000)
 



   const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".swiper2", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});