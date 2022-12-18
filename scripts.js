/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function dropDownMenu() {
    var x = document.getElementById("nav");
    if (x.className === "navigation") {
      x.className += " responsive";
    } else {
      x.className = "navigation";
    }
  }