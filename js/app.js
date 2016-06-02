// Step 1: Define global variables


// Create an array that holds questions, answers and details

var questionsArray = [

    // Question 1:
    {
        questionText: 'How many galaxies are there in the universe?',
        questionChoices: ['10 billion', '50 billion', '100 billion'],
        correct: 2,
        details: 'Although no one really knows the exact number, most astronomers believe there are nearly one hundred billion galaxies in our universe.'
    },

    // Question 2:
    {
        questionText: 'Which galaxy does earth and our solar system belong to?',
        questionChoices: ['Milky Way', 'Andromeda', 'Triangulum'],
        correct: 0,
        details: 'Our solar system is located in the outer reaches of the Milky Way Galaxy, which is a spiral galaxy.'
    },

    // Question 3:
    {
        questionText: 'How many stars are there in our galaxy?',
        questionChoices: ['300 billion', '200 billion', '100 billion'],
        correct: 1,
        details: 'The Milky Way Galaxy contains roughly 200 billion stars (our sun being one of them). Most of these stars are not visible from Earth.'
    },

    // Question 4:
    {
        questionText: 'Which star is at the center of our solar system?',
        questionChoices: ['Sun', 'Moon', 'Earth'],
        correct: 0,
        details: 'Sun is at the center of our solar system. The Eart the moon orbitz around Sun'
    },

    // Question 5:
    {
        questionText: 'What is the radius of the sun in our solar system?',
        questionChoices: ['200,000 miles', '400,000 miles', '300,000 miles'],
        correct: 1,
        details: 'The mean radius of the sun is 432,450 miles, which makes its diameter about 864,938 miles. You could line up 109 Earths across the face of the sun.'
    },

    // Question 6:
    {
        questionText: 'What is the largest planet in our solar system?',
        questionChoices: ['Pluto', 'Jupiter', 'Earth'],
        correct: 1,
        details: 'Jupiter is the largest planet in our solar system with a mean radius of approximately 43,440 miles.'
    },

    // Question 7:
    {
        questionText: 'How far is Earth from the Sun?',
        questionChoices: ['25 million miles', '59 million miles', '93 million miles'],
        correct: 2,
        details: 'The exact distance between planet Earth and the Sun in our solar system is 92.96 million miles.'
    },

    // Question 8:
    {
        questionText: 'How long does it take for sunlight to reach Earth?',
        questionChoices: ['1 minute', '8 minutes', '15 minutes'],
        correct: 1,
        details: 'It takes around 8 minutes for the sunlight to reach the surface of planet Earth.'
    },

    // Question 9:
    {
        questionText: 'What is the radius of Earth?',
        questionChoices: ['4,000 miles', '8,000 miles', '16,000 miles'],
        correct: 0,
        details: 'The exact radius of the Earth is 3,959 miles, which makes its diameter about 7,918 miles.'
    },

    // Question 10:
    {
        questionText: 'What is the farthest planet to Earth?',
        questionChoices: ['Venus', 'Mars', 'Pluto'],
        correct: 2,
        details: 'The Farthest Planet (Usually) Pluto, the ninth planet in our solar system, was not discovered until 1930 and remains a very difficult world to observe because it is so far away.'
    }

];

// variable to indicate the current question number
var currentQuestionNumber = 0;

// variable that indicates the total numbe rof question (it will be just the length of array so if change the array it will update automatically)
var totalQuestions = questionsArray.length;

// varriable that holds the total number of correct answers
var correctTotal = 0;


// Step 2: Define Functions

/*--- Display Questions Function ---*/
function questionDisplay() {
    //displays the current question
    $('.question-numbers').text("Question " + (currentQuestionNumber + 1) + " of " + totalQuestions);
    $('.question').text(questionsArray[currentQuestionNumber].questionText);
    $('#choices').empty();
    var choiceTotal = questionsArray[currentQuestionNumber].questionChoices.length;
    for (var i = 0; i < choiceTotal; i++) {
        //loop thru the answer choices and create a dynamically generated row for each of them
        $('#choices').append("<input type='radio' class='option' name='option' value=" + i + ">" + questionsArray[currentQuestionNumber].questionChoices[i] + "<br>");
    }
}


// Step 3: Use Functions

$(document).ready(function () {

    // when document loads hide the quiz and response section
    $('.quiz').hide();
    $('.response').hide();

    // function that when clicked on the Start Quiz button its starts the quiz
    $('.take-quiz').on('click', '.start-quiz', function () {
        $('.take-quiz').hide();
        $('.response').hide();
        $('.quiz').show();

        questionDisplay();
    });

    // show quiz questions
    $('.quiz').on('click', '#choices', function () {

        var answer = $("input[class='option']:checked").val();
        var correctAnswer = questionsArray[currentQuestionNumber].correct;

        // Debugging: check to make sure all parts are functional (remove comment to test)

        /* console.log("Correct Total = " + correctTotal);
        console.log("User Answer = " + answer);
        console.log("Correct Answer = " + correctAnswer); */
        if (answer == correctAnswer) {

            // if the right choices is selected by the user, increment correctTotal by 1
            correctTotal++;
        }

        $('.choice-response').append("<h4 class='response-question'>Q: " + questionsArray[currentQuestionNumber].questionText + "</h4>");
        $('.choice-response').append("<h4 class='response-answer'>A: " + questionsArray[currentQuestionNumber].details + "</h4>");

        // when question is finished show the response

        // of the current question number is equal to total question number the show the score and response section
        if ((currentQuestionNumber + 1) == totalQuestions) {
            $('.score-value').text(correctTotal + "/" + totalQuestions);

            $('.take-quiz').hide();
            $('.quiz').hide();
            $('.response').show();
        } else {
            //otherwise continue to next question
            currentQuestionNumber++;
            questionDisplay();
        }
    });

    // load the front page .take-quiz once try-again is clicked
    $('.response').on('click', '.try-again-button', function () {
        $('.quiz').hide();
        $('.response').hide();
        $('.take-quiz').show();

        // reset vriables to start quiz again
        currentQuestionNumber = 0;
        correctTotal = 0;
    })


})
