/* global $ */

$(document).ready(function() { // function ready onload
	var testNumLength = function(number) { //numlength var, number function 
		if (number.length > 9) { //for loop, inputs >9 inclusiveof 0
			totaldiv.text(number.substr(number.length - 9, 9));
			if (number.length > 15) {
				number = "";
				totaldiv.text("Err");
			}
		}
	};
	var number = ""; //current number must be variable not fixed
	var newnumber = ""; // num being entered must be variable too
	var operator = ""; //must also be variable to include all 4! +, -, /, and *.
	var totaldiv = $("#total"); // runnning count in totaldiv
	totaldiv.text("0");
	$("#numbers a").not("#clear,#clearall").click(function() {
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
	});
	$("#clear,#clearall").click(function() { //function to clear and clear all - set to null ""
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
	});
	$("#operators a").not("#equals").click(function() {
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
	});
	//Add your last .click() here!
	$("#equals").click(function() { //onclick function runs the calc inputs
		if (operator === "+") {
			number = (parseInt(number, 10) + parseInt(newnumber, 10)).toString(10);
		} else if (operator === "-") {
			number = (parseInt(newnumber, 10) - parseInt(number, 10)).toString(10);
		} else if (operator === "*") {
			number = (parseInt(newnumber, 10) * parseInt(number, 10)).toString(10);
		} else if (operator === "/") {
			number = (parseInt(newnumber, 10) / parseInt(number, 10)).toString(10);
		}
		totaldiv.text(number);
		testNumLength(number);
		number = "";
		newnumber = "";
	});
});
/*help me JS, you're my only hope!! Just saw the LAST JEDI!!

parseInt to string for each operator? No scuts here?



/*               |||      |||    
               | |  __  | |
|-|_____-----/   |_|  |_|   \-----_____|-|
|_|_________{   }|  (^) |{  }__________|_|  
 ||          |_| |   ^  | |_|          ||  
 |              \|  /\  |/              |  
 |               \ |--| /               |    
 =               \ |__| /               =    
 +               \      /               +
                  \    /    
                  \    /    
                   \  /
                   \  /
                  
                   \  /
                   \  /    
                   \  /
                    \/
                    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
                    https://www.codecademy.com/en/forum_questions/505814cfcb744300020146e3
                    .*/