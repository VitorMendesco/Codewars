/*
-- YOUR ORDER, PLEASE
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

// MY
function order(words) {
  words = words.trimStart().trimEnd().split(" ");
  let answer = "";

  // verify if the parameter was empty or not;
  if (words != "") {
    let arr = [];
    let num = 1;
    let cont = false;

    // run until the last number and push in order to the new array created above;
    do {
      cont = false;
      words.forEach((word) => {
        if (word.indexOf(num.toString()) != -1) {
          arr.push(word);
          cont = true;
        }
      });
      num++;
    } while (cont == true);

    // organize the string answer with whitespaces;
    answer = arr.join(" ");
  } else {
    answer = "*empty_string";
  }
  return answer;
}

// ULTRA OPTIMIZED
function ultraOptimized(words){
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  } 

// TESTS
console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
