
const stringSize = (text) => {
    text = 'This text has a certain number of characters';
    const result = text.length;
    return result;
}
const replaceCharacterE = (text) => {
    text = 'This text has a certain number of characters';
    const result = text.replace("e", " ");
    return result;
}
const concatString = (text1, text2) => {
    text1 = 'el Javascript shi ';
    text2 = 'ra2e3';
    const result = "".concat(text1, text2);
    return result;
}
const showChar5 = (text) => {
    text = 'TDD kicks ass';
    const result = text.charAt(4);
    return result;
}
const showChar9 = (text) => {
    text = 'But it is really annoying to write';
    const result = text.substring(0, 9);
    return result;
}
const toCapitals = (text) => {
    text = 'Another useful function';
    const result = text.toUpperCase();
    return result;
}
const toLowerCase = (text) => {
    text = 'This is a sentence!';
    const result = text.toLowerCase();
    return result;
}
const removeSpaces = (text) => {
    text = ' Rome wasn\'t built in a day ';
    const result = text.trim();
    return result;
}
const IsString = (text) => {
    text = 'Is this a string?';
    if (typeof text === 'string') {
        const result = true;
        return result;
    }
}

const getExtension = (text) => {
    text = 'images/photo01.jpg';
    const result = text.substring(text.length - 3);
    return result;
}

const countSpaces = (text) => {
    text = 'Sire open we have a big one!';
    var result = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) == ' ') {
            result++;
        }
    }
    return result;
}
const InverseString = (text) => {
    text = 'Après demain, à partir d\'aujourd\'hui?';
    const spl = text.split('');
    const rev = spl.reverse();
    const result = rev.join('');
    return result;
}

const power = (x, y) => {
    x = 2;
    y = 3;
    const result = Math.pow(x, y);
    return result;
}
const absoluteValue = (num) => {
    num = -5;
    const result = Math.abs(num);
    return result;
}
const absoluteValueArray = (array) => {
    array = [-5, -50, -25, -568];
    const result = array.map(Math.abs);
    return result;
}
const circleSurface = (radius) => {
    radius = 5;
    const result = Math.round(Math.PI * radius * radius);
    return result;
}
const hypothenuse = (ab, ac) => {
    ab = 5;
    ac = 8;
    const result = Math.hypot(ab, ac);
    return result;
}
const BMI = (weight, height) => {
    weight = 65 ;
    height = 1.75 ;
    const result = parseFloat((weight / (height * height)).toFixed(2));
    return result;
}

const createLanguagesArray = () => {
    var languages = ["Html","CSS","Java","PHP"];
    return languages;
}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}