
// Find all permutation of a string

// "ABCD" -> _ _ _ _ => n! => 4 x 3 x 2 x 1 = 24 permutation

// recursive approach

// sudo code

/**
 * permute(str, position):
 *      if position == last position of the string to be permuted
 *          we have reached the end of the recursion
 *      
 *      fix each character one by one after position, permute the remaining string
 *      
 *      for range i to last:
 *          str[position] = fix it one by one for str[i]
 *          permute(str, position + 1)
 */


function swap(str, i, j) {
    str = str.split('');

    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;

    return str.join('');
}

function getnSpaces(n) {
    let a = '';
    for (let i = 0; i < n; i++) {
        a += ' ';
    }
    return a;
}

function permutation(str, position) {
    
    const n = str.length;
    
    // base case
    if (position === n - 1) {
        // console.log("Reached the last position", position)
        console.log(str);
    }

    for (let i = position; i < n; i++) {
        str = swap(str, position, i);

        console.log(getnSpaces(position), str);

        permutation(str, position + 1);
        // catch here

    }

}

permutation("ABCD", 0);