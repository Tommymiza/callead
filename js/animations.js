function slide(str, thr) {
  let elements = document.querySelectorAll(str);
  anime({
    targets: elements,
    translateY: 50,
    opacity: 0,
    easing: "linear",
    duration: 0,
  });
  elements.forEach((el) => {
    const obs = new IntersectionObserver(
      (entry) => {
        const current = entry[0];
        if (current.isIntersecting) {
          anime({
            targets: current.target,
            translateY: 0,
            opacity: 1,
            easing: "linear",
            duration: 500,
          });
        } else {
          if (current.boundingClientRect.y < 0) {
            anime({
              targets: current.target,
              translateY: -50,
              opacity: 0,
              easing: "linear",
              duration: 500,
            });
          } else {
            anime({
              targets: current.target,
              translateY: 50,
              opacity: 0,
              easing: "linear",
              duration: 500,
            });
          }
        }
      },
      {
        threshold: thr,
      }
    );
    obs.observe(el);
  });
}
function slideLeft(str) {
  let elements = document.querySelectorAll(str);
  anime({
    targets: elements,
    translateX: -50,
    opacity: 0,
    easing: "linear",
    duration: 0,
  });
  elements.forEach((el) => {
    const obs = new IntersectionObserver(
      (entry) => {
        const current = entry[0];
        if (current.isIntersecting) {
          anime({
            targets: current.target,
            translateX: 0,
            opacity: 1,
            easing: "linear",
            duration: 500,
          });
        } else {
          anime({
            targets: current.target,
            translateX: -50,
            opacity: 0,
            easing: "linear",
            duration: 500,
          });
        }
      },
      {
        threshold: 1,
      }
    );
    obs.observe(el);
  });
}
function slideRight(str) {
  let elements = document.querySelectorAll(str);
  anime({
    targets: elements,
    translateX: 50,
    opacity: 0,
    easing: "linear",
    duration: 0,
  });
  elements.forEach((el) => {
    const obs = new IntersectionObserver(
      (entry) => {
        const current = entry[0];
        if (current.isIntersecting) {
          anime({
            targets: current.target,
            translateX: 0,
            opacity: 1,
            easing: "linear",
            duration: 500,
          });
        } else {
          anime({
            targets: current.target,
            translateX: 50,
            opacity: 0,
            easing: "linear",
            duration: 500,
          });
        }
      },
      {
        threshold: 1,
      }
    );
    obs.observe(el);
  });
}
function opacity(str) {
  let elements = document.querySelectorAll(str);
  anime({
    targets: elements,
    opacity: 0,
    easing: "linear",
    duration: 0,
  });
  elements.forEach((el) => {
    const obs = new IntersectionObserver(
      (entry) => {
        const current = entry[0];
        if (current.isIntersecting) {
          anime({
            targets: current.target,
            opacity: 1,
            easing: "linear",
            duration: 500,
          });
        } else {
          anime({
            targets: current.target,
            opacity: 0,
            easing: "linear",
            duration: 500,
          });
        }
      },
      {
        threshold: 0.5,
      }
    );
    obs.observe(el);
  });
}
function width(str) {
  let elements = document.querySelectorAll(str);
  anime({
    targets: elements,
    width: 0,
    easing: "linear",
    duration: 0,
  });
  elements.forEach((el) => {
    const obs = new IntersectionObserver(
      (entry) => {
        const current = entry[0];
        if (current.isIntersecting) {
          anime({
            targets: current.target,
            width: "100px",
            easing: "linear",
            duration: 1000,
          });
        } else {
          anime({
            targets: current.target,
            width: 0,
            easing: "linear",
            duration: 1000,
          });
        }
      },
      {
        threshold: 1,
      }
    );
    obs.observe(el);
  });
}
