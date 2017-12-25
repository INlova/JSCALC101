$(document).ready(function() {
			var testNumLength = function(number) {
				if (number.length > 9) {
					totaldiv.text(number.substr(number.length - 9, 9));
					if (number.length > 15) {
						number = "";
						totaldiv.text("Err");
					}
				}
			};
			var number = "";
			var newnumber = "";
			var operator = "";
			var totaldiv = $("#total");
			totaldiv.text("0");

//help me JS, you're my only hope!! Just saw the LAST JEDI!!



               |||      |||    
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
                   \  /
                    \/
