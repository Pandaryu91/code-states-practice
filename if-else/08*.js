// //미해결
// function findShortestOfThreeWords(word1, word2, word3) {
//   // Tip!
//   // 컴퓨터에게 가장 짧은거, 가장 긴거, 가장 큰거, 작은거 찾으라고 시키는 방법
//   // 기준 하나 만들어 놓고 그 기준과 비교해서, 더 짧으면 교체
//   // 가장 짧은 단어를 할당할 변수 하나 선언
//   // word1과 word2를 먼저 비교한다
//   // word2의 길이가 word1의 길이보다 짧으면 변수에 word2 할당
//   // 더 작을 때만 교체되기 때문에, 길이가 같더라도 먼저 나온 단어가 앞에 있음.
//   // word1과 word2를 비교하여 나온 결과와 word3을 비교
//   // 더 작을 때만 교체되기 때문에, 길이가 같더라도 먼저 나온 단어가 앞에 있음.

//   }
//   findShortestOfThreeWords
// 문제
// 차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴해야 합니다.

// 입력
// 인자 1 : word1
// string 타입의 문자열
// word1.length는 10 이하
// 인자 2 : word2
// string 타입의 문자열
// word2.length는 10 이하
// 인자 3 : word3
// string 타입의 문자열
// word3.length는 10 이하
// 출력
// string 타입을 리턴해야 합니다.
// 주의 사항
// 동일한 길이의 문자열 중에서는 처음 입력받은 문자열을 리턴해야 합니다.
// 입출력 예시
// 1
// 2
// 3
// 4
// 5
// let output = findShortestOfThreeWords('a', 'two', 'three');
// console.log(output); // --> 'a'

// output = findShortestOfThreeWords('c', 'b', 'a');
// console.log(output); // --> 'c'

function findShortestOfThreeWords(word1, word2, word3) {
  let srt = word1;
  if (word1.length > word2.length) {
    srt = word2;
  }
  if (srt.length > word3.length) {
    srt = word3;
  }
  return srt;
}
console.log(findShortestOfThreeWords('hi', 'one', 'e'));
