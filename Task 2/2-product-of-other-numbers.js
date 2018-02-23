const input = [1, 7, 3, 4];

function getProductsOfAllIntsExceptAtIndex(intArray) {
  const arrayLen = intArray.length;

  if (arrayLen < 2) {
    throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
  }

  let productsOfAllIntsExceptAtIndex = [1];

  // for each integer, we find the product of all the integers
  // before it, storing the total product so far each time
  let productSoFar = intArray[0];
  for (let i = 1; i < arrayLen; i++) {
    productsOfAllIntsExceptAtIndex.push(productSoFar);
    productSoFar *= intArray[i];
  }

  // for each integer, we find the product of all the integers
  // after it. since each index in products already has the
  // product of all the integers before it, now we're storing
  // the total product of all other integers
  productSoFar = intArray[arrayLen - 1];
  for (let j = arrayLen - 2; j >= 0; j--) {
    productsOfAllIntsExceptAtIndex[j] *= productSoFar;
    productSoFar *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}

// Test code
console.log(getProductsOfAllIntsExceptAtIndex(input));