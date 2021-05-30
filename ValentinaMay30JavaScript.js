	function center() {
		first = Math.floor(Math.random() * 10); 
		second = Math.floor(Math.random() * 10);
		third = Math.floor(Math.random() * 10);		
		alert("The three randomized numbers are " + first + ", " + second + ", " + third)
		if(first <= second && second <= third){
			alert("The center number is " + second);
		}
		else if(second <= first && first <= third){
			alert("The center number is " + first);
		}
		else{
			alert("The center number is " + third);
		}
	}
	
	function boolcal(){
		var num1 = parseInt(prompt('please enter 1 for true, 0 for false:'));
		var op = prompt('please enter the operator (&&, ||, !&, !|):');
		var num2 = parseInt(prompt('please enter 1 for true, 0 for false:'));
		
		var bool1 = num1 == 1;
		var bool2 = num2 == 1;
		
		if(op == "&&"){
			alert(bool1 && bool2);
		}
		else if (op == "||"){
			alert(bool1 || bool2);
		}
		else if(op == '!&'){
			alert(!(bool1 && bool2));
		}
		else{
			alert(!(bool1 || bool2));
		}
	
	}
	
	function coinGame() {
		var possibilities = ['HH','TT', 'HT', 'TH' ];
		var randomNumber = Math.floor(Math.random() * 4);
		var selectedFlips = possibilities[randomNumber];
		console.log(selectedFlips);
		
		var guess1 = prompt('Guess first coin(H/T): ');
		var guess2 = prompt('Guess second coin(H/T): ');
		
		if (selectedFlips == "HH") {
			if (guess1 == "H" && guess2 == "H") {
				console.log("Both Correct!");
			}
			else if (guess1 == "T" && guess2 == "T") {
				console.log("Both Incorrect!");
			}
			else {
				console.log("Only one correct!");
			}
		}
		else if (selectedFlips == "TT") {
			if (guess1 == "T" && guess2 == "T") {
				console.log("Both Correct!");
			}
			else if (guess1 == "H" && guess2 == "H") {
				console.log("Both Incorrect!");
			}
			else {
				console.log("Only one correct!");
			}		
		}
		else if (selectedFlips == "HT") {
			if (guess1 == "H" && guess2 == "T") {
				console.log("Both Correct!");
			}
			else if (guess1 == "T" && guess2 == "H") {
				console.log("Wrong order!");
			}
			else {
				console.log("Only one correct!");
			}	
		}
		else if (selectedFlips == "TH") {
			if (guess1 == "T" && guess2 == "H") {
				console.log("Both Correct!");
			}
			else if (guess1 == "H" && guess2 == "T") {
				console.log("Wrong order!");
			}
			else {
				console.log("Only one correct!");
			}
		}

		
	}
	
	function convertWeekday() {
		var input = prompt('what is today(MON/TUES/WED/THURS/FRI/SAT/SUN?)');
		
		switch(input){
		  case 'MON': console.log(1);
			break;
		  case 'TUES': console.log(2);
			break;
		  case 'WED': console.log(3);
			break;
		  case 'THURS': console.log(4);
			break;
		  case 'FRI': console.log(5);
			break;
		  case 'SAT': console.log(6);
			break;
		  case 'SUN': console.log(7);
			break;
		  default:
		   console.log('Not a weekday!');
		}
	}

	function checkWeekday() {
		var input = prompt("Enter [MON/TUES/WED/THURS/FRI/SAT/SUN?] to check if it's a weekday");
		
		switch(input){
		  case 'MON': 
		  case 'TUES': 
		  case 'WED': 
		  case 'THURS':
		  case 'FRI': 
		  case 'SAT': 
		  case 'SUN': 
			console.log("Its a weekday!"); 
			break;
		  default:
		   console.log('Not a weekday!');
		}	
	}	
	
	
	function dayPeriod() {

		var h = new Date().getHours();
		
		switch(h){
		  case 8: 
		  case 9: 
		  case 10: 
		  case 11:
			console.log('Morning Time!');
			break;
		  case 12: 
			console.log('Noon Time!');
			break;
		  case 13: 
		  case 14: 
		  case 15: 
		  case 16: 
			console.log('Afternoon Time!');
			break;
		  case 17: 
		  case 18: 
		  case 19:
		  case 20: 
		  case 21: 
		  case 22: 
		  case 23:
		  case 0: 
		  case 1: 
		  case 2: 
		  case 3: 
		  case 4: 
		  case 5: 
		  case 6: 
		  case 7:
			console.log('Evening!');
			break;
		}	
	}