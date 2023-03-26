// // Get the button and event container elements
// const addEventBtn = document.getElementById("add-event-btn");
// const eventContainer = document.getElementById("event-container");

// // Get the modal and close button elements
// const modal = document.getElementById("add-event-modal");
// const closeBtn = document.getElementsByClassName("close")[0];

// // Add event listener to the button
// addEventBtn.addEventListener("click", () => {
//   // Show the modal
//   modal.style.display = "block";
// });

// // Add event listener to the close button
// closeBtn.addEventListener("click", () => {
//   // Hide the modal
//   modal.style.display = "none";
// });

// // Add event listener to the form submission
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // prevent default form submission behavior

//   // Get the input values
//   const about = document.getElementById("about-input").value;
//   const location = document.getElementById("location-input").value;
//   const fee = document.getElementById("fee-input").value;
//   const host = document.getElementById("host-input").value;

//   // Save the event information in local storage
//   const events = JSON.parse(localStorage.getItem("events")) || [];
//   events.push({ about, location, fee, host });
//   localStorage.setItem("events", JSON.stringify(events));

//   // Create a new event section
//   const eventSection = document.createElement("div");
//   eventSection.classList.add("event-section");

//   // Create the HTML for the event section
//   eventSection.innerHTML = `
//     <h3>${about}</h3>
//     <p><strong>Location:</strong> ${location}</p>
//     <p><strong>Fee:</strong> $${fee}</p>
//     <p><strong>Host:</strong> ${host}</p>
//   `;

//   // Append the event section to the event container
//   eventContainer.appendChild(eventSection);

//   // Hide the modal
//   modal.style.display = "none";

//   // Reset the form
//   form.reset();
// });

// // Load the events from local storage on page load
// window.addEventListener("load", () => {
//   const events = JSON.parse(localStorage.getItem("events")) || [];
//   events.forEach((event) => {
//     const { about, location, fee, host } = event;
//     const eventSection = document.createElement("div");
//     eventSection.classList.add("event-section");
//     eventSection.innerHTML = `
//       <h3>${about}</h3>
//       <p><strong>Location:</strong> ${location}</p>
//       <p><strong>Fee:</strong> $${fee}</p>
//       <p><strong>Host:</strong> ${host}</p>
//     `;
//     eventContainer.appendChild(eventSection);
//   });
// });

// Get the button and event container elements
const addEventBtn = document.getElementById("add-event-btn");
const eventContainer = document.getElementById("event-container");

// Get the modal and close button elements
const modal = document.getElementById("add-event-modal");
const closeBtn = document.getElementsByClassName("close")[0];

// Add event listener to the button
addEventBtn.addEventListener("click", () => {
  // Show the modal
  modal.style.display = "block";
});

// Add event listener to the close button
closeBtn.addEventListener("click", () => {
  // Hide the modal
  modal.style.display = "none";
});

// Add event listener to the form submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default form submission behavior

  // Get the input values
  const about = document.getElementById("about-input").value;
  const location = document.getElementById("location-input").value;
  const fee = document.getElementById("fee-input").value;
  const host = document.getElementById("host-input").value;

  // Save the event information in local storage
  const events = JSON.parse(localStorage.getItem("events")) || [];
  events.push({ about, location, fee, host });
  localStorage.setItem("events", JSON.stringify(events));

  // Create a new event section
  const eventSection = document.createElement("div");
  eventSection.classList.add("event-section");

  // Create the HTML for the event section
  eventSection.innerHTML = `
    <h3>${about}</h3>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Fee:</strong> $${fee}</p>
    <p><strong>Host:</strong> ${host}</p>
    <button class="cancel-btn">Cancel Event</button>
  `;

  // Append the event section to the event container
  eventContainer.appendChild(eventSection);

  // Hide the modal
  modal.style.display = "none";

  // Reset the form
  form.reset();
});

// Load the events from local storage on page load
window.addEventListener("load", () => {
  const events = JSON.parse(localStorage.getItem("events")) || [];
  events.forEach((event, index) => {
    const { about, location, fee, host } = event;
    const eventSection = document.createElement("div");
    eventSection.classList.add("event-section");
    eventSection.innerHTML = `
      <h3>${about}</h3>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Fee:</strong> $${fee}</p>
      <p><strong>Host:</strong> ${host}</p>
      <button class="cancel-btn" data-index="${index}">Cancel Event</button>
    
    `;
    eventContainer.appendChild(eventSection);
  });
});

// Add event listener to the cancel buttons
eventContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("cancel-btn")) {
    const index = e.target.getAttribute("data-index");
    const events = JSON.parse(localStorage.getItem("events")) || [];
    events.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(events));
    e.target.parentNode.remove();
  }
});



//avatar
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
  ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI);
  ctx.fill();
  const avatarUrl = canvas.toDataURL();
  return avatarUrl;
}

// Example usage in a web page
const avatarImg = document.getElementById("avatar");
const avatarUrl = generateAvatar();
avatarImg.src = avatarUrl;



