function updateUTCTime() {
  const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
  const now = new Date();

  const options = {
    timeZone: "UTC",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  timeElement.textContent = `UTC: ${now.toLocaleTimeString("en-US", options)}`;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);
