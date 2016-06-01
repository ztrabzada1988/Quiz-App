// Step 1: Define global variables


// Create an array that holds questions, answers and details

var questions = [

        // Question 1:
    {
        question: 'How many galaxies are there in the universe?',
        choices: ['10 billion', '50 billion', '100 billion'],
        corrrect: 2,
        details: 'Although no one really knows the exact number, most astronomers believe there are nearly one hundred billion galaxies in our universe.'
    },

        // Question 2:
    {
        question: 'Which galaxy does earth and our solar system belong to?',
        choices: ['Milky Way', 'Andromeda', 'Triangulum'],
        corrrect: 0,
        details: 'Our solar system is located in the outer reaches of the Milky Way Galaxy, which is a spiral galaxy.'
    },

        // Question 3:
    {
        question: 'How many stars are there in our galaxy?',
        choices: ['300 billion', '200 billion', '100 billion'],
        corrrect: 1,
        details: 'The Milky Way Galaxy contains roughly 200 billion stars (our sun being one of them). Most of these stars are not visible from Earth.'
    },

        // Question 4:
    {
        question: 'What is the radius of the sun in our solar system?',
        choices: ['200,000 miles', '400,000 miles', '300,000 miles'],
        corrrect: 1,
        details: 'The mean radius of the sun is 432,450 miles, which makes its diameter about 864,938 miles. You could line up 109 Earths across the face of the sun.'
    },

        // Question 5:
    {
        question: 'How far is Earth from the Sun?',
        choices: ['25 million miles', '59 million miles', '93 million miles'],
        corrrect: 2,
        details: 'The exact distance between planet Earth and the Sun in our solar system is 92.96 million miles.'
    }

]

$(document).ready(function () {
    // function that when clicked on the Start Quiz button its starts the quiz
    $('.take-quiz').on('click', '.start-quiz', function () {
        $('.take-quiz').hide();
        $('.response').hide();
        $('.quiz').show();
    });

    $('.quiz').on('click', '.option', function () {
        $('.take-quiz').hide();
        $('.quiz').hide();
        $('.response').show();
    });

    $('.response').on('click', '.try-again', function () {
        $('.response').hide();
        $('.quiz').hide();
        $('.take-quiz').show();
    });

})

// Step 2: Define Functions

/*--- Variables ---*/
var questionNum = 0;
var questionTotal = questions.length;
var correctTotal = 0;

/*--- Display Questions Function ---*/
function questionDisplay() {
    //displays the current question
    $('question-numbers').text(".question " + (questionNum + 1) + " of " + questionTotal);
    $('.question').text(questions[questionNum].question);
    $('.choices').empty();
    var choiceTotal = questions[questionNum].choices.length;
    for (var i = 0; i < choiceTotal; i++) {
        //loop thru the answer choices and create an dynamically generated row for each of them
        $('#choices').append("<input type='radio' class='option' name='option' value=" + i + ">" + questions[questionNum].choices[i] + "<br>");
    }
}

// function for storing the answer choices selected by user
function selectAnswer() {

}

// function to keep track of questions and how many remain
function trackQuestions() {

}

// function to keep track of right and wrong answers
function trackAnswers() {

}

// function that show the answers and responses after all questions are answered by the user
function answerResponse() {

}


// Step 3: Use Functions
