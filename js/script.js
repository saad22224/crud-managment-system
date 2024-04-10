function toggleMode() {
    const body = document.body;
    const modeToggle = document.getElementById("mode-toggle");
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");
  
    body.classList.toggle("dark-mode");
    // body.classList.toggle("black")
    if (body.classList.contains("dark-mode")) {
      sunIcon.style.display = "none";
      moonIcon.style.display = "inline";
      moonIcon.style.color = "white";
    } else {
      sunIcon.style.display = "inline";
      sunIcon.style.color = " #FFA500";
      moonIcon.style.display = "none";
    }
  
    // Save user preference to local storage
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("isDarkMode", isDarkMode);
  }
  
  // Check for user preference and apply it
  const isDarkMode = localStorage.getItem("isDarkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    document.getElementById("sun-icon").style.display = "none";
    document.getElementById("moon-icon").style.display = "inline";
    document.getElementById("moon-icon").style.color = "white";
  } else {
    document.getElementById("sun-icon").style.display = "inline";
    document.getElementById("sun-icon").style.color = "#FFA500";
    document.getElementById("moon-icon").style.display = "none";
  }




document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if username and password are correct
    if (username === 'saad' && password === '11922172Asd.mass360') {
        // Redirect to your system
        window.location.href = './login.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
