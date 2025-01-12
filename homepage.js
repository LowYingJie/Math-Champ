document.addEventListener("DOMContentLoaded", () => {
  const classCards = document.querySelectorAll(".class-card");
  const logoutButton = document.getElementById("logout-button");

  // Handle class selection
  classCards.forEach(card => {
    card.addEventListener("click", () => {
      const selectedClass = card.dataset.class;
      alert(`You selected ${selectedClass}`);
      // Redirect or perform action based on selected class
      // Example: window.location.href = `${selectedClass}.html`;
    });
  });

  // Handle Logout
  logoutButton.addEventListener("click", () => {
    // Mock logout process (clear session storage or cookies if implemented)
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect to login page
  });
});
