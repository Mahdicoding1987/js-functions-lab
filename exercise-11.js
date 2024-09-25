function createUsername(firstName, lastName){
    let firstNameShort = firstName.substring(0,3)
    let lastNameShort = lastName.substring(0,3)
    let numberOfFirstLetters = firstName.length
    let numberOfLastLetters = lastName.length
    let totalNumber = numberOfFirstLetters + numberOfLastLetters
    return `${firstNameShort}${lastNameShort}${totalNumber}`
}
console.log(createUsername("Samantha", "Green"));