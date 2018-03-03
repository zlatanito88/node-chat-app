// Jan 1st 1970 00:00:00 am 
// 1000 (ms) -> Jan 1st 1970 00:00:01 am

var moment = require('moment');

var date = moment();
date.add(1, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

var createdAt = 123;
var date = moment(createdAt);

// timestamp
var timestamp = moment().valueOf();

// 6:01 am
// console.log(moment().format('h:mm a'));
