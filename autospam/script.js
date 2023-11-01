for (let i = 0; i < 15; i++) {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

window.onload = function() {
    window.addEventListener("beforeunload", function (e) {

        var confirmationMessage = 'Dont give up on me!';

        (e || window.event).returnValue = confirmationMessage; 
        return confirmationMessage; 
    });
};
