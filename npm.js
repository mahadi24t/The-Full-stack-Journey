var moment = require('moment');
var unique = require('uniq');
var myList = [1,2,1,2,2,1,4,4,4,4,4,4,5,5,5,5,5,5,5,5,,6,6,6,6,6,7,7,7,7,7,8]
var myDate = new Date();
var myCoolDate = moment(myDate).format("LL");
console.log(myCoolDate);


var myuniqueList = unique(myList);
console.log(myuniqueList);