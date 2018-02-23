const input = [10, 7, 5, 8, 11, 9];

function getMaxProfit(stockPricesYesterday) {
  const priceLen = stockPricesYesterday.length;

  if (priceLen < 2) {
    throw new Error('Getting a profit requires at least 2 prices');
  }

  // Initialize with first 2 prices.
  let minPrice = Math.min(stockPricesYesterday[0], stockPricesYesterday[1]);
  let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  // start at 3rd item, becase we already did for first 2 prices
  for (let i = 2; i < priceLen; i++) {
    const currentPrice = stockPricesYesterday[i];

    // see what our profit would be if we bought at the
    // min price and sold at the current price
    const potentialProfit = currentPrice - minPrice;

    // update maxProfit if we can do better
    potentialProfit > maxProfit ? maxProfit = potentialProfit : null;

    // update minPrice so it's always
    // the lowest price we've seen so far
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

// Test code
console.log(getMaxProfit(input));