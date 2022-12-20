/*
4. convertScoreToGrade
점수를 입력받아 점수에 해당하는 등급을 리턴해야 합니다.
*/

function convertScoreToGrade(score) {
  // 수도코드
  // 넘버타임의 정수를 입력받고
  // 점수가 90점 이상 100이하일 경우 A를 출력한다.
  // 정수가 80점 이상 89이하일 경우 B를 출력한다.
  // 정수가 70점 이상 79이하일 경우 C를 출력한다.
  // 정수가 60점 이상 69이하일 경우 D를 출력한다.
  // 정수가 0점 이상 59이하일 경우 F를 출력한다.
  // 아니면 INVALID SCORE 리턴한다.

  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  } else if (score >= 0 && score <= 59) {
    return 'F';
  } else {
    return 'INVALID SCORE';
  }
}

console.log(convertScoreToGrade(50));
