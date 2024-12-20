var page1Timeline = gsap.timeline();

page1Timeline.from("#logo", {
  y: -20,
  duration: 0.8,
  opacity: 0,
});

page1Timeline.from("#nav-items", {
  y: -20,
  duration: 0.5,
  opacity: 0,
});

/* Writing this way will make sure my animation for page2leftbrand and page2right will run at the same time
  instead of running one after another
*/
page1Timeline.add([
  gsap.from("#page2leftbrand", {
    transform: "translateX(-50%)",
    opacity: 0,
    duration: 0.8,
    stagger: 1,
  }),
  gsap.from("#page2right img", {
    transform: "translateX(50%)",
    opacity: 0,
    duration: 0.8,
  }),
]);

page1Timeline.add([
  gsap.from(".left-customers", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 2,
    ease: true,
  }),
  gsap.from(".right-customers", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: -2,
    ease: true,
  }),
]);
