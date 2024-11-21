// Utility to handle modals
function setupModal(modalId, message) {
  const modal = document.getElementById(modalId);
  const closeButton = modal.querySelector(".close");

  modal.querySelector("#content").textContent = message;
  modal.style.display = "block";

  closeButton.onclick = () => (modal.style.display = "none");

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

function displayErrorModal(message) {
  setupModal("Modal", message);
}

function displayPromptModal() {
  setupModal("Modal", "Welcome back!");
}

// Copy to Clipboard
async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const input = document.createElement("textarea");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

// Cookie Utilities
function setCookie(cookieName, cookieValue, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};expires=${date.toUTCString()};path=/`;
}

function getCookie(cookieName) {
  const name = `${cookieName}=`;
  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(name))
    ?.substring(name.length) || "";
}

function checkCookie() {
  const userCheck = getCookie("user_visit_check");
  if (!userCheck) {
    setCookie("user_visit_check", "Confirmed", 14);
  } else {
    console.log("Welcome back!");
  }
}

// Validate Inputs
function validateInputs(url, count) {
  if (!url && isNaN(count)) {
    return "You must enter a website URL and the count of websites you want to open.";
  }
  if (!url) {
    return "You must enter a website URL.";
  }
  if (isNaN(count)) {
    return "You must enter a valid number for the count of websites.";
  }
  return null;
}

// Copy URL with validation
function copyUrl() {
  const urlValue = document.getElementById("url").value;
  const countValue = parseInt(document.getElementById("count").value, 10);
  const errorMessage = validateInputs(urlValue, countValue);

  if (errorMessage) {
    displayErrorModal(errorMessage);
    return;
  }

  const formattedUrl = `https://raadsl.github.io/website-spammer/customurl?url=${urlValue}&times=${countValue}`;
  copyToClipboard(formattedUrl)
    .then(() => {
      document.getElementById("status").innerText = `Copied URL to open ${urlValue}, ${countValue} times!`;
    })
    .catch((error) => displayErrorModal(`An error occurred: ${error}`));
}

// Open multiple tabs with validation
function openMultipleTabs() {
  const url = document.getElementById("url").value;
  const count = parseInt(document.getElementById("count").value, 10);
  const errorMessage = validateInputs(url, count);

  if (errorMessage) {
    displayErrorModal(errorMessage);
    return;
  }

  document.getElementById("status").innerText = `Opening ${count} websites...`;
  for (let i = 0; i < count; i++) {
    window.open(url);
  }
  document.getElementById("status").innerText = `Done opening ${count} websites!`;
}

// Add Event Listeners
function addEventListeners() {
  document.getElementById("copyBtn").addEventListener("click", copyUrl);
  document.getElementById("openBtn").addEventListener("click", openMultipleTabs);

  const quickActions = [
    { id: "virus-copy", url: "https://raadsl.github.io/website-spammer/virusspam/" },
    { id: "virus-open", url: "https://raadsl.github.io/website-spammer/virusspam/" },
    { id: "auto-copy", url: "https://raadsl.github.io/website-spammer/autospam/" },
    { id: "auto-open", url: "https://raadsl.github.io/website-spammer/autospam/" },
  ];

  quickActions.forEach(({ id, url }) => {
    const isCopy = id.includes("copy");
    document.getElementById(id).addEventListener("click", () => {
      if (isCopy) {
        copyToClipboard(url).then(() => {
          document.getElementById(id).innerText = "URL Copied";
          setTimeout(() => (document.getElementById(id).innerText = "Copy URL"), 1100);
        });
      } else {
        window.open(url);
      }
    });
  });
}

// Initialize
checkCookie();
addEventListeners();
