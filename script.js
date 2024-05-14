

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    
    var typed = new Typed(".typing", {
        strings: ["Web Developes...⭐⭐⭐",  "Talented Coders......"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Web Developes..⭐⭐⭐",  "Talented Coder...."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        strings: ["Game Developer", "Website Maker", "Designer", "Talented Coder"],
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});








const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('', '', '#contact-form', '')
        .then(() => {

            contactMessage.textContent = 'Message sent successfully ✅'


            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

      
            contactForm.reset()
        }, () => {
    
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}
contactForm.addEventListener('submit', sendEmail)



var main = document.querySelector("body");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function(event){
    cursor.style.transform = "translate(" + (event.clientX - 10) + "px, " + (event.clientY - 10) + "px)";
});



const leftSideElement = document.getElementById("left-side");


const handleMovement = (event) => {
  const clientX = event.touches ? event.touches[0].clientX : event.clientX;
  const newWidthPercentage = (clientX / window.innerWidth) * 100;
  leftSideElement.style.width = `${newWidthPercentage}%`;
};


document.addEventListener("mousemove", handleMovement);
document.addEventListener("touchmove", (event) => handleMovement(event));


const animateTextChange = (event) => {
  const targetElement = event.target;
  let iterations = 0;
  const interval = setInterval(() => {
    targetElement.innerText = targetElement.innerText
      .split("")
      .map((char, index) =>
        index < iterations ? targetElement.dataset.value[index] : randomSign()
      )
      .join("");
    if (iterations >= targetElement.dataset.value.length)
      clearInterval(interval);
    iterations++;
  }, 30);
};


const randomSign = () =>
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];


const enhanceTextWithSpans = (id) => {
  const element = document.getElementById(id);
  const letters = element.innerText.split("");
  element.innerText = "";
  letters.forEach((letter) => {
    const span = document.createElement("span");
    span.className = "letter";
    span.innerText = letter;
    element.appendChild(span);
  });
};


document
  .getElementById("backend")
  .addEventListener("mousemove", animateTextChange);
enhanceTextWithSpans("frontend");








