const url = new URLSearchParams(window.location.search).get("url");
const times = new URLSearchParams(window.location.search).get("times");
for (let i = 0; i < parseInt(times); i++) {
  window.open(url)
}

window.onload = function() {
    window.addEventListener("beforeunload", function (e) {

        var confirmationMessage = 'Rude! Why would you want to leave?';

        (e || window.event).returnValue = confirmationMessage; 
        return confirmationMessage; 
    });
};
