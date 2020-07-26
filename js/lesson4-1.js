function numToObject(number) {
    if (number > 999) {
        console.log('Число превышает допустимые значения');
        let numObject = {}
        return numObject
    }
    let numObject = {
        'единицы': 0,
        'десятки': 0,
        'сотни': 0,
    }
    let numText = number + '';
    if (number === 0) {
        numObject.единицы = 0;
        numObject.десятки = 0;
        numObject.сотни = 0;
    } else if (number < 10) {
        numObject.единицы = +numText[numText.length - 1];
        numObject.десятки = 0;
        numObject.сотни = 0;
    } else if (number < 99) {
        numObject.единицы = +numText[numText.length - 1];
        numObject.десятки = +numText[numText.length - 2];
        numObject.сотни = 0;
    } else {
        numObject.единицы = +numText[numText.length - 1];
        numObject.десятки = +numText[numText.length - 2];
        numObject.сотни = +numText[numText.length - 3];
    }

    return numObject;
}