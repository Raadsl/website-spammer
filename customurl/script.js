// Extract URL parameters and open tabs
function openTabsFromParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get("url");
  const times = parseInt(urlParams.get("times"), 10);

  if (!url || isNaN(times) || times <= 0) {
    console.error("Invalid parameters: Please provide a valid 'url' and 'times'.");
    return;
  }

  for (let i = 0; i < times; i++) {
    window.open(url);
  }
}

// Warn user before leaving the page
function setupBeforeUnloadWarning(message = "Rude! Why would you want to leave?") {
  window.addEventListener("beforeunload", (e) => {
    e.returnValue = message; // For older browsers
    return message; // Standard behavior
  });
}

// Initialize functionality on page load
window.onload = () => {
  openTabsFromParams();
  setupBeforeUnloadWarning();
};
