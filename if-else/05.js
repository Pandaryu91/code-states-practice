/*
5. checkAge
이름과 나이를 입력받아 나이별로 다른 메시지를 리턴해야 합니다.
*/
function checkAge(name, age) {
  // 수도코드
  // 길이 10이하 스트링타입의 이름을 입력받는다.
  // 0초과 100미만의 넘버타입의 나이를 입력받는다.
  // 만약에 나이가 21세 이상일 경우, Welcome, name을 리턴한다.
  // 아니면 GO home, name을 리턴한다.

  if (age >= 21) {
    return `Welcome, ${name}!`;
  } else {
    return `Go home, ${name}!`;
  }
}

console.log(checkAge('John', 21));
