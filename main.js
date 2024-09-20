// toggle bar ------------------

let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
} 

// scroll Section-------------

let sections=document.querySelectorAll("section");
let navlinks=document.querySelectorAll("header nav a");

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute("id");

        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*="+id+"]").classList.add("active");
                
            })
        }
    })


// sticky navbar------------ 

let header=document.querySelector("header");
header.classList.toggle('sticky',window.scrollY>100);

// remove toggle icon and navbar----
menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");
}

// scroll reveal------
ScrollReveal({
    distanc:"80px",
    duration:1500,
    delay:200,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.home-content, heading', { origin:'top'});
ScrollReveal().reveal('.home-img ,.services-container, .portfolio-box,.contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// typed JS------------
const typed = new Typed(".multiple-text", {
    strings: ['Frontend Developer', 'Web Designer', 'MERN Stack Developer'],
    typeSpeed: 60,  // Smooth typing speed
    backSpeed: 40,  // Smooth backspacing speed
    backDelay: 2000,
    loop: true,
});





