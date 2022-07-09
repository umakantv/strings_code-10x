

// TODAY'S TOPIC - Using Javascript to solve string problems

/** 
 * Length of the longest substring without any repeating characters
 * 
 * ABCCDAEFFGC
 * 
 * substring - continuous part of the string - CDEF is a substring, A is also a substring
 * 
 * substrings can have repetitions, but in this problem we are interested in 
 * substrings which have no repeating characters
 * 
*/

/**
 * best_answer = 0; <- udpate after each iteration
 * 
 * start = -1        // starting point for current valid substring
 * 
 * last_position = {}
 * 
 * iterate over the string using i:
 *      c = string[i]
 *      last_occurence = last_position[c]
 * 
 *      start = max (start, last_occurence)
 * 
 *      best_answer = max (best_answer, i - start)
 * 
 *      last_position[c] = i
 * 
 */


/**
 * Time complexity: O( N )
 * @param {string} str 
 * @returns 
 */
function solve(str) {
    const n = str.length;

    let best_answer = 0;
    let start = -1;

    let last_pos = {}

    for (let i = 0; i < n; i++) {
        const c = str[i];

        last_occ = last_pos[c];  // O (1)

        if (last_occ !== undefined) {
            start = Math.max(start, last_occ); // finding the starting point for curent valid substring
        }

        let curent_length = i - start;

        best_answer = Math.max( best_answer, curent_length);

        last_pos[c] = i;
    }

    return best_answer;
}

console.log(solve("ABCCDEFFGC"))