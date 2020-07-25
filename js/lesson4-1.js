let numObject = {
    'единицы': 0,
    'десятки': 0,
    'сотни': 0,
}
function numToObject(number) {
    if (number > 999) {
        console.log('Число превышает допустимые значения');
        return numObject
    }
    let numText = number + '';
    numObject.единицы = +numText[numText.length-1];
    numObject.десятки = +numText[numText.length-2];
    if(number>99){
        numObject.сотни = +numText[numText.length-3];
    } else {
        numObject.сотни = 0;
    }
    return numObject;
}