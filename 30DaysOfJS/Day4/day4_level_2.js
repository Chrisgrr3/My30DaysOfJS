// 1. Write a code which can give grades to students according to theirs scores:
    // 80-100, A
    // 70-89, B
    // 60-69, C
    // 50-59, D
    // 0-49, F

function grade(score) {
    switch(true) {
        case 90 <= score && score <= 100:
            console.log('A')
            break;
        case 80 <= score && score <= 89:
            console.log('B')
            break;
        case 70 <= score && score <= 79:
            console.log('C')
            break;
        case 60 <= score && score <= 69:
            console.log('D')
            break;
        case 0 <= score && score <= 59:
            console.log('F')
            break;
        default:
            console.log('You did not input a number between 0 and 100.')
    }
}
grade(90);
grade(80);
grade(70);
grade(60);
grade(50);
grade('hello');
grade(-10);
grade(105);


// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    // September, October or November, the season is Autumn.
    // December, January or February, the season is Winter.
    // March, April or May, the season is Spring
    // June, July or August, the season is Summer

function season() {
    let month = prompt('What is the month?');
    switch(true) {
        case month == 'September' || month == 'October' || month =='November':
            alert('It is Autumn.')
            break;
        case month == 'December' || month == 'January' || month == 'February':
            alert('It is Winter.')
            break;
        case month == 'March' || month == 'April' || month == 'May':
            alert('It is Spring.')
            break;
        case month == 'June' || month == 'July' || month == 'August':
            alert('It is Summer.')
            break;
        default:
            alert('You did not input a month.')
    }
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
    // What is the day  today? Saturday
    // Saturday is a weekend.

    // What is the day today? saturDaY
    // Saturday is a weekend.

    // What is the day today? Friday
    // Friday is a working day.

    // What is the day today? FrIDAy
    // Friday is a working day.

function isWorkday() {
    let day = prompt('What is the day today?').toLowerCase();
    let cap = day.charAt(0).toUpperCase() + day.slice(1,day.length);
    switch(true) {
        case cap == 'Saturday' || cap == 'Sunday':
            alert(`${cap} is a weekend day.`)
            break;
        case cap == 'Monday' || cap == 'Tuesday' || cap == 'Wednesday' || cap == 'Thursday' || cap == 'Friday':
            alert(`${cap} is a working day.`)
            break;
        default:
            alert('You did not input a day of the week. Please check your spelling and try again.')
    }
}
