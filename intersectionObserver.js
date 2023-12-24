// First we select the element we want to target
const targets = document.querySelectorAll('.animated-text');

// Next we want to create a function that will be called when that element is intersected
function handleIntersection(entries) {

  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    } else {
      entry.target.classList.remove('visible')
    }
  });
}

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
const observer = new IntersectionObserver(handleIntersection);

// Finally start observing the target element
targets.forEach((target)=>observer.observe(target))
