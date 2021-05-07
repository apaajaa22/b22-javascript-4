function reverseWord(str) {
    console.log(str.split(" ").reverse().join(" "))
}
reverseWord("saya adalah rahadian")

function balikKata(str) {
    let result = ""
    newStr = str.split(" ")
    for (let i = newStr.length - 1; i >= 0; i--) {
        result = result + newStr[i] + " "
    }
    console.log(result)
}
balikKata("saya adalah reza")
