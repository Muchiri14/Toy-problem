// Create a function that is able to detect the speed of a car//
// Return the points in relation to the level of the speed//
function carSpeed (speed) {
    if (speed < 70) {
        return "Ok";
    }
    else if (speed > 70) {
        
        let points=0;

        points = (speed - 70) / 5

        if(points<=12){

            return 'Points: '+ points

        }else return 'License suspended'+ points
        
    }
    

}
console.log(carSpeed(800))
