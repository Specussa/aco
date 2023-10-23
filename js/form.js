// start validate change pass
const changepassword = document.getElementById('changepassword');
const changepasswordone = document.getElementById('changepassword__one');
const changepasswordtwo = document.getElementById('changepassword__two');
const changepasswordthree = document.getElementById('changepassword__three');

if(changepassword) {
  changepassword.addEventListener('submit', e => {
    e.preventDefault();
    checkpassInputs();
  });
  function checkpassInputs() {
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
      changepasswordfb.classList.add("hidden");
      changepasswordforms.classList.add("hidden");
      changepasswordsuccess.classList.remove("hidden");
      changepassbclose.classList.remove("button__white");
      changepassbclose.innerText = 'Продолжить';
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

// start timer
const buttoncr = document.querySelector(".button__code_reload");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const buttonct = document.querySelector(".button__code_times");
const buttoncm = document.querySelector(".button__code_message");

let temp = 0;
const timer = (remainingMinutes, d, h, m, s) => {
  buttonct.classList.remove("hidden");
  buttoncm.classList.remove("active");
  var finishTime = new Date();
  finishTime.setSeconds(finishTime.getSeconds() + remainingMinutes);
  var timesOver;

  function update() {
    var diff = finishTime - new Date();
    var millis = diff % 1000;
    diff = Math.floor(diff / 1000);
    var sec = diff % 60;
    if (sec < 10) sec = "0" + sec;
    diff = Math.floor(diff / 60);
    var min = diff % 60;
    if (min < 10) min = "0" + min;
    diff = Math.floor(diff / 60);
    var hours = diff % 24;
    if (hours < 10) hours = "0" + hours;
    var days = Math.floor(diff / 24);

    d = +days;
    h = +hours;
    m = +min;
    s = +sec;

    minutesSpan.innerHTML = ("0" + m).slice(-2);
    secondsSpan.innerHTML = ("0" + s).slice(-2);

    timesOver = d * 86400 + h * 3600 + m * 60 + s;

    if (timesOver <= 0) {
      buttonct.classList.add("hidden");
      buttoncm.classList.add("active");
      return
    }
    clearTimeout(temp);
    temp = setTimeout(update, millis);
  }
  setTimeout(update, 0);
};

buttoncr.addEventListener('click', function() {
  timer(10);
})
// end timer

// start validate change phone
const changephoneform = document.getElementById('changephone');
const changephonephone = document.getElementById('changephone__phone');
const changephonepassword = document.getElementById('changephone__password');

if(changephoneform) {
  changephoneform.addEventListener('submit', e => {
    e.preventDefault();
    checkphoneInputs();
  });
  function checkphoneInputs() {
    const changephonephoneValue = changephonephone.value.trim();
    const changephonepasswordValue = changephonepassword.value.trim();
    
    if(changephonephoneValue !== '' && changephonephoneValue.length > 5 && changephonephoneValue.length <= 30) {setphoneSuccessFor(changephonephone);} else {setphoneErrorFor(changephonephone);}
    if(changephonepasswordValue !== '' && changephonepasswordValue.length > 5 && changephonepasswordValue.length <= 30) {setphoneSuccessFor(changephonepassword);} else {setphoneErrorFor(changephonepassword);}

    if(changephonephoneValue !== '' && changephonephoneValue.length > 5 && changephonephoneValue.length <= 30 && changephonepasswordValue !== '' && changephonepasswordValue.length > 5 && changephonepasswordValue.length <= 30){
      window.setTimeout(function () {
        fetch('/ajax/sendMail.php', {
          method: 'POST',
          body: JSON.stringify({
            body: changephonephoneValue,
            password: changephonepasswordValue
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
      }, 1000);
      timer(120);
      document.querySelector('.changephonenum').innerText = changephonephone.value;
      changephoneform.classList.add("hidden");
      document.querySelector('.changephonecode__success').classList.remove("hidden");
      changephonephone.value = '';
      changephonepassword.value = '';
      changephonephone.parentElement.classList.remove("success");
      changephonepassword.parentElement.classList.remove("success");
    }
  }
  
  function setphoneErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__group error';
  }
  
  function setphoneSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__group success';
  }
}
// end validate change phone

// start validate change phone
const changephonecodeform = document.getElementById('changephonecode');
const changephonecodeone = document.getElementById('changephonecode__one');
const changephonecodetwo = document.getElementById('changephonecode__two');
const changephonecodethree = document.getElementById('changephonecode__three');
const changephonecodefour = document.getElementById('changephonecode__four');

if(changephonecodeform) {
  changephonecodeform.addEventListener('submit', e => {
    e.preventDefault();
    checkphonecodeInputs();
  });
  
  const fields = document.querySelectorAll(".form__field");
  // const sum = +poleOne.value + +poleTwoo.value;

  changephonecodeone.onclick = function(e) {changephonecodeone.value = '';}
  changephonecodetwo.onclick = function(e) {changephonecodetwo.value = '';}
  changephonecodethree.onclick = function(e) {changephonecodethree.value = '';}
  changephonecodefour.onclick = function(e) {changephonecodefour.value = '';}

  function handleInputField({ target }) {
    const value = target.value.slice(0, 1);
    target.value = value;
  
    const step = value ? 1 : -1;
    const fieldIndex = [...fields].findIndex((field) => field === target);
    const focusToIndex = fieldIndex + step;
  
    if (focusToIndex < 0 || focusToIndex >= fields.length) return;
    fields[focusToIndex].focus();
    fields[focusToIndex].value = '';
  }
  fields.forEach((field) => {
    field.addEventListener("input", handleInputField);
  });

  function checkphonecodeInputs() {
    const changephonecodeoneValue = changephonecodeone.value.trim();
    const changephonecodetwoValue = changephonecodetwo.value.trim();
    const changephonecodethreeValue = changephonecodethree.value.trim();
    const changephonecodefourValue = changephonecodefour.value.trim();
    const changephonecodeAllValue = changephonecodeone.value + changephonecodetwo.value + changephonecodethree.value + changephonecodefour.value;

    if(changephonecodeoneValue.length === 1) {setphoneSuccessFor(changephonecodeone);} else {setphoneErrorFor(changephonecodeone);}
    if(changephonecodetwoValue.length === 1) {setphoneSuccessFor(changephonecodetwo);} else {setphoneErrorFor(changephonecodetwo);}
    if(changephonecodethreeValue.length === 1) {setphoneSuccessFor(changephonecodethree);} else {setphoneErrorFor(changephonecodethree);}
    if(changephonecodefourValue.length === 1) {setphoneSuccessFor(changephonecodefour);} else {setphoneErrorFor(changephonecodefour);}
    if(changephonecodeAllValue === '0000') {setphoneSuccessFor(changephonecodefour);} else {setphoneErrorFor(changephonecodefour);}

    if(changephonecodeoneValue.length === 1 && changephonecodetwoValue.length === 1 && changephonecodethreeValue.length === 1 && changephonecodefourValue.length && changephonecodeAllValue === '0000'){
      window.setTimeout(function () {
        fetch('/ajax/sendMail.php', {
          method: 'POST',
          body: JSON.stringify({
            body: changephonecodeAllValue
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
      }, 1000);
      document.querySelector('.changephonenum__success').classList.remove("hidden");
      document.querySelector('.changephonecode__success').classList.add("hidden");
      changephonecodeone.value = '';
      changephonecodetwo.value = '';
      changephonecodethree.value = '';
      changephonecodefour.value = '';
    }
  }
  
  function setphoneErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__group form__fieldset error';
  }
  
  function setphoneSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form__group form__fieldset success';
  }
}
// end validate change phone