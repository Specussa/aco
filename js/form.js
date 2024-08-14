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
const buttonca = document.querySelector(".button__code_again");
const buttoncm = document.querySelector(".button__code_message");
const buttond = document.querySelector(".button__code_disabled");

if (buttoncr) {
  let temp = 0;
  const timer = (remainingMinutes, d, h, m, s) => {
    buttonca.classList.add("hidden");
    buttoncm.classList.add("disabled");
    buttond.classList.remove("hidden");
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
        buttonca.classList.remove("hidden");
        buttoncm.classList.remove("disabled");
        buttond.classList.add("hidden");
        return
      }
      clearTimeout(temp);
      temp = setTimeout(update, millis);
    }
    setTimeout(update, 0);
  };
  
  buttoncr.addEventListener('click', function() {
    timer(120);
  })
}
// end timer

// start validate change phone
const changephonephone = document.getElementById('changephone__phone');
const changephonepassword = document.getElementById('changephone__password');
const changephoneform = document.getElementById("changephone");
const changephoneecode = document.querySelector(".changephonecode__success");
const changephonecodeform = document.getElementById("changephonecode");

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
      timer(120);
      document.querySelector('.changephonenum').innerText = changephonephone.value.replace(/[( \-\(\))]/g,'');
      changephoneform.classList.add("hidden");
      changephoneecode.classList.remove("hidden");
      buttonca.classList.add("hidden");
      buttoncm.classList.add("disabled");
      buttond.classList.remove("hidden");
      changephonephone.value = '';
      changephonepassword.value = '';
      changephonecodeform.classList.remove("hidden");
      changephonecodeform.classList.remove("hidden");
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

const changephonecodeone = document.getElementById('changephonecode__one');
const changephonecodetwo = document.getElementById('changephonecode__two');
const changephonecodethree = document.getElementById('changephonecode__three');
const changephonecodefour = document.getElementById('changephonecode__four');
const changephonecodeforms = document.querySelector(".changephonecode__forms");
const changephonecodebclose = document.querySelector(".changephonecode__button_close");

