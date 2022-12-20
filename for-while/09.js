function isPrime(num) {
  // TODO: 여기에 코드를 작성합니다.
  // boolean 타입의 변수를 선언한다.
  // num의 제곱근을 구한다.
  // num만큼 반복한다.
  // 만약에 num을 i로 나눴을때 나머지 값을 전부 합산하면 num+1이면 소수이다.
  let prime = false;
  let sum = 0;
  for (i = 1; i <= num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  if (sum === num + 1) {
    prime = true;
  }
  return prime;
}
console.log(isPrime(9));
