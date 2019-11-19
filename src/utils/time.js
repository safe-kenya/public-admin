import moment from "moment"

const calculateScheduleDuration = ({ start, end }) => {
  const startTime = moment(start)
  const year = startTime.get("year")
  const month = startTime.get("month")
  const date = startTime.get("date")
  let [hour, rest] = end.split(":")
  const [minute, amOrpm] = rest.split(" ")

  if(amOrpm === "PM") hour = parseInt(hour) + 12
  const endTime = moment({ year, month, date, hour, minute})
  
  console.log(endTime)
}

const calculateTripDuration = ({ start, end }) => {
  const startTime = moment(start)
  const endTime = moment(end)
  
  const diff = endTime.diff(startTime)
  const duration = moment.duration(diff)
  // console.log({start, end, startTime, endTime, diff, duration})
  return `${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`
}

export {
  calculateScheduleDuration,
  calculateTripDuration
}