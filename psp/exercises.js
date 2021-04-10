// Exercises

function sameFrequency(num1, num2) {
  if (num1.length !== num2.length) return false;

  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    freqCounter1[strNum1[i]] = (freqCounter1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum2.length; j++) {
    freqCounter2[strNum2[j]] = (freqCounter2[strNum2[j]] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (freqCounter1[key] !== freqCounter2[key]) {
      return false;
    }
  }
  return true;
}

let diditwork = sameFrequency(44688, 8464);
console.log(diditwork);
