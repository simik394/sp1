function toggleMode() {
    var element = document.body;
    const navBar = document.getElementById("navBar");
    //var navElem = document.getElementById("navLink1");
    element.classList.toggle("dark-body");
    //navBar.classList.toggle("dark-navigation");
    //navElem.classList.toggle("dark-nav-a");
}

function div1ParaElems() {
  const div1 = document.getElementById("navBar");
  const div1Paras = div1.getElementsByTagName("a");
  const len = div1Paras.length;
  alert(`There are ${len} paragraph in #div1`);
  //for (e in div1Paras){
    //e.classList.toggle("dark-nav-a");
  //}
}