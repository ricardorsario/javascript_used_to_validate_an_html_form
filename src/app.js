/* eslint-disable */
import "bootstrap";

const CARD = document.querySelector("#inputCard");
const CVC = document.querySelector("#inputCVC");
const AMOUNT = document.querySelector("#inputAmount");

const FIRSTNAME = document.querySelector("#inputFirstName");
const LASTNAME = document.querySelector("#inputLastName");

const CITY = document.querySelector("#inputCity");
const STATE = document.querySelector("#inputState");
const POSTALCODE = document.querySelector("#inputZip");

const FORM = document.querySelector("form");

const cardType1 = document.querySelector("#contactChoice1");
const cardType2 = document.querySelector("#contactChoice2");
const cardType3 = document.querySelector("#contactChoice3");
const cardType4 = document.querySelector("#contactChoice4");

window.onload = () => {
  FORM.addEventListener("submit", event => {
    event.preventDefault();
    checkCardsubmit();
    checkCVCsubmit();
    checkAmountsubmit();
    checkPostsubmit();
    checkFirstNameSubmit();
    checkLastNameSubmit();
    checkCitySubmit();
    checkStateSubmit();
    checkWellDone();
    checkVisaSubmit();
  });
};

//CHEQUEO DEL PAGO VISA
const checkVisaSubmit = () => {
  if (
    cardType1.checked == true ||
    cardType2.checked == true ||
    cardType3.checked == true ||
    cardType4.checked == true
  ) {
    cardType1.classList.remove("is-invalid");
    cardType1.classList.add("is-valid");
    cardType2.classList.remove("is-invalid");
    cardType2.classList.add("is-valid");
    cardType3.classList.remove("is-invalid");
    cardType3.classList.add("is-valid");
    cardType4.classList.remove("is-invalid");
    cardType4.classList.add("is-valid");
  } else {
    cardType1.classList.remove("is-valid");
    cardType1.classList.add("is-invalid");
    cardType2.classList.remove("is-valid");
    cardType2.classList.add("is-invalid");
    cardType3.classList.remove("is-valid");
    cardType3.classList.add("is-invalid");
    cardType4.classList.remove("is-valid");
    cardType4.classList.add("is-invalid");
  }
};

//CHEQUEO DEL CVC
const checkCVCsubmit = () => {
  if (isNumber(CVC.value) && CVC.value.length == 3) {
    CVC.classList.remove("is-invalid");
    CVC.classList.add("is-valid");
  } else {
    CVC.classList.remove("is-valid");
    CVC.classList.add("is-invalid");
  }
};

//CHEQUEO DEL AMOUNT
const checkAmountsubmit = () => {
  if (isNumber(AMOUNT.value) && AMOUNT.value > 0) {
    AMOUNT.classList.remove("is-invalid");
    AMOUNT.classList.add("is-valid");
  } else {
    AMOUNT.classList.remove("is-valid");
    AMOUNT.classList.add("is-invalid");
  }
};

//CHEQUEO DEL POSTAL CODE
const checkPostsubmit = () => {
  if (isNumber(POSTALCODE.value) && POSTALCODE.value.length == 5) {
    POSTALCODE.classList.remove("is-invalid");
    POSTALCODE.classList.add("is-valid");
  } else {
    POSTALCODE.classList.remove("is-valid");
    POSTALCODE.classList.add("is-invalid");
  }
};

//CHEQUEO DEL CARD
const checkCardsubmit = () => {
  if (
    isNumber(CARD.value) &&
    CARD.value.length == 16 &&
    checkCreditCardNumber(CARD.value)
  ) {
    CARD.classList.remove("is-invalid");
    CARD.classList.add("is-valid");
  } else {
    CARD.classList.remove("is-valid");
    CARD.classList.add("is-invalid");
  }
};

//CHEQUEO DEL FIRST NAME
const checkFirstNameSubmit = () => {
  if (isText(FIRSTNAME.value) && FIRSTNAME.value.length > 0) {
    FIRSTNAME.classList.remove("is-invalid");
    FIRSTNAME.classList.add("is-valid");
  } else {
    FIRSTNAME.classList.remove("is-valid");
    FIRSTNAME.classList.add("is-invalid");
  }
};

//CHEQUEO DEL LAST NAME
const checkLastNameSubmit = () => {
  if (isText(LASTNAME.value) && LASTNAME.value.length > 0) {
    LASTNAME.classList.remove("is-invalid");
    LASTNAME.classList.add("is-valid");
  } else {
    LASTNAME.classList.remove("is-valid");
    LASTNAME.classList.add("is-invalid");
  }
};

//CHEQUEO DE CITY
const checkCitySubmit = () => {
  if (isText(CITY.value) && CITY.value.length > 0) {
    CITY.classList.remove("is-invalid");
    CITY.classList.add("is-valid");
  } else {
    CITY.classList.remove("is-valid");
    CITY.classList.add("is-invalid");
  }
};

//CHEQUEO DE STATE
const checkStateSubmit = () => {
  if (STATE.value !== "0") {
    STATE.classList.remove("is-invalid");
    STATE.classList.add("is-valid");
  } else {
    STATE.classList.remove("is-valid");
    STATE.classList.add("is-invalid");
  }
};

//CHEQUEO DE DISCLAIMER
const MISSING = document.getElementById("missing");
const WELLDONE = document.getElementById("wellDone");

//const ALLINPUTS = document.querySelectorAll("input");

const checkWellDone = () => {
  if (
    CARD.classList[1] == "is-valid" &&
    CVC.classList[1] == "is-valid" &&
    AMOUNT.classList[1] == "is-valid" &&
    FIRSTNAME.classList[1] == "is-valid" &&
    LASTNAME.classList[1] == "is-valid" &&
    CITY.classList[1] == "is-valid" &&
    STATE.classList[1] == "is-valid" &&
    POSTALCODE.classList[1] == "is-valid"
  ) {
    showWellDone();
  } else {
    showMissing();
  }
};

let showWellDone = function() {
  WELLDONE.style.display = "block";
  MISSING.style.display = "none";
};

let showMissing = function() {
  MISSING.style.display = "block";
  WELLDONE.style.display = "none";
};

//CHEQUEO DE QUE ALGO SEA NÚMERO
const isNumber = addedNumber => {
  return /^[0-9]*$/.test(addedNumber);
};

//CHEQUEO DE QUE ALGO SEA TEXTO
const isText = addedText => {
  return /^[a-zA-Z]*$/.test(addedText);
};

//FUNCIÓN DE LUPIN (THANKS!)
const checkCreditCardNumber = cardNumber => {
  let s = 0;
  let doubleDigit = false;
  for (let index = cardNumber.length - 1; index >= 0; index--) {
    let digit = +cardNumber[index];
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    s += digit;
    doubleDigit = !doubleDigit;
  }
  return s % 10 == 0;
};
