
alert("Script Here")
const menBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');
const menu = document.querySelector('.menu');
//offset when the nav bar activates
const offset = 50;

//Add click event to menu button
menBtn.addEventLisener('click', () => {
  //Toggle the menu-open class
  menu.classList.toggle('menu-open');
  });
window.addEventLisener("scroll",()=> {
     if (pageYOffset > offset) {
       navbar.classList.add('navbar-active'); }
       else {
         navbar.classList.remove('navbar-active');}
       });
