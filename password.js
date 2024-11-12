  function togglePassword(inputId) {
    const passwordInput = document.getElementById(inputId);
    const icon = passwordInput.nextElementSibling;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.innerHTML = "&#128064;"; // Eye closed
    } else {
      passwordInput.type = "password";
      icon.innerHTML = "&#128065;"; // Eye open
    }
  }