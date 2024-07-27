SmoothScroll({
    // Scrolling Core
    animationTime: 400, // [ms]
    stepSize: 100, // [px]

    // Acceleration
    accelerationDelta: 50, // 50
    accelerationMax: 3, // 3

    // Keyboard Settings
    keyboardSupport: true, // option
    arrowScroll: 50, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Other
    touchpadSupport: false, // ignore touchpad by default
    fixedBackground: true,
    excluded: ""
  });

  const gridContent = document.querySelector(".content-grid");
  const gridTitle = gridContent.querySelector(".content-grid-title");
  const gridScroll = gridContent.querySelector(".content-grid__scroll");
  const items = gridContent.querySelectorAll(".grid__item");

  const initialValue = {
    scale: 2,
    translate: 5
  };

  const getScroll = e => {
    const yNormalized = Math.min(window.scrollY / innerHeight, 1);

    gridContent.style.setProperty("--gridOpacity", yNormalized);
    gridContent.style.setProperty(
      "--gridScale",
      initialValue.scale - yNormalized
    );
    gridContent.style.setProperty(
      "--gridTranslate",
      5 - initialValue.translate * yNormalized + "vh"
    );
    gridTitle.style.setProperty("--gridOpactiy", yNormalized);
  };
  window.addEventListener("scroll", e => getScroll(e));
  