

// Whether the provided string is a palindrome

// Palindrome: When you reverse the string, it is same as the original string
// In-place: you can't copy the string

/**
 * 
 * @param {string} str 
 */
function checkPalindrome(str) {

    // let rts = str.split('').reverse().join('');

    let i = 0;
    let j = str.length - 1;

    while (i < j) {

        if (str[i] != str[j]) return false;
        i++;
        j--;
    }

    return true;
    
}

let str = "ABCCBA"
console.log(checkPalindrome(str))
