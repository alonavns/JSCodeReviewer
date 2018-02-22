/**
 * @name 'getMaxProfit'
 * @type {function}
 * @param {array} - Array of Stock Prices of Yesterday
 * @returns {number} - Max Profit
 * @example - Input [10, 7, 5, 8, 11, 9] will returns Number 6
 */

const sampeInput = [10, 7, 5, 8, 11, 9];
const testMode = true;
var manualInput = [/* Manual Input */]

const input = testMode ? sampeInput : manualInput;

function getMaxProfit(stockPricesYesterday) {
  const stockPriceLen = stockPricesYesterday.length;

  if (stockPriceLen < 2) return 0; // Case less than 2 items
  if (
    stockPriceLen === 2
    && stockPricesYesterday[0] === stockPricesYesterday[1]
  ) return 0; // Case 2 items with same price

  let buy = stockPricesYesterday[0];
  let sell = stockPricesYesterday[1];
  let offset = 0;

  /**
   * @name 'getCurrentProfit'
   * @type {function}
   * @returns {number} - Current Profit
   */
  function getCurrentProfit() {
    const profit = sell - buy + offset;
    console.log([buy, sell, offset, profit].join(','));
    return profit;
  }

  for (let i = 2; i < stockPriceLen; i++) {
    const current = stockPricesYesterday[i];
    const currentProfit = getCurrentProfit();

    if (
      (current - buy > currentProfit)
      || (current - sell > currentProfit)
      || (current + offset > sell)
    ) {
      buy = Math.min(sell, buy);
      sell = current;
      offset = 0;
    } else if (current < buy) {
      offset = current - buy;
      buy = current;
    }
  }

  return getCurrentProfit();
}

console.log('Max Profit : ' + getMaxProfit(input));