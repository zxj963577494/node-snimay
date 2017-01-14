const activityTimer = function (endTime, t) {
  const now = new Date()
  endTime = new Date(endTime)
  if (t) {
    if (now > endTime) {
      return '<span class="timer on">已结束</span>'
    } else {
      return '<span class="timer">进行中</span>'
    }
  } else {
    if (now > endTime) {
      return '已结束'
    } else {
      return '进行中'
    }
  }
}
module.exports = activityTimer
