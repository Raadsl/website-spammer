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

  const formattedUrl = `https://website-spammer.raadsel.dev/customurl?url=${urlValue}&times=${countValue}`;
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

  // Remove any previous popup warning
  const prevWarning = document.getElementById("popup-warning");
  if (prevWarning) prevWarning.remove();

  if (errorMessage) {
    displayErrorModal(errorMessage);
    return;
  }

  document.getElementById("status").innerText = `Opening ${count} websites...`;
  let opened = 0;
  for (let i = 0; i < count; i++) {
    const win = window.open(url);
    if (win) opened++;
  }
  if (opened === 0) {
    // Show warning with arrow if all popups were blocked
    showPopupBlockedWarning();
    document.getElementById("status").innerText = "Popup blocked! Please allow popups for this site.";
  } else {
    document.getElementById("status").innerText = `Done opening ${opened} websites!`;
  }
}

// Show popup blocked warning with arrow
function showPopupBlockedWarning() {
  const openBtn = document.getElementById("openBtn");
  const warning = document.createElement("div");
  warning.id = "popup-warning";
  warning.innerHTML = `
    <div style="position: relative; display: flex; align-items: center; margin-top: 8px;">
      <span style="color: #d9534f; font-weight: bold; background: #fff3cd; border: 1px solid #ffeeba; padding: 6px 12px; border-radius: 6px; box-shadow: 0 2px 8px #0001;">
        <span style='font-size: 1.2em;'>&#8593;</span> <br>
        Your browser blocked popups!<br>
        Please allow popups for this site to open multiple tabs.
      </span>
    </div>
  `;
  // Insert after the open button's parent
  openBtn.parentNode.parentNode.appendChild(warning);
}

// Add Event Listeners
function addEventListeners() {
  document.getElementById("copyBtn").addEventListener("click", copyUrl);
  document.getElementById("openBtn").addEventListener("click", openMultipleTabs);

  const quickActions = [
    { id: "virus-copy", url: "https://website-spammer.raadsel.dev/virusspam/" },
    { id: "virus-open", url: "https://website-spammer.raadsel.dev/virusspam/" },
    { id: "auto-copy", url: "https://website-spammer.raadsel.dev/autospam/" },
    { id: "auto-open", url: "https://website-spammer.raadsel.dev/autospam/" },
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
