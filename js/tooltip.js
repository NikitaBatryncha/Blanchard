//1

const tooltipOne= document.querySelector('.tooltip--1');
const projectsPopupOne = document.querySelector('.projects__popup--1');

tooltipOne.addEventListener('mouseover', () => {
  projectsPopupOne.classList.add('visible');
});

tooltipOne.addEventListener('mouseout', () => {
  projectsPopupOne.classList.remove('visible');
});

//2

const tooltipTwo= document.querySelector('.tooltip--2');
const projectsPopupTwo = document.querySelector('.projects__popup--2');

tooltipTwo.addEventListener('mouseover', () => {
  projectsPopupTwo.classList.add('visible');
});

tooltipTwo.addEventListener('mouseout', () => {
  projectsPopupTwo.classList.remove('visible');
});

//3

const tooltipThree= document.querySelector('.tooltip--3');
const projectsPopupThree = document.querySelector('.projects__popup--3');

tooltipThree.addEventListener('mouseover', () => {
  projectsPopupThree.classList.add('visible');
});

tooltipThree.addEventListener('mouseout', () => {
  projectsPopupThree.classList.remove('visible');
});
