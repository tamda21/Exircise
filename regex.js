// Assignment REGEX from  134 to 146
//  EX1 :
// let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
// let ipReg =/\d{4}:\w{2}\d(:\d{4})+/ig;
// console.log(ipReg.test(ip))
/////////////////////////////////////////////////////////////////////////////////
// EX2 :
// let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
// let specialReg = /Os\d*O/ig;
// console.log(specialNames.match(specialReg) );
//////////////////////////////////////////////////////////////////////
// EX3 :
// let phone = "+(995)-123 (4567)";
// let phoneReg =/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/ig;
// console.log(phoneReg.test(phone));
///////////////////////////////////////////////////////////////////
// EX5 :
// let date1 = "25/10/1982";
// let date2 = "25 - 10 - 1982";
// let date3 = "25 10 1982";
// let date4 = "25 10 82";

// let re = /\d{2}(\/| - | )\d{2}(\/| - | )\d{2,4}/g; 
// console.log(date1.match(re));
// console.log(date2.match(re));
// console.log(date3.match(re));
// console.log(date4.match(re));
// EX6 :

// let url1 = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org';
// let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// let re = /(https?:\/\/)?(www.)?\w+.\w{3}/g;
// console.log(url1.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));