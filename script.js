const currentYear = new Date().getFullYear();
const year = document.getElementById('currentYear');
year.textContent = currentYear; // Updates the year in About Me paragraph.

const currentMonthNumber = new Date().getMonth();
let currentMonth = '';
const fullDate = document.getElementById('date');
const currentDay = new Date().getDate();
let daySuffix = '';

switch (currentMonthNumber) {
    case 0:
        currentMonth = 'January';
        break;
    case 1:
        currentMonth = 'February';
        break;
    case 2:
        currentMonth = 'March';
        break;
    case 3:
        currentMonth = 'April';
        break;
    case 4:
        currentMonth = 'May';
        break;
    case 5:
        currentMonth = 'June';
        break;
    case 6:
        currentMonth = 'July';
        break;
    case 7:
        currentMonth = 'August';
        break;
    case 8:
        currentMonth = 'September';
        break;
    case 9:
        currentMonth = 'October';
        break;
    case 10:
        currentMonth = 'November';
        break;
    case 11:
        currentMonth = 'December';
        break;
    }

switch (currentDay) {
    case 1:
        daySuffix = 'st';
        break;
    case 2:
        daySuffix = 'nd';
        break;
    case 3:
        daySuffix = 'rd';
        break;
    case 31:
        daySuffix = 'st';
        break;
    default:
        daySuffix = 'th';
        break;
}

fullDate.textContent = `${currentMonth} ${currentDay}${daySuffix}, ${currentYear}`;
