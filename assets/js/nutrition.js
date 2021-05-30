 
 var wateronaliter = 800;
 var lemonsonaliter = 13;
 var sugaronaliter = 8;
 
 function lemonade (){
        var liters = parseInt(document.getElementById('liters'));
        var lemonsneeded = lemonsonaliter * liters
        var waterneeded = wateronaliter * liters
        var sugarneeded = sugaronaliter * liters 
        document.getElementById('water').innerHTML = waterneeded;
        document.getElementById('sugar').innerHTML = sugarneeded;
        document.getElementById('lemons').innerHTML = lemonsneeded;
 }