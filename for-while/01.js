function sumTo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 수도코드
  // 숫자를 저장한 변수를 선언한다.
  // 받아온 파라미터 값 많큼 반복을 하면서 1씩 증가합니다.
  // 증가한 값을 변수에 더해줍니다.
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}
console.log(sumTo(5));