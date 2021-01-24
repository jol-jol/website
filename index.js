const navbarClick = () => {
  var x = document.getElementById("course");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};
