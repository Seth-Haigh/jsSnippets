var message = prompt("Compose your message: ");
// var messageCount = message.length;
// alert ("You have written " + messageCount + " characters, you have " + (140 - messageCount) + " characters remaining.");
var messageUnder140 = message.slice(0,140);
alert ("Your message is: " + messageUnder140);