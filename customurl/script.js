// Extract URL parameters and open tabs
function openTabsFromParams() {
  const urlParams = new URLSearchParams(window.location.search);
  const url = urlParams.get("url");
  const times = parseInt(urlParams.get("times"), 10);

  if (!url || isNaN(times) || times <= 0) {
    console.error("Invalid parameters: Please provide a valid 'url' and 'times'.");
    return;
  }
  // Remove any previous popup warning
  const prevWarning = document.getElementById && document.getElementById("popup-warning");
  if (prevWarning) prevWarning.remove();

  let opened = 0;
  for (let i = 0; i < times; i++) {
    const win = window.open(url);
    if (win) opened++;
  }
  if (opened === 0) {
    showPopupBlockedWarning();
  }
}

function showPopupBlockedWarning() {
  // Try to find a container to show the warning
  let container = document.body;
  // Create warning element
  const warning = document.createElement("div");
  warning.id = "popup-warning";
  warning.innerHTML = `
    <div style="position: fixed; top: 24px; right: 24px; z-index: 9999; display: flex; align-items: center;">
      <span style="color: #d9534f; font-weight: bold; background: #fff3cd; border: 1px solid #ffeeba; padding: 8px 16px; border-radius: 6px; box-shadow: 0 2px 8px #0001; text-align: left;">
        <span style='font-size: 1.5em;'>&#8595;</span> <br>
        Your browser blocked popups!<br>
        Please allow popups for this site to open multiple tabs.
      </span>
    </div>
  `;
  container.appendChild(warning);
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
