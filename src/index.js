let tryNum = [4, 5, 6];
const answer = [6, 6, 3];
const tryNumSize = tryNum.length;

function oneGame() {
  if (isHomeRun(tryNum, answer)) {
    console.log("즈엉엉답ㄷ");
  } else {
    const strike = howManyStrike(tryNum, answer);
    const ball = howManyBall(tryNum, answer);
    console.log(strike + " strike");
    console.log(ball + " ball");
    if (strike === 0 && ball === 0) {
      console.log('아우우웃~!@');
    }
  }
}

function isHomeRun() {
  let homerun = 0;
  for (let i = 0; i < tryNumSize; i++) {
    if (tryNum[i] === answer[i]) {
      homerun++;
    }
  }
  if (homerun === tryNumSize) {
    return true;
  } else {
    return false;
  }
}

function howManyStrike() {
  let strike = 0;
  for (let i = 0; i < tryNumSize; i++) {
    if (tryNum[i] === answer[i]) {
      strike++;
      tryNum[i] = NaN;
    }
  }
  return strike;
}

function howManyBall() {
  let ball = 0;
  for (let i = 0; i < tryNumSize; i++) {
    for (let j = 0; j < tryNumSize; j++) {
      if (tryNum[i] === answer[j]) {
        ball++;
        break;
      }
    }
  }
  return ball;
}

oneGame();
