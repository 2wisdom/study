const content = document.querySelector(".content");
const path = document.querySelector(".path");
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;
path.style.strokeDashoffset = pathLength;
// pathLength;
// calcDashoffset(
//   window.innerHeight * 0.8,
//   content,
//   pathLength
// );

const calcDashoffset = (scrollY, element, length) => {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const value = length - length * ratio;
  return value < 0 ? 0 : value > length ? length : value;
};

const scrollHandler = () => {
  const scrollY = window.scrollY + window.innerHeight * 0.8;
  path.style.strokeDashoffset = calcDashoffset(scrollY, content, pathLength);
};
// scrollHandler();
window.addEventListener("scroll", scrollHandler);
