function makeDigits2(num) {
  // TODO: 여기에 코드를 작성합니다.
  let str = '';
  let i = 1;
  while (i <= num) {
    if (i === num) {
      str = str + i;
    } else {
      str = str + i + '-';
    }
  }
  return str;
}
console.log(makeDigits2(5));

// function makeDigits2(num) {
//   let result = '1';

//   let i = 2;
//   while (i <= num) {
//     result = result + `-${i}`;
//     i++;
//   }

//   return result;
// }
// console.log(makeDigits2(5));
