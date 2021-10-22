function whosPaying(names) {
 names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]; 

 var numberOfPeople = names.length;
 var randomNamePosition = Math.floor(Math.random() * numberOfPeople); 
 var personBuying = names[randomNamePosition];

 return names [randomNamePosition] + " is going to buy lunch today!";   
}