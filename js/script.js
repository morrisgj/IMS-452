function updateProgress() {

  const totalQuestions = 8;

  let answered = 0;

  for (let i = 1; i <= totalQuestions; i++) {

    const answer = document.querySelector(`input[name="q${i}"]:checked`);

    if (answer) {
      answered++;
    }

  }

  const progress = (answered / totalQuestions) * 100;

  document.getElementById("progressBar").style.width = progress + "%";

}

function showResult() {

  const totalQuestions = 8;

  let score = 0;

  const resultBox = document.getElementById("resultBox");
  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");

  for (let i = 1; i <= totalQuestions; i++) {

    const answer = document.querySelector(`input[name="q${i}"]:checked`);

    if (!answer) {

      resultBox.style.display = "block";

      resultTitle.textContent = "Finish the self-check";

      resultText.textContent =
        "Answer every question first so the result can be more useful.";

      return;
    }

    score += Number(answer.value);

  }

  resultBox.style.display = "block";

  if (score === 0) {

    resultTitle.textContent = "Low concern";

    resultText.textContent =
      "Your answers do not show major warning signs right now. Still, it is worth staying aware of your habits and noticing if anything changes.";

  } else if (score <= 2) {

    resultTitle.textContent = "Some warning signs";

    resultText.textContent =
      "A few of your answers show patterns worth paying attention to. This could be a good time to set boundaries and think about what triggers the habit.";

  } else {

    resultTitle.textContent = "Stronger warning signs";

    resultText.textContent =
      "Your answers suggest these habits may be affecting your life more than you realize. Talking to someone you trust or using a support resource could be a smart next step.";

  }

  resultBox.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

}

function resetQuiz() {

  const inputs = document.querySelectorAll("input[type='radio']");

  inputs.forEach(function(input) {
    input.checked = false;
  });

  document.getElementById("progressBar").style.width = "0%";

  document.getElementById("resultBox").style.display = "none";

}