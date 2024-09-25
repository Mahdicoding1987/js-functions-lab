function convertTemperature(temprature, scale){
    if (scale === "C") return temprature * 1.8 + 32
    else if (scale === "F") return (temprature - 32) / 1.8
}

console.log(convertTemperature(32, "C"));