type combinable = (number | string)[]

function textJoiner(texts: combinable): string {
    let result: string = '';
    texts.forEach((text) => {
        result += text + " ";
    });
    return result;
}

const text1 = [1, 'data', '3', 'result'];
const text2 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(textJoiner(text1));
console.log(textJoiner(text2));