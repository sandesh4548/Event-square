//navbar
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});



// Get the name from the URL parameters
var urlParams = new URLSearchParams(window.location.search);
var name = urlParams.get("name");

// Check if the name is null or an empty string
if (name == null || name === "") {
    console.error("Name parameter missing or invalid");
    name = "Unknown";
}

// Display the greeting with the user's name
var greeting = document.getElementById("greeting");
greeting.textContent = "" + name + "!";


// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Function to generate a random circle avatar with a random color
  function generateAvatar() {
    const size = 100; // Size of the avatar
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    const color = getRandomColor();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2, 0, 2 * Math.PI);
    ctx.fill();
    const avatarUrl = canvas.toDataURL();
    return avatarUrl;
  }
  
  // Example usage in a web page
  const avatarImg = document.getElementById("avatar");
  const avatarUrl = generateAvatar();
  avatarImg.src = avatarUrl;
  