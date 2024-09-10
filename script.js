const questions=[
    {
        question: "Which of the following is not an operating system?",
        answers:
        [
            {text: "Windows",correct:"false"},
            {text: "Linux",correct:"false"},
            {text: "oracle",correct:"true"},
            {text: "DOS",correct:"false"},

        ]
    },
    {
        question: "Which of the following is the extension of Notepad?",
        answers:
        [
            {text: ".txt",correct:"true"},
            {text: ".xls",correct:"false"},
            {text: ".ppt",correct:"false"},
            {text: ".bmp",correct:"false"},

        ]

    },
    {
        question: "What else is a command interpreter called?",
        answers:
        [
            {text: "prompt",correct:"false"},
            {text: "kernel",correct:"false"},
            {text: "shell",correct:"true"},
            {text: "command",correct:"false"},

        ]

    },
    {
        question: "What is the full name of FAT?",
        answers:
        [
            {text: "File attribute table",correct:"false"},
            {text: "File allocation table",correct:"true"},
            {text: "Font attribute table",correct:"false"},
            {text: "Format allocation table",correct:"false"},

        ]

    },
    {
        question: " When does page fault occur?",
        answers:
        [
            {text: "The page is present in memory.",correct:"false"},
            {text: "The deadlock occurs.",correct:"false"},
            {text: "The page does not present in memory.",correct:"true"},
            {text: "The buffering occurs",correct:"false"},

        ]

    },
    {
        question: " Banker's algorithm is used?",
        answers:
        [
            {text: "To prevent deadlock",correct:"true"},
            {text: "To deadlock recovery.",correct:"false"},
            {text: "To solve the deadlock",correct:"false"},
            {text: "For mutual exclusion",correct:"false"},

        ]

    },
    {
        question: " If the page size increases, the internal fragmentation is also?",
        answers:
        [
            {text: "Increases",correct:"true"},
            {text: "Decreases",correct:"false"},
            {text: "Remains constant",correct:"false"},
            {text: "None of these",correct:"false"},

        ]

    },
    {
        question: " The size of virtual memory is based on which of the following",
        answers:
        [
            {text: "CPU",correct:"false"},
            {text: "RAM",correct:"false"},
            {text: "Address bus",correct:"true"},
            {text: "Data bus",correct:"false"},

        ]

    },
    {
        question: " Who provides the interface to access the services of the operating system?",
        answers:
        [
            {text: "API",correct:"false"},
            {text: "System call",correct:"true"},
            {text: "Library",correct:"false"},
            {text: "Assembly instruction",correct:"false"},

        ]

    },
    {
        question: "Where are placed the list of processes that are prepared to be executed and waiting? ",
        answers:
        [
            {text: "Job queue",correct:"false"},
            {text: "Ready queue",correct:"true"},
            {text: "Execution queue",correct:"false"},
            {text: "Process queue",correct:"false"},

        ]

    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startquiz()
{
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion()
{
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question

    currentQuestion.answers.forEach(answer =>
        {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct)
            {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        })
}

function resetState()
{
    nextButton.style.display = "none";
    while (answerButtons.firstChild)
    {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e)
{
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect)
    {
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>
        {
            if(button.dataset.correct === "true")
            {
                button.classList.add("correct");
            }
            button.disabled =true;
        });
        nextButton.style.display = "block";
}
function showScore()
{
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again.";
    nextButton.style.display="block";
}


function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>
{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else{
        startquiz();
    }
})

startquiz();