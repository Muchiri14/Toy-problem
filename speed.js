// Create a function that is able to detect the speed of a car//
// Return the points in relation to the level of the speed//
function carSpeed (speed) {
    if (speed < 70) {
        return "Ok";
    }
    else if (speed > 70 && (speed - 70) % 5 == 0 && (speed - 70) / 5 <= 12) {
        let points = (speed - 70) / 5
        return 'Points: '+ points
    }
    else if ( (speed - 70) / 5 > 12 ) {
        return 'License suspended'
    }
}
console.log(carSpeed(133))
