for (let i = 0; i < 10; i++) {
  window.open('https://raadsl.github.io/website-spammer/virusspam/')

}

window.onload = function() {
    window.addEventListener("beforeunload", function (e) {

        var confirmationMessage = 'Stay here :)';

        (e || window.event).returnValue = confirmationMessage;
        return confirmationMessage;
    });
};
