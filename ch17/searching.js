'use strict'

const input = "As I was going to Saint Ives";
//             0123456789

const re = /\w{3,}/ig; // match all words three letters or longer (case insensitive)

// starting with the string (input)
input.match(re); // ["was", "going", "Saint", "Ives"]
input.search(re); // 5 (the first three-letter word starts at index 5)

// starting with the regex (re)
re.test(input); // true (input contains at least one three-letter word)
re.exec(input); // ["was"] (first match)
re.exec(input); // ["going"] (exec "remembers" where it is)
re.exec(input); // ["Saint"]
re.exec(input); // ["Ives"]
re.exec(input); // null -- no more matches

// note that any of these methods can be used directly with a regex literal
input.match(/\w{3,}/ig);
input.search(/\w{3,}/ig);

/\w{3,}/ig.test(input);
/\w{3,}/ig.exec(input);
