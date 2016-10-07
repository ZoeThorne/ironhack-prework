var user = {}
var responses = []

function question1() {
  var name = prompt('What is your name?')
  user.name = name
}


function question2() {

  var firstQuestion = prompt('Is Ouagadougou the capital of Burkina Faso ? (Yes or No)')

// why do you need to convert the answer to lowercase?
  if (firstQuestion.toLowerCase() === 'yes') {
    firstQuestion = true
  } else if (firstQuestion.toLowerCase() === 'no') {
    firstQuestion = false
  } else {
// what if the user writes something other than yes or no? 
// they will have to answer the question again
    alert("Please answer either Yes or No");
    return question2();
  }
  responses.push(firstQuestion); // add the true or false value to the responses array
}


function question3() {
  var secondQuestion = prompt('What is the capital of French Guiana: Paramaribo, Kourou or Cayenne?');
  secondQuestion = secondQuestion.toLowerCase();
  switch (secondQuestion) {
    case 'cayenne':
        responses.push(true);
        break;
    case 'paramaribo', 'kourou':
        responses.push(false);
        break;
    default:
        alert("Please choose one of the options")
        return question3();
        break;
  }
  
}



function question4() {
	var thirdQuestion = prompt('What is the capital of Australia?');
	thirdQuestion = thirdQuestion.toLowerCase();
	switch (thirdQuestion) {
		case 'canberra':
			responses.push(true);
			alert('Well done! Not a lot of people know that.')
			break;
		case 'sydney':
			responses.push(false);
			alert("Lots of people think that, but it's actually Canberra.")
			break;
		default:
			responses.push(false);
			break;

	}
}


function question5() {
	var fourthQuestion = prompt('To the nearest million, what is the population of the UK? Please write only digits, eg \'1000000\'');
	fourthQuestion = parseFloat(fourthQuestion);
	if (fourthQuestion >= 60000000 && fourthQuestion <= 70000000) {
		responses.push(true);
		alert("Close enough!")
	} else if (fourthQuestion < 60000000) {
		responses.push(false);
		alert("That's way too low!")
	} else if (fourthQuestion > 70000000) {
		responses.push(false);
		alert("That's way too high!")
	} /*else
		alert("Please enter a number");
		return question5();*/
		// I've commented this out because when I leave it in, it goes into a loop and keeps asking for a number but I don't know why!
	}
	


function evaluate(responsesArray) {
	var correct = 0;
	var incorrect = 0;

	for (var i = 0, length = responsesArray.length; i < length; i++) {
    if(responsesArray[i])
      correct++;
    else
      incorrect++;
  }

  user.correct = correct;
  user.incorrect = incorrect;

  showResults();
// declare two variables to store the totals

// populate the “totals” variables from the “responsesArray”

// save the “totals” variables inside the user object

// call showResults
}

function showResults() {

// display the user results
 alert(user.name + "'s score is - correct: " + user.correct + ", incorrect: " + user.incorrect);
}


question1();
question2();
question3();
question4();
question5();
evaluate(responses);