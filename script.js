function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
          return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
          };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();




}

init()

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




var t1 = gsap.timeline()


t1.to("#overflow h1",{
  scale: 1.2,
  color: "white",
  transition:"0.9s ease",
})

.to("#overflow",{
  top:"-100%",
  delay: "1",
})

.to(".nav2 a",{
  opacity: 1,
   top : "0vh",
   ease: Expo.easeInOut,
   duration : .8,
   scrub:3,

  //stagger => specific ek ek karke apply hota hai (stagger : .5),
})
.to("#one .left h1",{
  left : "15vw,",
  opacity : 1,
  ease: Expo.easeInOut,
  duration : 2,
})
.to("#one .left span",{
  opacity : 1,
  ease: Expo.easeInOut,
  duration : 1.5,
  TextTransform : "upparcase"
})

gsap.to(".center img",{
  opacity : 1,
  ease: Expo.easeInOut,
  duration : 2,
  left : 0
})

t1.to(".left .down1 h1",{
  opacity: 1
})

t1.to("#four .left h1 span",{
  opacity: 1
})

var p2 = gsap.timeline()

p2.to("#page-2 h1",{
  top: "4vh",
  opacity:1,
  scrollTrigger:{
    scroller: "#main",
    Trigger: "#page-2 h1",
    // markers: true,
    start:" 30%", 
    end: "35%",
    scrub:3,
  }
})

.to("#cards-1",{
  transform: "translate(3%,0)",
  scrollTrigger:{
    scroller: "#main",
    Trigger: "#cards-1",
    // markers: true,
    start:" 100%", 
    end: "110%",
    scrub:3,
  }
})


var t3 = gsap.timeline({
  repeat: -1
})

t3.to("#centerial",{
  transform: "translate(5.5%,5.5%) scale(1)",
  scrollTrigger:{
    scroller: "#main",
    Trigger: "#centerial",
    start: "130%",
    end: "170%",
    scrub: 3,
    // markers: true
  }
})

.to("#paper .ek",{
  height : "100%",
  ease: Expo.easeInOut,
  duration : 4,
  stagger : 2.5,
  scrub: 3,
}, 'kam')

.to("#text h1",{
  top: "-60%",
  ease: Expo.easeInOut,
  duration: 4,
  stagger : 2.7,
}, 'kam')

.to("#text h1",{
  delay: 2,
  top: "-100%",
  ease: Expo.easeInOut,
  duration: 4,
  stagger : 2.7,
}, 'kam')

.to("#para p",{
  top: "0%",
  ease: Expo.easeInOut,
  duration: 3,
  stagger : 2.8,
}, 'kam')

.to("#para p",{
  delay: 2,
  top: "-100%",
  ease: Expo.easeInOut,
  duration: 3,
  stagger : 2.8,
}, 'kam')

var t5 = gsap.timeline()

t5.to("#page-4 h1",{
  top: "3vh",
  opacity:1,
  scrollTrigger:{
    scroller: "#main",
    Trigger: "#page-4 h1",
    start: "200%",
    end: "230%",
    scrub:3,
  }
})

.to("#page-4 .t2",{
  transform: "translate(21%,0%)",
  scrollTrigger:{
    scroller: "#main",
    Trigger: "#page-4 .t2",
    start: "200%",
    end: "230%",
    scrub:3,
  }
})

.to("#page-4 #card ",{
  marginLeft: "0",
  scrollTrigger:{
    scroller: "#main",
    Trigger: "#page-4 #card",
    start: "230%",
    end: "270%",
    scrub:3,
  }
})

.to("#page-5 .s1 ",{
  left: "0",
  scrollTrigger:{
    scroller: "#main",
    Trigger: "#page-5 .s1",
    start: "300%",
    end: "340%",
    scrub:3,
  }
})

