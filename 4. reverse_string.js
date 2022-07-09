
// Reverse the string in-place

function reverse_string(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        let c = str[i];
        str[i] = str[j]
        str[j] = c;

        i++;
        j--;
    }
}

let str = "ABCDE";
str = str.split('');
reverse_string(str);
str = str.join('')
console.log(str)