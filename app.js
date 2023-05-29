// Beginning of circle
const circle = document.getElementById('circle')
const countdown = document.querySelector('.countdown')
const background = document.querySelector('.background-container')
const title = document.querySelector('.title')
const spanOne = document.querySelector('.span-one')
const nav = document.querySelector('.nav-toggle')
const image = document.querySelector('.image-container-two')
const secThree = document.querySelector('.section-three')

circle.addEventListener('click', function() {
    countdown.classList.toggle('show-countdown')
    background.classList.toggle('change')
    title.classList.toggle('modify')
    circle.classList.toggle('circle-two')
    spanOne.classList.toggle('modify-two')
    image.classList.toggle('off')
    secThree.classList.toggle('off')
})

nav.addEventListener('click', function() {
    nav.classList.toggle('rotate')
})

circle.addEventListener('click', function() {
    this.style.display = "none"

    setTimeout(function() {
    circle.style.display = "inline-block"
      }, 450);
})
// End of Circle





// Parallax title on scroll
document.addEventListener('scroll', function() {   
    let scrollPosition = window.pageYOffset
    let background = document.querySelector('.background-container')
    let title = document.querySelector('.title')
    let stopPosition = 200; // Replace 500 with your desired stopping position

    // Calculate the adjusted scroll position
    let adjustedScrollPosition = scrollPosition;

    // Check if the scroll position is greater than the stop position
    if (scrollPosition > stopPosition) {
        adjustedScrollPosition = stopPosition; // Set the adjusted position to the stop position
    }

    // Apply the adjusted scroll position to the transform property
    background.style.transform = 'translateY(' + (adjustedScrollPosition * 0.1) + 'px)';
    title.style.transform = 'translateY(' + (adjustedScrollPosition * 0.2) + 'px)';
});
//End of parallax title








//Countdown

const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')



const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  let futureDate = new Date(2023,8,9,12,0,0)

  const futureTime = futureDate.getTime()

  function getRemainingTime() {
    const today = new Date().getTime()
    const t = futureTime - today

    const oneDay = 24 * 60 * 60 * 1000 
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    let days = t/oneDay
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay)/ oneHour)
    let minutes = Math.floor((t % oneHour / oneMinute))
    let seconds = Math.floor((t % oneMinute) / 1000)

    const values = [days, hours, minutes, seconds]

    function format(item) {
        if(item < 10) {
          return (item = `0${item}`)
        }
        return item
      }
      
    items.forEach(function(item,index) {
        item.innerHTML = format(values[index])
      })
  }

  let something = setInterval(getRemainingTime, 1000)


getRemainingTime()

// End of countdown

//Reveal element
  window.addEventListener("scroll", reveal)
    function reveal() {
      var reveals = document.querySelectorAll('.reveal')

      for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150
      

      if(revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }


  window.addEventListener("scroll", show)
    function show() {
      var reveals = document.querySelectorAll('.show')

      for(var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150
      

      if(revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }

  
// End of Reveal element

// Horizontal scrolling

const container = document.querySelector('.container')
const sections = gsap.utils.toArray('.container .section-scroll')
const texts = gsap.utils.toArray('anim')
const mask = document.querySelector('.mask')

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", 
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000"
  }
})

// Adjust the CSS properties
