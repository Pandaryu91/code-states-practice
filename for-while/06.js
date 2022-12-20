function getMaxNumberFromString(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 리턴 받을 변수를 선언한다.
  // 문자열의 길이만큼 반복한다.
  // 문자열의 i 번 인덱스 값이 변수에 저장된 값보다 클 경우 해당 인덱스 값을 변수에 할당한다.
  let num = '0';
  for (i = 0; i <= str.length; i++) {
    if (str[i] > num) {
      num = str[i];
    }
  }
  return num;
}
console.log(getMaxNumberFromString(''));
