(function(){
  const menu_hamburger = document.getElementById("hamburger-menu");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  const ul = document.getElementById("navbar-list");

  menu_hamburger.addEventListener("click",(ev) => {
    ev.preventDefault();
    
    line1.classList.toggle("line1-rotate");
    line3.classList.toggle("line3-rotate");
    line2.classList.toggle("line2-opacity");
    menu_hamburger.classList.toggle("menu-opened");

    
  });

})();