function palindrom(str) {
    const newString = str.split("").reverse().join("")
    //console.log(newString)
    if (str === newString) {
        console.log(`${str} adalah kata palindrom`)
    } else {
        console.log(`${str} bukan kata palindrom`)
    }
}
palindrom("malam")

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
