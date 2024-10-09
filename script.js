document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const questionText = document.getElementById('question-text');
    const choicesList = document.getElementById('choices-list');
    const nextButton = document.getElementById('next-btn');
    const restartButton = document.getElementById('restart-btn');
    const result = document.getElementById('result');
    const startButton = document.getElementById('start-btn');
    const resultContainer = document.getElementById('result-container');
    const scoreDisplay = document.getElementById('score');

    const questions = [
        {
            "question": "What is the tallest mountain in the world?",
            "choices": ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
            "answer": "Mount Everest"
        },
        {
            "question": "Which country is known as the Land of the Rising Sun?",
            "choices": ["China", "Japan", "South Korea", "Thailand"],
            "answer": "Japan"
        },
        {
            "question": "Who developed the theory of relativity?",
            "choices": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
            "answer": "Albert Einstein"
        },
        {
            "question": "What is the chemical symbol for water?",
            "choices": ["O2", "CO2", "H2O", "HO"],
            "answer": "H2O"
        },
        {
            "question": "What is the fastest land animal?",
            "choices": ["Lion", "Cheetah", "Leopard", "Tiger"],
            "answer": "Cheetah"
        },
        {
            "question": "Who painted the Mona Lisa?",
            "choices": ["Vincent van Gogh", "Leonardo da Vinci", "Michelangelo", "Raphael"],
            "answer": "Leonardo da Vinci"
        },
        {
            "question": "Which planet is known as the Red Planet?",
            "choices": ["Venus", "Mars", "Jupiter", "Saturn"],
            "answer": "Mars"
        },
        {
            "question": "What is the longest river in the world?",
            "choices": ["Amazon River", "Yangtze River", "Nile River", "Mississippi River"],
            "answer": "Nile River"
        },
        {
            "question": "Which element has the atomic number 1?",
            "choices": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
            "answer": "Hydrogen"
        },
        {
            "question": "Who was the first person to walk on the moon?",
            "choices": ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "John Glenn"],
            "answer": "Neil Armstrong"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    startButton.addEventListener('click', showQuiz);

    function showQuiz() {
        startButton.classList.add('hidden');
        questionContainer.classList.remove('hidden');
        resultContainer.classList.add('hidden');
        showQuestions();
    }

    function showQuestions() {
        nextButton.classList.add('hidden');
        questionText.textContent = questions[currentQuestionIndex].question;

        choicesList.innerHTML = '';
        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => selectAnswer(choice));
            choicesList.appendChild(li);
        });
    }

    function selectAnswer(choice) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        choicesList.innerHTML = '';
        questions[currentQuestionIndex].choices.forEach(chc => {
            const li = document.createElement('li');
            if(chc !== choice) return;
            li.textContent = choice;
            li.classList.add('selected');
            choicesList.appendChild(li);
        });
        if (choice === correctAnswer) {
            score++;
        }
        nextButton.classList.remove('hidden');
    }

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestions();
        } else {
            showResult();
        }
    });

    function showResult() {
        questionContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        scoreDisplay.textContent = score;
    }

    restartButton.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        showQuiz();
    });
});
