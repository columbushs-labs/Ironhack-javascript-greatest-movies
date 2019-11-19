/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let newAr = array.concat();

    newAr.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        }
        else if (a.year < b.year) {
            return -1;
        }
        else if (a.year == b.year) {
            if (a.title > b.title) {
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
function howManyMovies(array) {
    let count = 0;
    array.filter(function (movies) {

        if (movies.director === "Steven Spielberg" &&
            movies.genre.includes("Drama") == true) {
            count++;
        }

    })
    return count;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {

    let newAr = array.map(function (movies) {
        return movies.title;
    });

    newAr.sort();

    return newAr.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {

    let avgRate = array.map(function (rate) {
        return rate.rate;
    })

    let rates = avgRate.reduce(function (sum, num) {
        if(avgRate !== false){
            return sum + num;
            
        }
        else if (avgRate == '') {
            return sum + 0;
        }
    }, 0);

    let round = rates / array.length;
    round = +round.toFixed(2);

    if (array.length == 0) {
        return 0;
    }

    return round;
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
 let dramaMovies = array.filter(function(movie) {
    if (movie.genre.indexOf('Drama') !== -1) {
        return true;
    }
    return false
 });

 if (dramaMovies.length == 0 ){
     return 0;
 }

 return (ratesAverage(dramaMovies));

}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let newAr = movies.concat();

    let hour = newAr.map (function (movie) {
        return ( movie.duration.substring(0,1));
    })

    hour.forEach(function (element) {
        return (hour * 60);
    })

    let minutes = newAr.map(function(movie){
        if (movie.duration.length == 0) {
            return 0;
        }
        if(movie.duration.length == 7) {
            return (movie.duration.substring(4,5));
        }

        else if (movie.duration.length == 8){
            return (movie.duration.substring(4,6));
        }
    })
        
        // add nums now
        



         

        return newAr;
    
    
    
    
}

//split, slice, substring














/*function turnHoursToMinutes(array) {
    let time = array.concat();

    let hour = time.map(function(movie){
        return Number(movie.duration.charAt(0));
    })

    let minutes = time.map(function(movie){
        if(movie.duration.length == 7) {
            return Number(movie.duration.charAt(4))
        }
        else if (movie.duration.length == 8){
            return Number(movie.duration.charAt(4)
             + movie.duration.charAt(5));
        }

    })
    
    hour.forEach(element => {
        return element * 60;
    });


    var durate = hour.map ( function(timeCom) {
        return Number(hour + minutes);
    })
    
    for (var i = 0; i > time; i++) {
        time.splice(i, 1, durate[i]);
    };
    
    return time;
}*/


// BONUS Iteration: Best yearly rate average - Best yearly rate average
