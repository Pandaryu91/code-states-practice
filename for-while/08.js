function getSumOfFactors(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 수도코드
  // 넘버타입 변수를 선언합니다.
  // num만큼 반복합니다.
  // 만약에 num이 i로 나눴을 때 0이라면 변수에 i를 저장합니다.
  let factor = 0;
  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      factor += i;
    }
  }
  return factor;
}
console.log(getSumOfFactors(12));
