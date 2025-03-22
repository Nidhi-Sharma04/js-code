const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
//map()

// filter()

// map- Creates a new array with the same length as the original array, but with each element transformed by the callback function.

// filtrt- Creates a new array with only the elements that pass the conditions implemented by the callback function.

//map- Used when you want to transform each element in an array

// filter- Used when you want to select only certain elements that meet a specific condition.

// map- Returns a new array with the same length as the original array.

// filter- Returns a new array with a length that is equal to or less than the original array.