 
 var wateronaliter = 800;
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
        var liters = document.getElementById('liters').innerHTML;
        console.log("liters: {0}", liters);
        console.log("before calculation lemons: " + lemonsonaliter);
        console.log("before calculation water: " + wateronaliter);
        console.log("before calculation sugar: " + sugaronaliter);
        var lemonsneeded = (lemonsonaliter * liters);
        var waterneeded = (wateronaliter * liters);
        var sugarneeded =  sugaronaliter * liters; 
        console.log("after calculation lemons: " + lemonsneeded);
        console.log("after calculation water: " + waterneeded);
        console.log("after calculation sugar: " + sugarneeded);
        document.getElementById('water').innerHTML = waterneeded;
        document.getElementById('sugar').innerHTML = sugarneeded;
        document.getElementById('lemons').innerHTML = lemonsneeded;
 }

 
//function lemonadeCalculator (){
// get inputs

// mathemetical fucntion 

// updated the element 






