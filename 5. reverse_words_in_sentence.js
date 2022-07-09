
// Reverse words in a sentence
// in-place

// "I am going to Delhi"

// "I ma gniog ot ihleD"

// walk in the string, whenever you see space or reach the end, reverse the word


/**
 * 
 * @param {string} sentence 
 */
function reverse_words(sentence) {
    // sentence = sentence.split('')

    sentence = sentence.split(' ')  // O(N)
    
    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        word = word.split(''); // O(word's length)
        reverse_string(word);  // O(word's length)
        word = word.join('')

        sentence[i] = word;
    } // O ( m words * each word's length ) = O(N)

    return sentence.join(' '); // O(N)

}

let sentence = "I am going to Delhi";

console.log(reverse_words(sentence))


/**
 * @param {string} ch 
 * @returns 
 */
function checkWordBreak(ch) {
    if (ch === " ") {
        return true;
    } else if (ch === ".") {
        return true;
    }
    return false;
}

/**
 * @param {array} str 
 * @param {number} i 
 * @param {number} j 
 */
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