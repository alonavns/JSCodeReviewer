/**
 * In JavaScript Array works as a Object. Actually there's no type of Array in JavaScript.
 * As you can simply test is by {console.log(type of [1, 2, 3])}
 */
console.log(typeof ([1, 2, 3])); // [Console] - "object"

/**
 * Array itself Object, and it provides you with Array functionalities like other languages
 * Check following code for some clarification
 */
var ary = [];
ary[10.5] = 10.5;                       // [10.5: 10.5]
console.log(ary.length);                // [Console] - 0
console.log(Object.keys(ary));          // [Console] - ["10.5"]
ary.pop();                              // Nothing will happen
ary.push(11);                           // [11, 10.5: 10.5]
console.log(Object.keys(ary));          // [Console] - ["0", "10.5"]
console.log(ary.length);                // [Console] - 1
ary.length = 5;                         // [11, empty × 4, 10.5: 10.5]
console.log(ary.length);                // [Console] - 5
ary.push(6);                            // [11, empty × 4, 6, 10.5: 10.5]
ary.pop();                              // [11, empty × 4, 10.5: 10.5]
ary.unshift(1);                         // [1, 11, empty × 4, 10.5: 10.5]
ary.shift(1);                           // [11, empty × 4, 10.5: 10.5]