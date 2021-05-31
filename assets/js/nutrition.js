 
 /*var wateronaliter = 800;
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
 }*/

 
const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');


buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});


function calculate(event) {
  
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    
    if (display.value !== '') {
      
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    
    display.value = '';
  } else {
    
    display.value += clickedButtonValue;
  }
}

