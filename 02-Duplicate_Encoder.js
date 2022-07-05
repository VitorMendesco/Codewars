/*
-- DUPLICATE ENCODER --
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

- It should ignore case;
- Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// MY
function duplicateEncode(word) {
  // normalizing to ignore case and converting String to Array;
  arr = word.toLowerCase().split("");
  // verifyDuplication() compares the value and index params with the array above;
  function verifyDuplication(char, index) {
    for (const [i, value] of arr.entries()) {
      if (char === value && index !== i) {
        return false;
      }
    }
    return true;
  }
  // build the answer based at the above function
  let str = "";
  arr.forEach((char, index) => {
    str += verifyDuplication(char, index) ? "(" : ")";
  });

  return str;
}

// OPTIMIZED
function optimized(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

// ULTRA
function ultra(word) {
  word = word.toLowerCase();
  return word.replace(/./g, (m) =>
    word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  );
}

// TESTS
console.log("'din':", duplicateEncode("din"));
console.log("'recede':", duplicateEncode("recede"));
console.log("'Success':", duplicateEncode("Success"));
console.log("'(( @':", duplicateEncode("(( @"));
