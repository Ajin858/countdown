// Target date (January 1, 2025 00:00:00)
const targetDate = new Date("2025-01-01T00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const remainingTime = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the countdown
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Apply color-change class to countdown element
  countdownElement.classList.add("color-change");
  
  // If the countdown is over, stop updating and remove color-change class
  if (remainingTime <= 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "Happy New Year 2025!";
    countdownElement.classList.remove("color-change");
  }
}, 1000);
