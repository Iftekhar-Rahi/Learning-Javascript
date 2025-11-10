const orderID=12345;
var userName="JohnDoe";
let mailStatus="sent";
let email;
let anotherVar=null

// orderID = 2 // not allowed

console.log("Order ID:", orderID);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([orderID, userName, mailStatus, email]);
email="ra@example.com"
console.table({orderID, userName, mailStatus, email});