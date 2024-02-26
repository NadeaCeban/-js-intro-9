let weekend = !false;
let weather = 70;
let moviePerfect = false;

if(weekend) {
    if(weather > 70) {
        console.log('Outdoor concert');
    }
    else {
        console.log('Hackathon');
    }
}
else {
    if(moviePerfect) {
        console.log('Movie');
    }
    else if(weather > 70) {
        console.log('Golf');
    }
    else {
        console.log('GYM');
    }
}
