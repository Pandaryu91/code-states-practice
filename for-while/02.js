function makeDigits(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 수도코드
  // 리턴할 문자열 변수를 선언한다.
  // num만큼 반복하는 반복문을 작성한다.
  // 변수에 i를 더한다
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += i;
  }
  return str;
}
console.log(makeDigits(5));