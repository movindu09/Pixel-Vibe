// Wait for the DOM content to be loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
  // Function to remove the splash screen after 4 seconds
  setTimeout(function () {
    // Get the element with the ID "splash-screen"
    const splashScreen = document.getElementById("splash-screen");
    // Set the display property of the splash screen to "none" to hide it
    splashScreen.style.display = "none";
  }, 4000); // Wait for 4000 milliseconds (4 seconds) before executing the code inside the setTimeout function
});
