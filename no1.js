function palindrom(str) {
  const newString = str.split("").reverse().join("")
  console.log(newString)
  if (str === newString) {
    console.log(`${str} adalah kata palindrom`)
  } else {
    console.log(`${str} bukan kata palindrom`)
  }
}
palindrom("malam")
