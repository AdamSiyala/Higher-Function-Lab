let getDayOfTheWeek = require("./three.js").getDayOfTheWeek;
let makeCalendar = require("./three.js").makeCalendar;
let isLeapYear = require("./.js").isLeapYear;
let readlineSync = require('readline-sync');
function makeCalendarForUser () {
    let calenderInput = readlineSync.question('Are you ready for the 2020 calendar? Enter "Ready": ' )
    if(calenderInput = "Ready") {
        makeCalendar()
    }

}
function getDayOfTheWeekForUserDate() {
    console.log('Now it is time to pull the day of the week from a random date that you enter!')
    let yearInput = readlineSync.question('Enter a year!: ')
    let monthInput = readlineSync.question('Enter a month!: ')
    let dayInput = readlineSync.question('Enter a day!: ')
    var result = getDayOfTheWeek(parseInt(yearInput),parseInt(monthInput),parseInt(dayInput))
    console.log(yearInput + "-" + monthInput + "-" + dayInput + " is a "+ result)
}

makeCalendarForUser()
getDayOfTheWeekForUserDate()