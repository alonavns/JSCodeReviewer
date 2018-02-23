/**
 * [Experience] : 4 years
 * [Suggestion] : We should use ES6 features for our JavaScript development.
 */

/**
 * ES6 let you get JavaScript skills while preparing and updating you to write modern JavaScript.

    ES6 Easy Wins - New Variables, Scoping and Template Strings
    New Language Features — Arrow Functions, Destructuring
    New Iterables and Looping over data
    What the heck those ...three ...little ...dots actually do
    How to structure your JavaScript with Modules and NPM
    Advanced Classes, Proxies, Generators, Sets and Maps
    How to write clean and consistent JavaScript with ESLint
    Proper tooling + bundling setup with Webpack
    + So much more
 */

/**
 * https://www.interviewcake.com/question/javascript/js-scope
 */

var text = 'outside';
function logIt() {
  console.log(text); // [Console] - "undefined"
  let text = 'inside'; // if we comment this line then [Console] - "outside"
};
logIt();

/**
 * https://www.interviewcake.com/question/javascript/permutation-palindrome
 */

var test = ['civic', 'ivicc', 'civil', 'livci']

function permutationPalindrome(str) {
  const len = str.length;
  let reputation = {};
  
  for (let i = 0; i < len; i++) {
    reputation[str[i]] = reputation[str[i]] ? reputation[str[i]] + 1 : 1;
  }

  let oddCount = 0;
  for (let key in reputation) {
    if (reputation[key] % 2 === 1) {
      oddCount ++;
      if (oddCount > 2) return false;
    }
  }
  
  return true;
}

for (let i = 0; i < test.length; i++) {
  console.log(test[i] + ':' + permutationPalindrome(test[i]));
}