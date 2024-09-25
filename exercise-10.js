function calculateGrade(grade){
    if (grade < 60) return `F`
    else if (grade >= 60 && grade < 70) return `D`
    else if (grade >= 70 && grade < 80) return `C`
    else if (grade >= 80 && grade < 90) return `B`
    else if (grade >= 90 && grade <= 100) return `A`
}

console.log(calculateGrade(100));
