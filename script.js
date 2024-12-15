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

gsap.from("#page2leftbrand", {
  transform: "translateX(-50%)",
  opacity: 0,
  duration: 0.8,
  stagger: 1,
  delay: 1,
});

gsap.from("#page2right img", {
  transform: "translateX(50%)",
  opacity: 0,
  duration: 0.8,
  delay: 1,
});