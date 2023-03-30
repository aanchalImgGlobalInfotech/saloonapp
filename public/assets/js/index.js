

if ("IntersectionObserver" in window) {
    let counterObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let counter = entry.target;
          let target = parseInt(counter.innerText);
          let step = target / 200;
          let current = 0;
          let timer = setInterval(function () {
            current += step;
            counter.innerText = Math.floor(current);
            if (parseInt(counter.innerText) >= target) {
              clearInterval(timer);
            }
          }, 10);
          counterObserver.unobserve(counter);
        }
      });
    });
  
    let counters = document.querySelectorAll(".counter");
    counters.forEach(function (counter) {
      counterObserver.observe(counter);
    });
  }