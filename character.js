// <!-- Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]
// Do this Problem using Arrow function. -->

let lower_char = char => {
    let new_char = "";
    let lower_alpha = "abcdefghijklmnopqrstuvwxyz";
    let upper_alpha = "ABCDEFGHIJKLMNOPQRSTUVWXZY";
    for (let k =0;k<upper_alpha.length;k++){
        if (upper_alpha[k]==char){
            new_char = lower_alpha[k];
            break;
        }
    }
    return new_char;
}


let lower_word = (word) => {
    let new_word = "";
    for (let j=0;j<word.length;j++){
        new_word +=lower_char(word[j])
    }
    return new_word;
}


let lower_arr = (arr) => {
    let newarr = [];
    for (let i =0;i<arr.length;i++){
        newarr.push(lower_word(arr[i]));
    }
    return newarr;
}


let input = ["MA", "SA", "I", "SCH", "OOL"];

console.log(lower_arr(input));