let menuOpen = document.querySelector(".hamburger");
let menuClose = document.querySelector(".ham-close");
let navBox = document.querySelector(".nav-links");


const handleClick = () => {
  menuOpen.addEventListener("click", () => {
    if ((menuOpen.style.display = "block")) {
      menuOpen.style.display = "none";
      menuClose.style.display = "block";
      navBox.style.display = "block";
     

    }
  });

  menuClose.addEventListener("click", () => {
    if ((menuClose.style.display = "block")) {
      menuOpen.style.display = "block";
      menuClose.style.display = "none";
      navBox.style.display = "none";
      document.body.style.background = "white";
    }
  });
};

handleClick();
