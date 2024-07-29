// The-Icons-Section
const leftArrows = document.querySelectorAll('.The-Icon-Section .icon-arrow');
const rightArrows = document.querySelectorAll('.The-Icon-Section .icon-arrow-right');
const TheIconsContainers = document.querySelectorAll('.The-Icons');

leftArrows.forEach((leftArrow, index) => {
  leftArrow.addEventListener('click', () => {
    const TheIconsContainer = TheIconsContainers[index];
    const IconsWidth = TheIconsContainer.children[0].offsetWidth;
    TheIconsContainer.scrollLeft -= IconsWidth;
    TheIconsContainer.scrollTo({
      left: TheIconsContainer.scrollLeft,
      behavior: 'smooth'
    });
  });
});

rightArrows.forEach((rightArrow, index) => {
  rightArrow.addEventListener('click', () => {
    const TheIconsContainer = TheIconsContainers[index];
    const IconsWidth = TheIconsContainer.children[0].offsetWidth;
    TheIconsContainer.scrollLeft += IconsWidth //iconWidth; 
    TheIconsContainer.scrollTo({
      left: TheIconsContainer.scrollLeft,
      behavior: 'smooth'
    });
  });
});


const bar = document.querySelector(".fa-bars");
const modal = document.querySelector(".modal");

bar.addEventListener("click", function(){
  modal.style.display = modal.style.display === "block" ? "none" : "block";
  });

const modalItems = document.querySelector(".sign-modal")
const logBtn = document.querySelector(".logIn");
const SignBtn = document.querySelector(".SignUp");
const closeBtn = document.querySelector(".times");
const body = document.body;

logBtn.addEventListener("click", function(){
  event.preventDefault();
  modalItems.style.display = 'block';
})
closeBtn.addEventListener("click", function(){
  modalItems.style.display = "none";
 
})






