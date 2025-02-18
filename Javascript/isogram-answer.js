/*
An insogram is a word where all letters are different.

Examples:
 - "files" is an insogram
 - "test" is not an insogram ("there are two 't' s)

 Task
  Given a list of words, find the longest isogram in that list.
*/


function findLongestIsogram(words){
    //TODO: Implementation  
    
}
    
    
    /* Test */
    
    let input = ["toothbrush", "belief", "bananas", "teamwork", "cherries"];
    test(findLongestIsogram(input),'teamwork');
    
    input = ["hollow", "political", "bizarre", "righteous", "palindromes"];
    test(findLongestIsogram(input),'teamwork');
    
    input = ["a", "cry", "documentary", "uncopyrightable", "amidextrously"];
    test(findLongestIsogram(input),'uncopyrightable');
    
    function test(value, expected){
      if (value === expected){
        console.log(value, '- PASS')
      }
      else{
        console.log(value, '- FAIL! Expected', expected)
      }
    
    
    }
    
    
    
    
    
    
    