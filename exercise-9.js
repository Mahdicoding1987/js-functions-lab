function basicCalculator(firstNumber, secondNumber, operation){
    if (operation === "add") return firstNumber + secondNumber
    else if (operation ==="subtract") return firstNumber - secondNumber
    else if (operation === "multiply") return firstNumber * secondNumber
    else if (operation === "divide") return firstNumber / secondNumber
}
console.log(basicCalculator(10, 5, "divide"));