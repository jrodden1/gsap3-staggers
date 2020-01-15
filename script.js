//add code to experiment with stagger object
//gsap.to("#freds img", {y:-50});

// added stagger
// gsap.to("#freds img", {y:-50, stagger: 0.1});  BASIC STAGGER

// Advanced Stagger - stagger can take an object
gsap.to("#freds img", {y:-50, stagger: {
   each: 0.02, // each is essentially the same thing as line 5 - separate the staggering in by .2 secs.
   // amount: 1 //amount of time to pass that the stagger needs to move all the objects in by (in this case all 6 freds need to start being animated in before 1 second is up)
   from: "edges"  //default is left to right -- "end" will do from right to left, "center" will animate from the center, "edges" animates in from the edges (inverse of center)
}});