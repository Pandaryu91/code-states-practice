function replaceAll(str, from, to) {
  // TODO: 여기에 코드를 작성합니다.
  // 수도코드
  // 리턴 받을 스트링 타입 변수를 선언한다.
  // 문자열의 길이만큼 반복한다.
  // 만약에 문자열 인덱스의 i 번 과 from이 일치한다면, i번 인덱스를 to로 바꿔줍니다.
  // 문자열의 i번 인덱스를 변수에 더해줍니다.
  let text = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === from) {
      str[i] = to;
    }
    text = str.replaceAll(from, to);
  }
  return text;
}
console.log(replaceAll('loop', 'o', 'e'));

// function replaceAll(str, from, to) {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === from) {
//       result = result + to;
//     } else {
//       result = result + str[i];
//     }
//   }

//   return result;
// }
