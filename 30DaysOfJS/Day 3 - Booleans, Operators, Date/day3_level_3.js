// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYYY-MM-DD HH:mm eg. 20120-01-02 07:05

let date = new Date();
let year = date.getFullYear().toString();
let month = (date.getMonth() + 1).toString();
let day = date.getDate().toString();
let hour = date.getHours().toString();
let minute = date.getMinutes().toString();

if(month < 10) {
    month = '0' + month;
}
if(day < 10) {
    day = '0' + day;
}
if(hour < 10) {
    hour = '0' + hour
}
if(minute < 10) {
    minute = '0' + minute
}
console.log(`${year}-${month}-${day} ${hour}:${month}`);