/*
6. convertScoreToGradeWithPlusAndMinus
점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.
만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴해야 합니다.
각 등급의 최고 점수보다 7점 이하인 경우, 등급과 함께 '-'를 리턴해야 합니다. (단, 93점의 경우에는 A를 리턴해야 합니다.)
각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴해야 합니다.
F+ 와 F- 는 존재하지 않습니다.
 */

// 수도코드
// 문자열타입 변수를 선언한다.
// 만약 점수가 90이상일 100이하인 경우, 변수에 A를 저장한다.
// 만약 점수의 끝자리가

function convertScoreToGradeWithPlusAndMinus(score) {
  // 수도코드
  // 만약 점수가 90 이상일 경우, A를 변수에 저장한다.
  // 만약 점수가 100이라면 '+A'를 리턴한다.
  // 아니면 점수가 80 이상일 경우, B를 변수에 저장한다.
  // 아니면 점수가 70 이상일 경우, C를 변수에 저장한다.
  // 아니면 점수가 60 이상일 경우, D를 변수에 저장한다.
  // 아니면 점수가 60 미만일 경우, F를 변수에 저장한다.

  //이미 90이상이고 92이하고 98이상인 경우에 메뉴얼을 정했다.
  // => 100,99,98,92,91,90;
  // 가 아닌 경우에는 A를 주고싶다.

  let grade = '';

  // 만약에 점수가 90이상이고 100 이하라면
  if (score >= 90 && score <= 100) {
    grade = 'A';
    if (score === 100) {
      return 'A+';
    }
  } else if (score >= 80 && score <= 89) {
    grade = 'B';
  } else if (score >= 70 && score <= 79) {
    grade = 'C';
  } else if (score >= 60 && score <= 69) {
    grade = 'D';
  } else if (score >= 0 && score <= 59) {
    grade = 'F';
  } else {
    grade = 'INVALID SCORE';
  }

  if (score >= 60 && score <= 100) {
    score = score % 10; //9

    if (score >= 8) {
      grade = grade + '+';
    } else if (score <= 2) {
      grade = grade + '-';
    }
  }
  return grade;
}

console.log(convertScoreToGradeWithPlusAndMinus(-1));
