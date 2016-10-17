// $(document).ready(function() {
// 	var add = function(number1, number2) {
// 	return number1 + number2;
// 	};
// 	var subtract = function(number1, number2) {
// 		return number1 - number2;
// 	}
// 	var divide = function(number1, number2) {
// 		return number1 / number2;
// 	}
// 	var multiply = function(number1, number2) {
// 		return number1 * number2;
// 	}
//
// 	var number1 = parseInt(prompt ("Enter a number:"));
// 	var number2 = parseInt(prompt ("Enter another number:"));
// 	var result = divide(number1, number2);
// 	alert(result);
//
// });

$(document).ready(function() {
	$("#0").click(function(){
		oldVal=$("#value").text();
		if(oldVal==="0")
			$("#value").text("0");
		else{
			newVal="0";
			$("#value").text(oldVal+newVal);
		}
	});
	$("#1").click(function(){
		oldVal=$("#value").text();
		if(oldVal==="0")
			$("#value").text("1");
		else{
			newVal="1";
			$("#value").text(oldVal+newVal);
		}
	})
	$("#2").click(function(){
		oldVal=$("#value").text();
		if(oldVal==="0")
			$("#value").text("2");
		else{
			newVal="2";
			$("#value").text(oldVal+newVal);
		}
	});
	$("#3").click(function(){
		oldVal=$("#value").text();
		if(oldVal==="0")
			$("#value").text("3");
		else{
			newVal="3";
			$("#value").text(oldVal+newVal);
		}
	});
	$("#4").click(function(){
		oldVal=$("#value").text();
		if(oldVal==="0")
			$("#value").text("4");
		else{
			newVal="4";
			$("#value").text(oldVal+newVal);
		}
	})
	$("#5").click(function(){
		oldVal=$("#value").text();
		if(oldVal==="0")
			$("#value").text("5");
		else{
			newVal="5";
			$("#value").text(oldVal+newVal);
		}
	});
	$("#6").click(function(){
			oldVal=$("#value").text();
			if(oldVal==="0")
				$("#value").text("6");
			else{
				newVal="6";
				$("#value").text(oldVal+newVal);
			}
		});
		$("#7").click(function(){
			oldVal=$("#value").text();
			if(oldVal==="0")
				$("#value").text("7");
			else{
				newVal="7";
				$("#value").text(oldVal+newVal);
			}
		});
		$("#8").click(function(){
			oldVal=$("#value").text();
			if(oldVal==="0")
				$("#value").text("8");
			else{
				newVal="8";
				$("#value").text(oldVal+newVal);
			}
		});
		$("#9").click(function(){
			oldVal=$("#value").text();
			if(oldVal==="0")
				$("#value").text("9");
			else{
				newVal="9";
				$("#value").text(oldVal+newVal);
			}
		});
		$("#multiply").click(function(){
			oldVal=$("#value").text();
			if(oldVal==="0")
				$("#value").text("*");
			else{
				newVal="*";
				$("#value").text(oldVal+newVal);
			}

		});
		$("#add").click(function(){
			oldVal=$("#value").text();
			if(oldVal==="0")
				$("#value").text("+");
			else{
				newVal="+";
				$("#value").text(oldVal+newVal);
			}

		});
		$("#subtract").click(function(){
			oldVal=$("#value").text();
			if(oldVal==="0")
				$("#value").text("-");
			else{
				newVal="-";
				$("#value").text(oldVal+newVal);
			}

		});
		$("#equals").click(function(){
			answer=$("#value").text();


		});

});
