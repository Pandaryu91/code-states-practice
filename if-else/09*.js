//미해결
function makeLastSeenMsg(name, period) {
  // TODO: 여기에 코드를 작성합니다.
    // 미접속 시간이 1시간 보다 적을 경우, 분 단위로 표기합니다.
  // 미접속 시간이 1시간 보다 크고 24시간 보다 적을 경우, 시간 단위로 내림처리하여 표기합니다.
  // 미접속 시간이 24시간 보다 클 경우, 일 단위로 내림처리하여 표기합니다.

  // 1시간
    // 1일
      // 만약 60분보다 작으면
          // 그냥 몇 분인지 알려준다.
              // 1시간 이상 24시간 이하일 땐
                  // period를 1시간으로 나누어 몇 시간인지 알려준다 (소수점 이하 버림 Math.floor())
                      // 24시간 이상일 때
                          // period를 24시간으로 나누어 몇 일인지 알려준다 (소수점 이하 버림 Math.floor())
  let hour =
  let day = 
  if(period < 60){
    return `${name}: ${period}분 전에 접속함`
  } else if (hour >= 1 && hour < 24) {
    return `${name}: ${hour}시간 전에 접속함` 
  }
}
