document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const forgotPasswordButton = document.getElementById("forgot-password");

  // Handle Login Form Submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Please fill out both email and password.");
      return;
    }

    // Mock login process (replace with Firebase authentication later)
    if (email === "test@mathchamp.com" && password === "password123") {
      alert("Login successful!");
      // Redirect to the dashboard or main page
      window.location.href = "dashboard.html"; // Replace with actual URL
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

  // Handle Forgot Password
  forgotPasswordButton.addEventListener("click", () => {
    const email = prompt("Please enter your email for password reset:");
    if (email) {
      // Mock password reset process (replace with Firebase password reset later)
      alert(`Password reset instructions have been sent to ${email}.`);
    }
  });
});
