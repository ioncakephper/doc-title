

/**
 * The function takes a string and returns a new string with the first letter of each word capitalized,
 * except for certain connector words.
 * @param [source] - The input string that needs to be converted to title case.
 * @returns The function `toTitleCase` is returning a string that has been converted to title case.
 */
function toTitleCase(source = '') {
    let words = getWords(source)

    let resultWords = words.map((w, index, words) => {
        if (index === 0) 
            return toFirstUpperCase(w);

        if (index === (words.length - 1)) {
            return toFirstUpperCase(w);
        }

        return isConnector(w) ? w.toLowerCase() : toFirstUpperCase(w)
    })
    return resultWords.join(' ')
}

/**
 * The function takes a string and converts it to sentence case by capitalizing the first letter of the
 * first word and converting the rest of the words to lowercase.
 * @param [source] - The input string that needs to be converted to sentence case.
 * @returns The function `toSentenceCase` is returning a string in sentence case format, where the
 * first letter of the first word is capitalized and the rest of the words are in lowercase. The input
 * string is split into words using the `getWords` function, then each word is transformed using the
 * `toFirstUpperCase` function for the first word and `toLowerCase` for the rest of the words. Finally
 */
function toSentenceCase(source = '') {
    let words = getWords(source);
    let resultWords = words.map((w, index, words) => {
        if (index === 0) {
            return toFirstUpperCase(w)
        }
        return w.toLowerCase(w)
    })
    return resultWords.join(' ');
}

/**
 * The function takes a string and returns the same string with the first letter capitalized and the
 * rest in lowercase.
 * @param [source] - The source string that needs to be converted to first letter uppercase and the
 * rest of the letters in lowercase.
 * @returns The function `toFirstUpperCase` is returning a string with the first character in uppercase
 * and the rest of the characters in lowercase. If the `source` parameter is not provided or is an
 * empty string, the function will return an empty string.
 */
function toFirstUpperCase(source = '') {
    return source.slice(0,1).toUpperCase() + source.slice(1).toLowerCase()
}

/**
 * The function takes a string and returns an array of words by splitting the string at whitespace.
 * @param [source] - The source parameter is a string that represents the text from which we want to
 * extract words.
 * @returns The function `getWords` returns an array of words.
 */
function getWords(source = '') {
    return source.trim().split(/\s+/).map(w => w.trim());
}

const CONNECTOR_WORDS = "a, to, be, and, or, the, for, it, is, as, in"
    .trim()
    .split(',')
    .map(w => w.trim().toLowerCase()
)

/**
 * The function checks if a given word is a connector word or not.
 * @param source - The input string that needs to be checked if it is a connector word or not.
 * @returns The function `isConnector` is returning a boolean value. It returns `true` if the `source`
 * parameter is a connector word (a word that connects two clauses or phrases), and `false` otherwise.
 */
function isConnector(source) {
    source = source.trim().toLowerCase().trim();
    return source.length < 4 && !(["he", "she", "al"].includes(source))
    // return CONNECTOR_WORDS.includes(source)
}

module.exports = {
    toTitleCase,
    toSentenceCase,
}