 
 var wateronaliter = 0.8;
 var lemonsonaliter = 13;
 
 
 function lemonade (sweetness){
        
        if (sweetness == "Mild sweet"){
          var sugaronaliter = 8;
          console.log(sugaronaliter)
        }
        if (sweetness == "Medium sweet") {
          var sugaronaliter = 12; 
          console.log(sugaronaliter)
        }
        if (sweetness == "Very sweet"){
          var sugaronaliter = 16;
          console.log(sugaronaliter)

        }
        var liters = document.getElementById('liters').value;
        var lemonsneeded = (lemonsonaliter * liters);
        var waterneeded = (wateronaliter * liters);
        var sugarneeded =  sugaronaliter * liters; 
        document.getElementById('water').innerHTML = waterneeded;
        document.getElementById('sugar').innerHTML = sugarneeded;
        document.getElementById('lemons').innerHTML = lemonsneeded;
 }

 
//function lemonadeCalculator (){
// get inputs

// mathemetical fucntion 

// updated the element 






