//document.getElementById("para").textContent = "This is javascript";

//let places = ["madurai", "Chennai", "coimbatore", "delhi", "telungana"];
// for (let i = 0; i < places.length; i++) {
//   console.log(places[i]);
// }

// places.sort();

// for (let place of places) {
//   console.log(place);
// }

//console.log(places);

// places.push("mumbai", "agra");
// places.unshift("arapalayam");
// console.log(places);
// console.log(places[7]);

// pwdLength = document.getElementById("pwdLength");
// result = document.getElementById("result");

function randomPasswordGenerator() {
  pwdLength = document.getElementById("pwdLength");
  result = document.getElementById("result");
  lA = lowerCaseChars.checked;
  uA = upperCaseChars.checked;
  num = numbers.checked;
  splNum = splChars.checked;
  pwdLength = pwdLength.value;
  pwdLength = Number(pwdLength);
  console.log(pwdLength);
  lowerCase = "abcdefghijklmnopqrstuvwxyz";
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numb = "0123456789";
  splCase = "~!@#$%^&*()_+-*/{};:'\"|,<.>/?";
  let randomPass = "";
  let res = "";
  randomPass += lA ? lowerCase : "";
  randomPass += uA ? upperCase : "";
  randomPass += num ? numb : "";
  randomPass += splNum ? splCase : "";
  console.log(randomPass, res);
  if (pwdLength <= 0) {
    return (result.innerHTML = "password length must be at least 1");
  }
  if (randomPass === "") {
    return (result.textContent = "at least 1 should be included");
  }
  for (let i = 0; i < pwdLength; i++) {
    res += randomPass[Math.floor(Math.random() * randomPass.length)];
  }
  console.log(lA, uA, num, splNum, pwdLength, randomPass, res);
  return (result.innerHTML = `Password is ${res}`);
}
