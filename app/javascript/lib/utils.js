export const secondsToTimecode = (position) => {
  console.log('--')
  var remainder = position
  console.log(remainder)

  let hours = Math.floor(remainder / 3600)
  remainder -= hours * 3600
  console.log(remainder)

  let minutes = Math.floor(remainder / 60)
  remainder -= minutes * 60
  console.log(remainder)

  let seconds = Math.floor(remainder)
  remainder -= seconds
  console.log(remainder)

  let frames = Math.floor((remainder * 29.97))

  const timecodeArray = [hours || 0, minutes || 0, seconds || 0, frames || 0]

  const zeroPaddedTimecodeArray = timecodeArray.map((number) => {
    if (number < 10) {
      return `0${number}`
    }

    return number
  })

  return zeroPaddedTimecodeArray.join(':')
}
