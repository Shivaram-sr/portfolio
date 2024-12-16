// Dark Mode Toggle
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Project Filtering
function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach(project => {
    if (category === "all" || project.dataset.category === category) {
      project.classList.remove("hidden");
    } else {
      project.classList.add("hidden");
    }
  });
}

// Contact Form Submission (with EmailJS)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  // Replace these with your actual EmailJS credentials
  const serviceID = "YOUR_SERVICE_ID";
  const templateID = "YOUR_TEMPLATE_ID";
  const userID = "YOUR_USER_ID";

  emailjs.sendForm(serviceID, templateID, this, userID)
    .then(() => alert("Message Sent!"))
    .catch(error => console.error("Error:", error));
});