if(changephonecodeform) {
  changephonecodeform.addEventListener('submit', e => {
    e.preventDefault();
    checkphonecodeInputs();
  });
  
  const formfields = document.querySelectorAll(".form__field");

  changephonecodeone.onclick = function(e) {changephonecodeone.value = '';changephonecodetwo.value = '';changephonecodethree.value = '';changephonecodefour.value = '';}
  changephonecodetwo.onclick = function(e) {changephonecodetwo.value = '';changephonecodethree.value = '';changephonecodefour.value = '';}
  changephonecodethree.onclick = function(e) {changephonecodethree.value = '';changephonecodefour.value = '';}
  changephonecodefour.onclick = function(e) {changephonecodefour.value = '';}
  changephonecodefour.addEventListener("keyup", function(e) {e.preventDefault();checkphonecodeInputs();});
  
  function handleInputField({ target }) {
    const value = target.value.slice(0, 1);
    target.value = value;
  
    const step = value ? 1 : -1;
    const fieldIndex = [...formfields].findIndex((field) => field === target);
    const focusToIndex = fieldIndex + step;
  
    if (focusToIndex < 0 || focusToIndex >= formfields.length) return;
    formfields[focusToIndex].focus();
  }
  formfields.forEach((field) => {
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
      changephonenum.classList.remove("hidden");
      changephoneecode.classList.add("hidden");
      changephonecodeforms.classList.add("hidden");
      changephonecodebclose.classList.remove("button__white");
      changephonecodebclose.innerText = 'Продолжить';
      buttoncm.classList.add("hidden");
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

// start vacancy files
const vacancyInput = document.getElementById('vacancy__file');
if(vacancyInput) {

  const bodyoverlays = document.querySelector(".overlay");
  const vacancyPopupButton = document.querySelectorAll(".vacancy__popup_button");
  const vacancyPopup = document.querySelector(".vacancy__popup");
  const vacancyclose = document.querySelector(".vacancy__close");
  const vacancyPopupHead = document.querySelector(".vacancy__popup_head");
  const vacancyPopupName = document.getElementById("vacancy__popup_name");

  vacancyPopupButton.forEach((i) =>
    i.addEventListener("click", function () {
      if (vacancyPopup.classList.contains("active")) {
        bodyoverlays.style.zIndex = null;
        bodyoverlays.classList.remove("active");
        vacancyPopup.classList.remove("active");
        vacancyPopup.classList.remove("active");
        document.body.style.height = null;
        document.body.style.overflow = null;
      } else {
        vacancyPopupName.value = this.parentElement.parentElement.previousElementSibling.children[0].innerText;
        bodyoverlays.style.zIndex = "120";
        bodyoverlays.classList.add("active");
        vacancyPopup.classList.add("active");
        vacancyPopup.classList.add("active");
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
      }
    })
  );
  vacancyclose.addEventListener("click", function () {
    bodyoverlays.style.zIndex = null;
    bodyoverlays.classList.remove("active");
    vacancyPopup.classList.remove("active");
    document.body.style.height = null;
    document.body.style.overflow = null;
  });

  var vacancyToUpload = [];
  const vacancyfileContainer = document.getElementById('vacancy__file_container');

  function vacancyfilesObserver(el, callback){
      var done = function (){callback(el);};
      var observer = new MutationObserver(done);
      observer.observe(el, {childList: true, characterDataOldValue: true});
  };

  vacancyfilesObserver(vacancyfileContainer, function (){
    if (vacancyfileContainer.children[1]) {
      vacancyfileContainer.children[0].remove();
    }
  });

  function vacancyformatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0';
    } else {
      var k = 1024;
      var dm = decimals < 0 ? 0 : decimals;
      var sizes = ['B', 'Kb', 'Mb', 'Gb', 'Tb'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }

  vacancyInput.addEventListener('change', (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let myFile = e.target.files[i];
      let myFileID = "FID" + (1000 + Math.random() * 9000).toFixed(0);
      let myFileSize = vacancyformatBytes(e.target.files[i].size);

      vacancyToUpload.push({
        file: myFile,
        FID: myFileID,
        filesize: myFileSize
      });
    };
    vacancydisplayFiles();
    // e.target.value = null;
  });

  function vacancyremoveFile(x) {
    vacancyInput.value = "";
    vacancyfileContainer.children[0].remove();
    // for (let i = 0; i < vacancyToUpload.length; i++) {
    //   if (vacancyToUpload[i].FID === x) {
    //     vacancyToUpload.splice(i, 1);
    //   }
    // }
    // vacancydisplayFiles();
  }

  function vacancydisplayFiles() {
    vacancyfileContainer.innerHTML = "";
    for (let i = 0; i < vacancyToUpload.length; i++) {
      vacancyfileContainer.innerHTML += `<li class="form__file_item"><span class="form__file_name">${vacancyToUpload[i].file.name}</span><span class="form__file_size">${vacancyToUpload[i].filesize}</span><a onclick="vacancyremoveFile('${vacancyToUpload[i].FID}')"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L12 12M12 12L17 7.00001M12 12L7 7M12 12L17 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>`;
    }
  }
}
// end vacancy files

// start contact files
const contactInput = document.getElementById('contact__file');
if(contactInput) {
  var contactToUpload = [];
  const contactfileContainer = document.getElementById('contact__file_container');

  function contactfilesObserver(el, callback){
      var done = function (){callback(el);};
      var observer = new MutationObserver(done);
      observer.observe(el, {childList: true, characterDataOldValue: true});
  };

  contactfilesObserver(contactfileContainer, function (){
    if (contactfileContainer.children[1]) {
      contactfileContainer.children[0].remove();
    }
  });

  function contactformatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return '0';
    } else {
      var k = 1024;
      var dm = decimals < 0 ? 0 : decimals;
      var sizes = ['B', 'Kb', 'Mb', 'Gb', 'Tb'];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
  }

  contactInput.addEventListener('change', (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let myFile = e.target.files[i];
      let myFileID = "FID" + (1000 + Math.random() * 9000).toFixed(0);
      let myFileSize = contactformatBytes(e.target.files[i].size);

      contactToUpload.push({
        file: myFile,
        FID: myFileID,
        filesize: myFileSize
      });
    };
    contactdisplayFiles();
    // e.target.value = null;
  });

  function contactremoveFile(x) {
    contactInput.value = "";
    contactfileContainer.children[0].remove();
    // for (let i = 0; i < contactToUpload.length; i++) {
    //   if (contactToUpload[i].FID === x) {
    //     contactToUpload.splice(i, 1);
    //   }
    // }
    // contactdisplayFiles();
  }

  function contactdisplayFiles() {
    contactfileContainer.innerHTML = "";
    for (let i = 0; i < contactToUpload.length; i++) {
      contactfileContainer.innerHTML += `<li class="form__file_item"><span class="form__file_name">${contactToUpload[i].file.name}</span><span class="form__file_size">${contactToUpload[i].filesize}</span><a onclick="contactremoveFile('${contactToUpload[i].FID}')"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 17L12 12M12 12L17 7.00001M12 12L7 7M12 12L17 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg></a></li>`;
    }
  }
}
// end contact files