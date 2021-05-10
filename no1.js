function palindrom(str) {
    let lower = str.toLowerCase()
    console.log(lower)
    let newString = lower.split("")
    newString.reverse()
    let result = newString.join("")
    if (lower === result) {
        console.log(`${str} adalah kata palindrom`)
    } else {
        console.log(`${str} bukan kata palindrom`)
    }
}
palindrom("MalAm")

function cekKata(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }
    //console.log(newStr)
    if (str === newStr) {
        console.log("palindrom")
    } else {
        console.log("bukan palindrom")
    }
}

cekKata("malam")
