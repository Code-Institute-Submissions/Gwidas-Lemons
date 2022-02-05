

/*accordion jq*/
(function () {
    "use strict";
    var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
      return function (arg) {
        if (this.length > 1) {
          this.each(function () {
            var $this = $(this);
  
            if (!$this.data(ident)) {
              $this.data(ident, func($this, arg));
            }
          });
  
          return this;
        } else if (this.length === 1) {
          if (!this.data(ident)) {
            this.data(ident, func(this, arg));
          }
  
          return this.data(ident);
        }
      };
    });
  })();
  
  (function () {
    "use strict";
    function Accordion($roots) {
      var element = $roots;
      var accordion = $roots.first("[data-accordion]");
      var accordion_target = $roots.find("[data-accordion-item]");
      var accordion_content = $roots.find("[data-accordion-content]");
      $(accordion_target).click(function () {
        $(this).toggleClass("opened");
        $(this).find(accordion_content).slideToggle("slow");
        $(this).siblings().find(accordion_content).slideUp("slow");
        $(this).siblings().removeClass("opened");
      });
    }
    $.fn.Accordion = jQueryPlugin("Accordion", Accordion);
    $("[data-accordion]").Accordion();
  
    function Ripple_Button($root) {
      var elements = $root;
      var ripple_btn = $root.first("[data-ripple]");
      $(ripple_btn).on("click", function (event) {
        event.preventDefault();
        var $div = $("<div/>"),
          btnOffset = ripple_btn.offset(),
          xPos = event.pageX - btnOffset.left,
          yPos = event.pageY - btnOffset.top;
        $div.addClass("ripple-effect");
        $div.css({
          height: ripple_btn.height(),
          width: ripple_btn.height(),
          top: yPos - $div.height() / 2,
          left: xPos - $div.width() / 2,
          background: ripple_btn.data("ripple") || "#ffffff26"
        });
        ripple_btn.append($div);
  
        window.setTimeout(function () {
          $div.remove();
        }, 2000);
      });
    }
    $.fn.Ripple_Button = jQueryPlugin("Ripple_Button", Ripple_Button);
    $("[data-ripple]").Ripple_Button();
  })();
  
// BMI Calculator
  function calculate(){
    
      var bmi;
      var result = document.getElementById("result");
    
      var height = parseInt(document.getElementById("height").value);
    
      var weight = parseInt(document.getElementById("weight").value);
    
    
      document.getElementById("weight-val").textContent = weight + " kg";
      document.getElementById("height-val").textContent = height + " cm";
    
  
      bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    
      result.textContent = bmi;
  
    
    
      if(bmi < 18.5){
          category = "Underweight";
          result.style.color = "#ffc44d";
      }
    
    
      else if( bmi >= 18.5 && bmi <= 24.9 ){
          category = "Normal Weight";
          result.style.color = "#0be881";
      }
    
    
      else if( bmi >= 25 && bmi <= 29.9 ){
          category = "Overweight";
          result.style.color = "#ff884d";
      }
    
    
      else{
          category = "Obese";
          result.style.color = "#ff5e57";
      }
   
      document.getElementById("category").textContent = category;
  }