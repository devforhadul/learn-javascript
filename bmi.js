let fHeight = 5;
let iHeight = 11;
let height = (5*0.3048) + (11*0.0254);
let weight = 20;

let bmicalculate = weight / (height * height);
let bmi = bmicalculate.toFixed(2);

let result;
if( bmi < 18){
    result = "Your are underweight"
}
else if( bmi >= 18.5 && bmi <= 24.9){
    result = "You are normal"
}
else if( bmi >=25 && bmi <= 29.9){
    result = "You are Overweight"
}
else{
    result = "You are obese"
}

console.log("BMI is: "+bmi+"\n"+result)
