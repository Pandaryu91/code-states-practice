function makePermutations(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 반환 받을 문자열 타입의 변수를 선언한다.
  // 앞자리 수의 변수 i, 뒷자리 수의 변수 j에 str의 인덱스 값을 각각 입력한다.
  let add = '';
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < str.length; j++) {
      add = add + `${str[i] + str[j]}`;
    }
  }
  return add;
}
console.log(makePermutations('87'));

