document.querySelector("form").addEventListener("submit", function (e) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      e.preventDefault();
      const error = document.getElementById("password-error");
      error.textContent = "Passwords do not match!";
      document.getElementById("password").value = "";
      document.getElementById("confirm-password").value = "";
      document.getElementById("password").focus();
    }
  });
  
  function updateRatingValue(value) {
    document.getElementById("rating-value").textContent = value;
  }
  