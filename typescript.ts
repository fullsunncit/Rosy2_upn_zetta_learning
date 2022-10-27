function combination(text: string, firstIndex: number, secndIndex: number): string{
    return text.slice(firstIndex, secondIndex); 
}
    
const text ='Learning Typescript is different than Javascript';
const firstIndex = 9;
const secondIndex = 19;
    
console.log(combination(text, firstIndex, secondIndex));