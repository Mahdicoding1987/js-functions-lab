function calculateTip(billAmount, tipPercentage){
    let tip = tipPercentage/100
    return billAmount*tip
}
console.log(calculateTip(50, 20));
