function reverseString(str){
// Convert the string to lowercase and remove non-alphanumeric characters
const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
if(str.length < 1){
    return [];
}else {
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

}

console.log(reverseString('Akhil is sexy'));