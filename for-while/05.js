function countCharacter(str, letter) {
  // TODO: 여기에 코드를 작성합니다.
  // 수도코드
  // 등장횟수를 저장할 변수를 저장한다.
  // 받아온 문자열 만큼 반복한다.
  // 문자열의 i번 인덱스와 받아온 문자가 동일할 경우 변수에 값을 1 증가 시킨다.
  let count = 0;
  for (i = 0; i <= str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(countCharacter('I am a hacker', 'h'));
