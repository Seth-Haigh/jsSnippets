var name1 = prompt("What is the first person's name? ");
var name2 = prompt ("What is the second name? ");
var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
console.log(loveScore);

if (loveScore > 70) {
    alert(name1 +" and " + name2 + " your love score is: " + loveScore + "%. " + "You love each other like Kanye loves Kanye! ");
}

if (loveScore > 30 && loveScore <= 70) {
    alert(name1 +" and " + name2 + " your love score is: " + loveScore + "%. " + "Meh. It might work. ");
}

if (loveScore <= 30) {
    alert(name1 +" and " + name2 + " your love score is: " + loveScore + "%. " + "You love each other like oil and water. Time to shake it up! ");
}