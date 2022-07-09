

let text = "First things first \
I'ma say all the words inside my head \
I'm fired up and tired of the way that things have been, oh-ooh \
The way that things have been, oh-ooh \
Second thing second \
Don't you tell me what you think that I could be \
I'm the one at the sail, I'm the master of my sea, oh-ooh \
The master of my sea, oh-ooh \
I was broken from a young age \
Taking my sulking to the masses \
Writing my poems for the few \
That look at me, took to me, shook to me, feeling me \
Singing from heartache from the pain \
Taking my message from the veins \
Speaking my lesson from the brain \
Seeing the beauty through the..."

let phrase = "things"

// Rabin-Karp Algorithm

/**
 * Return all indices in `text` where `phrase` occurs at
 * @param {string} text - Text that we need to search through
 * @param {string} phrase - Text that we are searching for
 */
function searchIndices (text, phrase) {

    let indices = [];

    let n = text.length;
    let m = phrase.length;

    let phrase_sum = 0;
    for (let i = 0; i < m; i++) {
        phrase_sum += phrase.charCodeAt(i);
    }

    console.log("Phase Sum", phrase_sum);

    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += text.charCodeAt(i);

        if (i >= m) {
            sum -= text.charCodeAt(i - m);
        }

        if (sum === phrase_sum) {
            let start_position = i - m + 1;
            
            // check for exact match
            
            let candidate = text.substring(start_position, i + 1);
            console.log("Candidate found at position", start_position, candidate);

            if (candidate === phrase) {
                indices.push(start_position);
            }
        }
    }

    return indices;

}

console.log(searchIndices(text, phrase))