


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