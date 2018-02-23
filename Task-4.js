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

const test = ['civic', 'ivicc', 'civil', 'livci']

function permutationPalindrome(str) {
  const len = str.length;
  let oddInfo = {};
  
  for (let i = 0; i < len; i++) {
    oddInfo[str[i]] ? delete oddInfo[str[i]] : oddInfo[str[i]] = true;
  }

  return Object.keys(oddInfo).length <= 1;
}

for (let i = 0; i < test.length; i++) {
  console.log(test[i] + ':' + permutationPalindrome(test[i]));
}