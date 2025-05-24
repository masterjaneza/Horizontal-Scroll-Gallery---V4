document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".block");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.2, // Adjust as needed
    }
  );
  blocks.forEach((block) => observer.observe(block));

  // Enable horizontal scrolling with mouse wheel
  const scroller = document.querySelector(".view");
  if (scroller) {
    scroller.addEventListener(
      "wheel",
      function (e) {
        if (e.deltaY !== 0) {
          e.preventDefault();
          scroller.scrollLeft += e.deltaY;
        }
      },
      { passive: false }
    );
  }
});
