//Create a function that shows students grades//

//Return grade of the student depending on their score//
function grades(score) {
    if(score > 79 && score<=100) {
        return "A";
    }
    else if (score >= 60 && score <= 79) {
        return "B";
    }
    else if (score >= 49 && score <= 59) {
        return "C";
    }
    else if (score >= 40 && score <= 49) {
        return "D";
    }
    else if(score >= 0 && score <= 40){
        return "E";
    }else return 'not valid mark'
}
console.log(grades(900))