function isLeap(year) {
    var notLeap = "Not leap year."
    var leapYear = "Leap year."

    if (year % 4 === 0 && year % 100 !== 0) {
        var answer = leapYear;
    } else {var anser = notLeap;}

    if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        var answer = leapYear;
    }
    
    if (year % 4 === 0 && year % 100 === 0 && year % 400 !== 0) {
        var answer = notLeap;
    }
    

    if (year % 4 !== 0) {
        var answer = notLeap;
    }

    return answer;
}

isLeap(2001)