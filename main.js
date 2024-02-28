function change() {
  document.getElementById("copyright").innerHTML =
    "Thank you for watching my website.";
  document.getElementById("copyright").style.backgroundColor = "#37B5B6";

  setTimeout(() => {
    document.getElementById("copyright").innerHTML =
      "Reinhild's myCrime - copyright &copy; 2024 all rights reserved";
    document.getElementById("copyright").style.backgroundColor = "#cb2424";
  }, 5000);
}
