/*
7. addOneSecond
시, 분, 초를 입력받아 1초를 더한 결과값을 특정 형태의 메시지로 리턴해야 합니다. 
*/

function addOneSecond(hour, minute, second) {
  // 수도코드
  // 만약에 second가 0이상이고 59 이하라면 second 1을 더해줍니다.
  // 만약에 60라면 second은 0으로 초기화, minute 1을 더합니다.
  // 만약에 minute이 0이상이고 60 이하이면
  // 만약에 60라면 minute 0으로 초기화, hour 1을 더합니다.
  // 만약에 hour 0이상이고 24 이하라면
  //만약hour 24라면 hour 0으로 초기화.

  // 만약에 second가 0이상이고 59 이하라면 second 1을 더해줍니다.
  if (second >= 0 && second <= 59) {
    second++;

    // 만약에 60라면 second은 0으로 초기화, minute 1을 더합니다.
    if (second === 60) {
      second = 0;
      minute++;

      // 만약에 minute이 0이상이고 60 이하이면
      if (minute >= 0 && minute <= 60) {
        // 만약에 60라면 minute 0으로 초기화, hour 1을 더합니다.
        if (minute === 60) {
          minute = 0;
          hour++;

          // 만약에 hour 0이상이고 24 이하라면
          if (hour >= 0 && hour <= 24) {
            //만약hour 24라면 hour 0으로 초기화.
            if (hour === 24) {
              hour = 0;
            }
          }
        }
      }
    }
  }
  return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`;
}

console.log(addOneSecond(23, 59, 59));
