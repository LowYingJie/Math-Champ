document.addEventListener("DOMContentLoaded", () => {
  const classCards = document.querySelectorAll(".dashboard-card");
  const logoutButton = document.getElementById("logout-button");

  // Handle class selection
  classCards.forEach(card => {
    card.addEventListener("click", () => {
      const selectedClass = card.dataset.class;
      if (selectedClass === "2A") {
        window.location.href = "leaderboard.html?class=2A";
      } else {
        alert(`No data available for ${selectedClass}`);
      }
    });
  });

  // Handle Logout
  logoutButton.addEventListener("click", () => {
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect to login page
  });
});
