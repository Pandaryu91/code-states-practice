/*
3. convertScoreToGrade

두 개의 수와 기호를 입력받아 알맞게 계산한 값을 리턴해야 합니다.
*/

function miniCalculator(num1, num2, operator) {
  // 수도코드
  // 넘버타입의 변수를 선언하고 리턴한다.
  // 만약에 operator가 '+'인 경우에는 num1과 num2를 더한다.
  // 아니면 만약에 operator가 '-'인 경우에는 num1과 num2를 뻰다.
  // 아니면 만약에 operator가 '*'인 경우에는 num1과 num2를 곱한다.
  // 아니면 만약에 operator가 '/'인 경우에는 num1과 num2를 나눈다.
  let num = 0;

  if (operator === '+') {
    num = num1 + num2;
  } else if (operator === '-') {
    num = num1 - num2;
  } else if (operator === '*') {
    num = num1 * num2;
  } else if (operator === '/') {
    num = num1 / num2;
  }
  return num;
}

console.log(miniCalculator(3, 4, '+'));

/*
3. miniCalculator

점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.

*/

function convertScoreToGrade(score) {
  // 수도코드
  // 파라미터로 받아온 score값을 100이하 0이상 사이에서 비교한다.
  // score값이 해당하는 범위의 점수라면 해당 범위의 문자열을 반환한다.
  // 아니면 INVALID SCORE를 리턴

  let grade = '';

  if (score <= 100 && score >= 90) {
    grade = 'A';
  } else if (score < 90 && score >= 80) {
    grade = 'B';
  } else if (score < 80 && score >= 70) {
    grade = 'C';
  } else if (score < 70 && score >= 60) {
    grade = 'D';
  } else if (score < 60 && score >= 0) {
    grade = 'F';
  } else {
    grade = 'INVALID SCORE';
  }
  return grade;
}

console.log(convertScoreToGrade(91));
