/**
 * The function takes a string and returns a new string with the first letter of each word capitalized,
 * except for certain connector words.
 * @param [source] - The input string that needs to be converted to title case.
 * @returns The function `toTitleCase` is returning a string that has been converted to title case.
 */
declare function toTitleCase(source?: string): string;

/**
 * The function takes a string and converts it to sentence case by capitalizing the first letter of the
 * first word and converting the rest of the words to lowercase.
 * @param [source] - The input string that needs to be converted to sentence case.
 * @returns The function `toSentenceCase` is returning a string in sentence case format, where the
 * first letter of the first word is capitalized and the rest of the words are in lowercase. The input
 * string is split into words using the `getWords` function, then each word is transformed using the
 * `toFirstUpperCase` function for the first word and `toLowerCase` for the rest of the words. Finally
 */
declare function toSentenceCase(source?: string): string;
