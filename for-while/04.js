function makeMultiplesOfDigit(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 수도코드
  // 문자열을 저장할 변수를 선언한다.
  // num만큼 반복할 반복문을 작성한다.
  // 만약에 i가 3으로 떨어진다면 변수에 i를 저장한다.
  let str = '';
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      str += i;
    }
  }
  return str;
}
console.log(makeMultiplesOfDigit(11));
