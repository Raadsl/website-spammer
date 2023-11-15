function displayErrorModal(message) {
  const modal = document.getElementById("Modal");
  const closeButton = document.getElementsByClassName("close")[0];

  document.getElementById("content").textContent = message;

  modal.style.display = "block";

  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  } else {
    let input = document.createElement('textarea');
    input.value = text;
    document.body.appendChild(input);
    input.focus();
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    return Promise.resolve();
  }
}

function displayPromptModal() {
  const modal = document.getElementById("Modal");
  const closeButton = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

function setCookie(cookieName, cookieValue, expirationDays) {
  const date = new Date();
  date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
  const name = cookieName + "=";
  const cookieArray = document.cookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
}

function checkCookie() {
const userCheck = getCookie("user_visit_check");
if (userCheck !== "") {
  console.log("Welcome back!");
} else {
  displayPromptModal();
  setCookie("user_visit_check", "Confirmed", 14);
}
}

checkCookie();

function copyUrl() {
  const urlValue = document.getElementById("url").value;
  const countValue = document.getElementById("count").value;
  const errorMessage = document.getElementById("status");
  const count = parseInt(countValue);

  if (countValue !== count.toString()) {
    displayErrorModal("Error, please enter a valid number for the count of websites you want to open.");
  } else {
    navigator.clipboard.writeText(`https://raadsl.github.io/website-spammer/customurl?url=${urlValue}&times=${count}`)
      .catch(function(error) {
        displayErrorModal("An error has occurred: " + error);
        throw new Error(error);
      })
      .then(function() {
        errorMessage.innerText = `Copied URL to open ${urlValue}, ${countValue} times once it loads!`;
      });
  }

  errorMessage.innerText = "Copied URL to clipboard!";

  if (urlValue === '' && countValue === '') {
    errorMessage.innerText = "You must enter a website URL and the count of websites you want to open.";
    displayErrorModal('You must enter a website URL and the count of websites you want to open.');
  } else {
    if (urlValue === '') {
      errorMessage.innerText = "You must enter a website URL.";
      displayErrorModal("You must enter a website URL.");
    } else if (countValue === '') {
      errorMessage.innerText = "You must enter the count of websites you want to open.";
      displayErrorModal("You must enter the count of websites you want to open.");
    }
  }
}

function openMultipleTabs() {
const url = document.getElementById("url").value;
let count = parseInt(document.getElementById("count").value);
const statusMessage = document.getElementById("status");

if (isNaN(count)) {
  displayErrorModal("Error, please enter a valid number for the count of websites you want to open.");
} else {
  statusMessage.innerText = `Opening: "${count}" Websites!`;
  for (let i = 0; i < count; i++) {
    window.open(url);
  }

  statusMessage.innerText = `Done opening ${count} websites! If only one tab opened for you, you may need to give permission for this website to open more!`;

  if (url === '' && isNaN(count)) {
    statusMessage.innerText = "You must enter a website URL and the count of websites you want to open.";
    displayErrorModal('You must enter a website URL and the count of websites you want to open.');
  } else {
    if (url === '') {
      statusMessage.innerText = "You must enter a website URL.";
      displayErrorModal("You must enter a website URL.");
    } else if (isNaN(count)) {
      statusMessage.innerText = "You must enter the count of websites you want to open.";
      displayErrorModal("You must enter the count of websites you want to open.");
    }
  }
}
}

document.getElementById("copyBtn").addEventListener('click', copyUrl);
document.getElementById("openBtn").addEventListener('click', openMultipleTabs);

//virus and auto spammer

document.getElementById("virus-copy").addEventListener("click", function() {
  copyToClipboard("https://raadsl.github.io/website-spammer/virusspam/")
  document.getElementById("virus-copy").innerText = `URL copied`
  setTimeout(function() {document.getElementById("virus-copy").innerText = `Copy URL`}, 1100);
});
document.getElementById("virus-open").addEventListener("click", function() {
  window.open("https://raadsl.github.io/website-spammer/virusspam/");
});
document.getElementById("auto-copy").addEventListener("click", function() {
  copyToClipboard("https://raadsl.github.io/website-spammer/autospam/")
  document.getElementById("auto-copy").innerText = `URL copied`
  setTimeout(function() {document.getElementById("auto-copy").innerText = `Copy URL`}, 1100);
});
document.getElementById("auto-open").addEventListener("click", function() {
  window.open("https://raadsl.github.io/website-spammer/autospam/");
});
