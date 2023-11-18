import { renderHeaderTitle } from '../../utils/render';

const EXPECTED_RECT_COUNT = 101;
const DEFAULT_SHAPE_SIDE = 20;
const DEFAULT_COLOR = 'blue'; // 'rgba(255,0,0,0.5)';
const SIZE_INCREMENT = 10;

/**
 * WARNING : THE STROBOSCOPIC EFFECT OF THIS DEMO COULD LEAD TO EPILEPSY !!!
 * PLEASE DON'T EXECUTE THIS DEMO IF YOUR ARE SUBJECT TO EPILEPSY !
 */

const HomePage = () => {
  const main = document.querySelector('main');
  const mainWidth = main.clientWidth;
  const mainHeight = main.clientHeight;
  let canvas;
  let canvasContext;
  let animationReference;
  let animated = true;
  let size = DEFAULT_SHAPE_SIDE;
  let color = DEFAULT_COLOR;

  renderHeaderTitle('Canvas Animation');
  renderCanvasWrapper();
  setCanvasContextAndSize();
  removePotentialVerticalAndHorizontalScrollbars();
  animationReference = requestAnimationFrame(drawOneFrame);

  document.addEventListener('keydown', onKeyClick);

  canvas.addEventListener('click', onCanvasClick);

  main.addEventListener('contextmenu', onCanvasClickRight);

  function renderCanvasWrapper() {
    main.innerHTML = '<canvas />';
    canvas = document.querySelector('canvas');
  }

  function setCanvasContextAndSize() {
    canvasContext = canvas.getContext('2d');
    canvas.width = mainWidth;
    canvas.height = mainHeight;
  }

  /**
   * This function remove the vertical scrollbar that spuriously appears
   * even though the canvas is not meant to extend beyond the height
   * of the browser windows.
   */
  function removePotentialVerticalAndHorizontalScrollbars() {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
  }

  function drawOneFrame() {
    clearFrame();

    drawRectanglesAtRandomLocations();
    // drawAlwaysFullRectanglesAtRandomLocations();

    animationReference = requestAnimationFrame(drawOneFrame);

    // requestAnimationFrame(() => setTimeout(drawOneFrame, 1000));
  }

  function clearFrame() {
    canvasContext.clearRect(0, 0, mainWidth, mainHeight);
  }

  function drawRectanglesAtRandomLocations() {
    canvasContext.fillStyle = color;

    for (let i = 0; i < EXPECTED_RECT_COUNT; i += 1) {
      canvasContext.fillRect(
        Math.random() * mainWidth,
        Math.random() * mainHeight,
        size,
        size,
      );
    }
  }

  /* function drawAlwaysFullRectanglesAtRandomLocations() {
    canvasContext.fillStyle = DEFAULT_COLOR;

    for (let i = 0; i < EXPECTED_RECT_COUNT; i += 1) {
      const randomX = Math.random() * mainWidth;
      let expectedX = randomX;
      if (randomX < DEFAULT_SHAPE_SIDE) expectedX = 0;
      else if (randomX > mainWidth - DEFAULT_SHAPE_SIDE) expectedX = mainWidth - DEFAULT_SHAPE_SIDE;

      const randomY = Math.random() * mainHeight;
      let expectedY = randomY;
      if (randomY < DEFAULT_SHAPE_SIDE) expectedY = 0;
      else if (randomY > mainHeight - DEFAULT_SHAPE_SIDE) {
        expectedY = mainHeight - DEFAULT_SHAPE_SIDE;
      }

      canvasContext.fillRect(expectedX, expectedY, DEFAULT_SHAPE_SIDE, DEFAULT_SHAPE_SIDE);
    }
  } */
  function onCanvasClick() {
    animated = !animated; // bascule l'état en true/false
    if (animated === false) {
      cancelAnimationFrame(animationReference);
    } else {
      animationReference = requestAnimationFrame(drawOneFrame);
    }
  }

  function onKeyClick(e) {
    switch (e.code) {
      case 'NumpadAdd':
        e.preventDefault();
        size += SIZE_INCREMENT;
        break;
      case 'NumpadSubtract':
        e.preventDefault();
        size = size > SIZE_INCREMENT ? size - SIZE_INCREMENT : 1;
        break;
      default:
        break;
    }
  }

  function onCanvasClickRight(e) {
    e.preventDefault();
    color = getRandomRgbaColorAsString(); // [0,255]
  }

  function getRandomRgbaColorAsString() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgba(${red},${green},${blue},1)`;
  }
};

export default HomePage;
