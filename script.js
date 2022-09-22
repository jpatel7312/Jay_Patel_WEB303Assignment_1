/*
	WEB 303 Assignment 1 - jQuery
	{Your Name Here}
*/

$(document).ready(function(){
  	
	var calculate = function () {
	var netSpend;
	var salary = parseInt($('#yearly-salary').val());
	var percentage = parseInt($('#percent').val());
	if (isNaN(salary) || isNaN(percentage)) {
    	$('#amount').text('$0');
  	} else {          
    	netSpend = (salary * percentage )/ 100; 
  		$("#amount").text("$"+netSpend.toFixed(2));
  }
}

  $("input").keyup(function(){
  	calculate(); 	
});

});

