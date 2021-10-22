var tweet = prompt("Compose your tweet:");
var tweetMax140 = tweet.slice(0,140);
alert(tweetMax140);
alert("that is: " + tweetMax140.length + " characters.");