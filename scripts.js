function getFourDiffNums() {
  let num = [0, 0, 0, 0];
  let secondNum = 0;

  num[0] = Math.floor(Math.random()*10);
  
  while(true) {
    secondNum = Math.floor(Math.random()*10);
    if (secondNum !== num[0]) {
      num[1] = secondNum;
      break;
    }
  }

  while(true) {
    secondNum = Math.floor(Math.random()*10);
    if (secondNum !== num[0] && secondNum != num[1]) {
      num[2] = secondNum;
      break;
    }
  }

  while(true) {
    secondNum = Math.floor(Math.random()*10);
    if (secondNum !== num[0] && secondNum != num[1] && secondNum != num[2]) {
      num[3] = secondNum;
      break;
    }
  }
  
  return num;
}

function checkNums(userNum) {
  let userArrOfNums = [];
  for(let i = 0; i < 4; i++) {
    userArrOfNums[i] = userNum.toString()[i];
  }

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (userArrOfNums[i] == compArrOfNums[j]) {
        if (i === j) {
          bulls++;
        } else {
          cows++;
        }
      }
    }
  }

  console.log('your variant: ' + userNum);
  console.log('bulls: ' + bulls);
  console.log('cows: ' + cows);

  if(bulls === 4) {
    return true;
  } else {
    return false;
  }
}

let compArrOfNums = getFourDiffNums();

let userNumber = 0;

while (true) {
  userNumber = prompt('Your number, of four different digits (don\'t cheat!):\n(you can see past attempts in console)');
  if(!userNumber) {
    alert('Good bye!');
    break;
  } else {
    if(checkNums(userNumber)) {
      alert('You win, lucky gay!');
      break;
    }
  }
}