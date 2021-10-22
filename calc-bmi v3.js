function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    bmi = Math.round(bmi);
    var i1 = "Your BMI is " + bmi + ", so you are underweight.";
    var i2 = "Your BMI is " + bmi + ", so you have a normal weight.";
    var i3 = "Your BMI is " + bmi + ", so you are overweight.";
    
   if (bmi < 18.5) {
       var interpretation = i1;
    }
      
   if (bmi >= 18.5 && bmi <= 24.9) {
       var interpretation = i2;
    }    

    if (bmi > 24.9) {
        var interpretation = i3;   
    }   

    return interpretation;
}

bmiCalculator(60, 1.8);