// start validate change pass
const changepassword = document.getElementById('changepassword');
const changepasswordone = document.getElementById('changepassword__one');
const changepasswordtwo = document.getElementById('changepassword__two');
const changepasswordthree = document.getElementById('changepassword__three');

if(!changepassword){} else {
  changepassword.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
  });
  function checkInputs() {
    const changepasswordoneValue = changepasswordone.value.trim();
    const changepasswordtwoValue = changepasswordtwo.value.trim();
    const changepasswordthreeValue = changepasswordthree.value.trim();
    
    if(changepasswordoneValue !== '' && changepasswordoneValue.length > 5 && changepasswordoneValue.length <= 30) {setSuccessFor(changepasswordone);} else {setErrorFor(changepasswordone);}
    if(changepasswordtwoValue !== '' && changepasswordtwoValue.length > 5 && changepasswordtwoValue.length <= 30) {setSuccessFor(changepasswordtwo);} else {setErrorFor(changepasswordtwo);}
    if (changepasswordtwoValue !== changepasswordthreeValue) {setErrorFor(changepasswordthree);} else if (changepasswordthreeValue !== '' && changepasswordthreeValue.length > 5 && changepasswordthreeValue.length <= 30) {setSuccessFor(changepasswordthree);} else {setErrorFor(changepasswordthree);}

    if(changepasswordoneValue !== '' && changepasswordoneValue.length > 5 && changepasswordoneValue.length <= 30 && changepasswordtwoValue !== '' && changepasswordtwoValue.length > 5 && changepasswordtwoValue.length <= 30 && changepasswordtwoValue === changepasswordthreeValue){
      window.setTimeout(function () {
        fetch('/ajax/sendMail.php', {
          method: 'POST',
          body: JSON.stringify({
            body: changepasswordoneValue,
            password: changepasswordtwoValue,
            password2: changepasswordthreeValue
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
      }, 1000);
      changepasswordsuccess.classList.remove("hidden");
      changepasswordforms.classList.add("hidden");
      changepasswordfb.classList.add("hidden");
      changepassclose.classList.remove("button__white");
      changepassclose.innerText = 'Продолжить';
      changepasswordone.value = '';
      changepasswordtwo.value = '';
      changepasswordthree.value = '';
      changepasswordone.parentElement.classList.remove("success");
      changepasswordtwo.parentElement.classList.remove("success");
      changepasswordthree.parentElement.classList.remove("success");
    }
  }
  
  function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__group error';
  }
  
  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__group success';
  }
}
// end validate change pass