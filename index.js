// run `node index.js` in the terminal

/* console.log(`Hello Node.js v${process.versions.node}!`);

function computeAverageLengthOfWords2(word1, word2) {
  let output;
  output = Math.floor((word1 + word2).length / 2);
  return output;
  
} 
  let word1 = 'code';
  let word2 = 'states';
console.log(computeAverageLengthOfWords2(word1, word2));

평균 길이를 내림하여 리턴해야 합니다. */

/* function isPythagorean(side1, side2, side3) {
  let output = false;
  side1 = Math.pow(side1, 2)
  side2 = Math.pow(side2, 2)
  side3 = Math.pow(side3, 2)
  if(side1 === side2 + side3 || side2 === side1 + side3 || side3 === side1 + side2 ){
    output = true;
  }
    return output;
}
let side1 = 3;
let side2 = 5;
let side3 = 4;
console.log(isPythagorean(side1, side2, side3)); */

function takeLetters(num, str) {
  let string = '';
  string = str.slice(0, num);
  // TODO: 여기에 코드를 작성합니다.
  return string;
}
console.log(takeLetters(3, 'code'));