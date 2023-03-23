function copy() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var inputValue2 = document.getElementById("myInput2").value;
  const t1 = document.getElementById("errormsg");
  const count = parseInt(inputValue2) 
  if (inputValue2 != count.toString()) {
    alert(`ERROR. Please give a NUMBER of websites you want to open. You didnt enter a valid number:(`)
  }
  else {
  //navigator.clipboard.writeText(`https://website-spammer.raadsel.repl.co/customurl.html?url=${inputValue}&times=${count}`);
  navigator.clipboard.writeText(`https://website-spammer.raadsel.repl.co/customurl.html?url=${inputValue}&times=${count}`).catch(function(error) {
    alert("An error has occurred: "+error);
    document.getElementById("copied").innerHTML = error
    throw new Error(error);
}).then(function(x) {
      alert(`Copied URL to open "${inputValue}", "${inputValue2}" times once it loads!`)
      document.getElementById("copied").innerHTML = `Copied URL to open ${inputValue}, ${inputValue2} times!`;
    });
  //document.getElementById("copied").innerHTML = `Copied URL to open ${inputValue}, ${inputValue2} times!`;
  //alert(`Copied URL to open "${inputValue}", "${inputValue2}" times once it loads!`)
  }
  t1.innerText = `Copied URL to clipboard!`;
  if(inputValue === '' && inputValue2 === '') {
    const title = document.getElementById("errormsg");
    title.innerText = `You must enter a website URL`;
    alert('You must enter the count of the websites you want to open')
  }
  else {
    if (inputValue === '') {

      const title = document.getElementById("errormsg");
      title.innerText = `You must enter a website URL`;
      alert("You must enter a website URL");
      
  } else {
      if(inputValue2 === '') {

        const title = document.getElementById("errormsg");
        title.innerText = `You must enter the count of the websites you want to open`;
        alert("You must enter the count of the websites you want to open")
        
    }
    
  }
  }


  
}


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var inputValue2 = document.getElementById("myInput2").value;
  const t1 = document.getElementById("errormsg");
  const count = parseInt(inputValue2) 
  if (inputValue2 != count.toString()) {
    alert(`ERROR. Please give a NUMBER of websites you want to open. You didnt enter a valid number:(`)
  }
  else {
  t1.innerText = `Opening: "${count}" Websites!`;
  for (let i = 0; i < count; i++) {
    window.open(inputValue)
  }
  t1.innerText = `Done opening ${count} websites! If only 1 tab opened for you, you may need to give permission for this website to open more! If I didnt open any websites, please check you entered a number at the second input bar!`;
  if(inputValue === '' && inputValue2 === '') {
    const title = document.getElementById("errormsg");
    title.innerText = `You must enter a website URL`;
    alert('You must enter the count of the websites you want to open')
  }
  else {
    if (inputValue === '') {

      const title = document.getElementById("errormsg");
      title.innerText = `You must enter a website URL`;
      alert("You must enter a website URL");
      
  } else {
      if(inputValue2 === '') {

        const title = document.getElementById("errormsg");
        title.innerText = `You must enter the count of the websites you want to open`;
        alert("You must enter the count of the websites you want to open")
        
    }
    
  }
  }



  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  }
}


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//request scirpt


function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
console.log(httpGet("/LICENSE"))
console.log("Made by Jorik aka Raadsel")