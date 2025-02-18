/*
An abecedarian word is a word whose letters appear in alphabetical order.
In other words, each letter in the word comes after the previous letter.
Note: All words will consist of lowercase letters only.

Examples:
 - "almost" is abecedarian (a < l < m < o < s < t)
 - "abc" is abecedarian
 - "acb" is not

Task:
 Given a list of words, find the longest abecedarian word.
 If there are ties, return the word that appears first.
 If no abecedarian word exists, return an empty string.
*/

function findLongestAbecedarian(words) {
    // TODO: Implementation
  }
  
  
  /* Tests */
  
  let input = ["almost", "abc", "bill", "billy", "ace", "hello"];
  test(findLongestAbecedarian(input), 'almost');
  
  input = ["ace", "bdf", "ceg", "xyz", "abz"];
  // All words here are abecedarian, so return the first one ("ace")
  test(findLongestAbecedarian(input), 'ace');
  
  input = ["fed", "cba", "zyx"];
  // None of these words are abecedarian, so return an empty string
  test(findLongestAbecedarian(input), '');
  
  function test(value, expected) {
    if (value === expected) {
      console.log(value, '- PASS');
    } else {
      console.log(value, '- FAIL! Expected', expected);
    }
  }
  