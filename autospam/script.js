function openMultipleTabs(url, times) {
  if (!url || isNaN(times) || times <= 0) {
    console.error("Invalid input: Provide a valid URL and a positive number of times.");
    return;
  }

  for (let i = 0; i < times; i++) {
    window.open(url);
  }
}

function setupBeforeUnloadWarning(message = "Don't give up on me!") {
  window.addEventListener("beforeunload", (e) => {
    e.returnValue = message; // For compatibility with older browsers
    return message; // Modern browsers use this
  });
}

window.onload = () => {
  const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const tabCount = 15;

  // Open 15 YouTube tabs
  openMultipleTabs(videoUrl, tabCount);

  // Setup warning for leaving the page
  setupBeforeUnloadWarning();
};
