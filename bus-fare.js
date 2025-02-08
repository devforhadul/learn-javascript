let age = 17;
let busfare = 800;
if( age < 10 ){
    busfare = "Free";
    
}
else if( age <= 18 ){
    discount = busfare *50 / 100;
    busfare -= discount;
}
else if( age >= 60){
    discount = busfare *15/100;
    busfare -= discount; 
}
else{
    busfare = 800;
}
console.log("Your tota BUS fair is: "+busfare);