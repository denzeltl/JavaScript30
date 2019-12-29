# Day 25 - Event Capture, Propagation, Bubbling and Once

**Completed on:** _12/25/2019_

---

## Things Learned:

-   Adding an object with property and value of `capture: true` after the function in an event listener will fire up the events to the elements from top to bottom instead of bottom to top
-   Furthermore, adding `once: true` allows you to only fire the event listener ONCE
-   `e.stopPropagation()` will stop the function from bubbling to other nested elements
