document.addEventListener("DOMContentLoaded", () => {
  const leaderboardData = [
    {
      rank: 1,
      name: "Ahmad Faris",
      id: "0473A574210289",
      correctRate: "100%",
      date: "2025-01-13"
    },
    {
      rank: 2,
      name: "Jason Tan",
      id: "04839D40210289",
      correctRate: "0%",
      date: "2025-01-13"
    }
  ];

  const tableBody = document.getElementById("leaderboard-data");

  // Populate table with data
  leaderboardData.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${student.rank}</td>
      <td>${student.name}</td>
      <td>${student.id}</td>
      <td>${student.correctRate}</td>
      <td>${student.date}</td>
    `;
    tableBody.appendChild(row);
  });

  // Back button functionality
  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
});
