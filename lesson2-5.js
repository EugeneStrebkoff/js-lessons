//Задание №5

function summation(a, b) {
    return  a + b
}

function subtraction(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}

//Задание №6

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'summation':
            alert(summation(arg1, arg2))
            break
        case 'subtraction':
            alert(subtraction(arg1, arg2))
            break
        case 'multiplication':
            alert(multiplication(arg1, arg2))
            break
        case 'division':
            alert(division(arg1, arg2))
            break
    }
}
