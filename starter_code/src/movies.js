/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let newAr = array.concat();

    newAr.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        }
        else if(a.year < b.year){
            return -1;
        }
        else if (a.year == b.year){
            if(a.title > b.title) {
                return 1;    
            }
        else {
            return -1
        }
    }
    });

    return newAr;

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies (array) {
    let count = 0;
    array.filter(function(movies) {
        if (movies.director == "Steven Spielberg"){
           if(movies.genre == "Drama"){
            count++;
        }
      }

    })
    return count;
}



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
