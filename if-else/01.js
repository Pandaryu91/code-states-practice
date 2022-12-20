/* 
1. isOldEnoughToDrink

나이를 입력받아 술을 마실 수 있는지(18세 이상) 여부를 리턴해야 합니다.
*/

function isOldEnoughToDrink(age) {
  // 수도코드
  // 만약에 나이가 18보다 크거나 같으면 변수에 true를 할당한다.

  let oldEnough = false;

  if (age >= 18) {
    oldEnough = true;
  }
  return oldEnough;
}

console.log(isOldEnoughToDrink(20));
