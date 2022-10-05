const content1 = document.querySelector(".content1");
const path1 = document.querySelector(".path1");
const path1Length = path1.getTotalLength();

path1.style.strokeDasharray = path1Length;
path1.style.strokeDashoffset = path1Length;
// calcDashoffset(
//   window.innerHeight * 0.8,
//   content1,
//   path1Length
// );

const calcDashoffset = (scrollY, element, length) => {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
  const value = length - length * ratio;
  return value < 0 ? 0 : value > length ? length : value;
};

const scrollHandler = () => {
  const scrollY = window.scrollY + window.innerHeight * 0.8;
  path1.style.strokeDashoffset = calcDashoffset(scrollY, content1, path1Length);
};

window.addEventListener("scroll", scrollHandler);
