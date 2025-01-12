document.addEventListener("DOMContentLoaded", () => {
  const leaderboardData = [
    {
      rank: 1,
      name: "Ahmad Faris",
      id: "0473A574210289",
      correctRate: "90%",
      date: "2025-01-10"
    },
    {
      rank: 2,
      name: "Jason Tan",
      id: "04839D40210289",
      correctRate: "80%",
      date: "2025-01-10"
    }
  ];

  const tableBody = document.getElementById("leaderboard-data");

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

  const backButton = document.getElementById("back-button");
  backButton.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
});
