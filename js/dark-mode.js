function toggleMode() {
    var element = document.body;
    var navBar = document.getElementById("navBar");
    //var navElem = document.getElementById("navLink1");
    element.classList.toggle("dark-body");
    navBar.classList.toggle("dark-navigation");
    //navElem.classList.toggle("dark-nav-a");
  
  }