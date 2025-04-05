document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Define the correct answers
    const answers = {
        q1: 'false',   // The sky is blue (True)
        q2: 'true',  // Cats are reptiles (False)
        q3: 'false',   // Water freezes at 0 degrees Celsius (True)
        q4: 'false'   // The Earth is flat (False)
    };

    // Check each question
    for (let i = 1; i <= 4; i++) {
        const questionName = `q${i}`;
        const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);

        if (selectedAnswer) {
            const resultElement = document.getElementById(`result${i}`);
            if (selectedAnswer.value === answers[questionName]) {
                resultElement.innerHTML = '✔️'; // Green check mark
                resultElement.className = 'result correct';
            } else {
                resultElement.innerHTML = '❌'; // Red X
                resultElement.className = 'result incorrect';
            }
        }
    }
});