const divideAndSort = (num) => {
    let toString = num.toString()
    let split = toString.split("0")
    console.log(split)
    let sort = split.map((item) => item.split("").sort().join("")).join("")
    console.log(sort)
    console.log(typeof sort)
    let parse = parseInt(sort)
    console.log(typeof parse)
    console.log(parse)
}
divideAndSort(12305340213)
