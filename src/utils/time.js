import moment from "moment"

const calculateScheduleDuration = ({ start, end }) => {
  const tempDate = moment().format("YYYY-MM-DD")
  const startTime = moment(`${tempDate} ${start}`)
  const endTime = moment(`${tempDate} ${end}`)

  const diff = endTime.diff(startTime)
  const duration = moment.duration(diff)

  return `${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`
}

const calculateTripDuration = ({ start, end }) => {
  if (end === "") return "~"
  const startTime = moment(start)
  const endTime = moment(end)
  
  const diff = endTime.diff(startTime)
  const duration = moment.duration(diff)
  
  return `${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`
}

export {
  calculateScheduleDuration,
  calculateTripDuration
}