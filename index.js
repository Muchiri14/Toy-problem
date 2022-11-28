//Create a function that shows students grades

//Return grade of the student depending on their score
function grades(score) {
    if(score > 79) {
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
    else {
        return "E";
    }
}