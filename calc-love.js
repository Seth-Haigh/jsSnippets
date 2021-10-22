var name1 = prompt("What is the first person's name? ");
var name2 = prompt ("What is the second name? ");
var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);
alert(name1 +" and " + name2 + " your love score is: " + loveScore + "%");
