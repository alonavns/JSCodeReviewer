// Multi-line comments start with /* and end with */.

/**
 * if function is to get result from input then please use `get` prefix.
 * e.g getHighestProductOf3
 * so, there couldn't be any crashes on naming.
 * e.g [function highestProductOf3] and [var highestProductOf3]
 */

function highestProductOf3(arrayOfNumbers) {
    if (arrayOfNumbers.length < 3) {
        throw Error("Less than 3 items!");
    }

    // we're going to start at the 3rd item (at index 2)
    // so pre-populate highests and lowests based on the first 2 items.
    // we could also start these as null and check below if they're set
    // but this is arguably cleaner
    var highest = Math.max(arrayOfNumbers[0], arrayOfNumbers[1]);
    var lowest = Math.min(arrayOfNumbers[0], arrayOfNumbers[1]);

    var highestProductOf2 = arrayOfNumbers[0] * arrayOfNumbers[1];
    var lowestProductOf2 = arrayOfNumbers[0] * arrayOfNumbers[1];
    /**
     * Write code more clean
     * var highestProductOf2 = lowestProductOf2 = arrayOfNumbers[0] * arrayOfNumbers[1];
     * or just avoid repeat calculation
     * var lowestProductOf2 = highestProductOf2;
     */

    // except this one--we pre-populate it for the first *3* items.
    // this means in our first pass it'll check against itself, which is fine.
    var highestProductOf3 = arrayOfNumbers[0] * arrayOfNumbers[1] * arrayOfNumbers[2];
    /**
     * Instead use Number.NEGATIVE_INFINITY if i start with 2
     * var highestProductOf3 = Number.NEGATIVE_INFINITY;
     */

    // walk through items, starting at index 2
    for (var i = 2; i < arrayOfNumbers.length; ++i) { /** Why ++i instead of i++? */
        var current = arrayOfNumbers[i];

        // do we have a new highest product of 3?
        // it's either the current highest,
        // or the current times the highest product of two
        // or the current times the lowest product of two
        highestProductOf3 = Math.max(
            highestProductOf3,
            current * highestProductOf2,
            current * lowestProductOf2);
        /**
         * This is for Negative value? For this you can use 
         * highestProductOf3 = Math.max(highestProductOf3, current ? current * highestProductOf2 : current * lowestProductOf2);
         */

        // do we have a new highest product of two?
        highestProductOf2 = Math.max(
            highestProductOf2,
            current * highest,
            current * lowest);

        // do we have a new lowest product of two?
        lowestProductOf2 = Math.min(
            lowestProductOf2,
            current * highest,
            current * lowest);
        /**
         * Again reputation and negative case. Math.min or Math.max itself do comparision inside.
         * var currentLowest = current ? current * lowest : current * highest;
         * var currentHightest = current ? current * highest : current * lowest;
         * highestProductOf2 = Math.max(highestProductOf2, currentHightest);
         * lowestProductOf2 = Math.min(highestProductOf2, currentLowest);
         */

        // do we have a new highest?
        highest = Math.max(highest, current);

        // do we have a new lowest?
        lowest = Math.min(lowest, current);
    }

    return highestProductOf3;
}