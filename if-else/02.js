/*
2.fizzBuzz

수를 입력받아 3 그리고 5로 각각 나눈 뒤 나머지 값에 따라 알맞은 메시지를 리턴해야 합니다.
*/

function fizzBuzz(num) {
  // 수도코드
  // 파라미터로 전달 받은 값을 비교한다.
  // 만약에 비교되는 값을 3과 5로 나누었을 때 나머지가 없을 경우 'FizzBuzz'를 변수에 할당.
  // 아니면 비교되는 값을 3으로 나누었을 때 나머지가 없을 경우 'Fizz'를 변수에 할당.
  // 아니면 비교되는 값을 5으로 나누었을 때 나머지가 없을 경우 'Buzz'를 변수에 할당.
  // 아니면 'No FizzBuzz'를 변수에 할당.

  let str = '';

  if (num % 3 === 0 && num % 5 === 0) {
    str = 'FizzBuzz';
  } else if (num % 3 === 0) {
    str = 'Fizz';
  } else if (num % 5 === 0) {
    str = 'Buzz';
  } else {
    str = 'No FizzBuzz';
  }
  return str;
}

console.log(fizzBuzz(15));
