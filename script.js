const navToggle = document.querySelector('.nav__toggle');
const navWrapper = document.querySelector('.nav__wrapper');
const closeNav = document.querySelector('.close_nav');
const login = document.querySelector('.login');
const navMenu = document.querySelector('.nav__menu');

// header
navToggle.addEventListener("click", function() {
  console.log("click")
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
  }
})

closeNav.addEventListener("click", function() {
  if (navWrapper.classList.contains("active")) {
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
  }
})

login.addEventListener("click", function() {
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active")
  } else {
    navMenu.classList.add("active");
    this.classList.add("active");
  }
})



// let offset = -1140;
//
// const sliderLine = document.querySelector('.slider-line');
// sliderLine.style.left = "-1140px";

// leftScroll
// const leftScroll = document.getElementById('left-scroll');
// leftScroll.addEventListener("click", function() {
//   offset += 1140;
//
//   if (offset > 0) {
//     offset = -1140
//   }
//
//   sliderLine.style.left = offset + "px";
// });

// rightScroll
// const rightScroll = document.getElementById('right-scroll');
// rightScroll.addEventListener("click", function() {
//   offset -= 1140;
//
//   if (offset == -3420) {
//     offset = -1140
//   }
//
//   sliderLine.style.left = offset + "px";
// });

// viewMore cards
// const viewMore = document.getElementById('view');
// const cardsMore = document.querySelectorAll('.additional');
//
// viewMore.addEventListener('click', function() {
//   for (var i = 0; i < cardsMore.length; i++) {
//     const display = cardsMore[i].style.display
//
//    if (display === 'none') {
//       cardsMore[i].style.display = "block";
//       viewMore.innerHTML = '<i class="fas fa-arrow-up"></i>'
//    }
//    else if (display === 'block') {
//      cardsMore[i].style.display = "none";
//       viewMore.innerText = "View more";
//    }
//   }
// });
