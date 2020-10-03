function getDayOfTheWeek(year, month ,day){    
    var remainder = year % 100;
    var s1 = Math.floor((remainder / 12));
    var s2 =Math.abs(remainder - (s1 * 12));
    var s3 = Math.floor(s2 / 4);
    var s4 = day; 
    var s5 = 0;


    if (month == 4 | month == 7) {
        month = 0;
    } else if (month == 1  | month == 10) {
        month = 1;
    }else if (month == 5) {
        month = 2;
    } else if (month == 8) {
        month = 3;
    }else if (month == 2 | month == 3 | month == 11){
        month = 4;
    }else if (month == 6){
        month = 5 ;
    }else if (month == 9 | month == 12){
        month = 6;
    }    
    if  (2100 > year && year > 2200 ) {
        s5 = 4
    }else if(year > 2000) {
        s5 = 6
    }else if (year >=1900) {
        s5 = 0
    }else if(year >= 1800) {
        s5 = 2
    }else if(year >=1700) {
        s5 = 4
    }else if(year >= 1600) {
        s5 = 6
    } else {
        s5 = 0
    }
    var result = ( parseInt(s1) + s2 + parseInt(s3) + s4 + month + s5) %7 
    if (result == 0) {
        result = ("Saturday")
    } else if (result == 1) {
        result = ("Sunday")
    } else if (result == 2) {
        result = ("Monday")
    } else if (result == 3) {
        result = ("Tuesday")
    } else if (result == 4) {
         result = ("Wednesday")
    } else if (result == 5) {
        result = ("Thursday")
    } else if (result == 6) {
        result = ("Friday")
    }
    return result;
}

function isLeapYear(year) {
    var leapYear 
    if (year%400 == 0){
        leapYear = true
    }
    else if (year%100 == 0){
        leapYear = false
    }
    else if (year%4 == 0) {
        leapYear = true
    }
    else {
        leapYear = false
    }
}


function makeCalendar() {
    var numDaysInMonth = [0,31,29,31,30,31,30,31,31,30,31,30,31];
    var daysInWeek = ['Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday','Monday','Tuesday',];
    var x = 0
    var y = -1

    for (var i = 0; i < numDaysInMonth.length;i++) {
        var y = y + 1;
        for(var j = 1; j<= numDaysInMonth[i];j++) {
            console.log(y + "-" + j + "-" + 2020 + " is a " + daysInWeek[x % daysInWeek.length]) ;
            var x = x + 1;
        }
    }
}

module.exports = {getDayOfTheWeek,makeCalendar,isLeapYear};