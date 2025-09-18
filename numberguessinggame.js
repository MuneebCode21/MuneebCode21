const minNumber = 1;
    const maxNumber = 50;
    let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    let attempts = 0;
    let running = true;

    function checkGuess() {
      if (!running) return; // stop after correct guess

      const input = document.getElementById("guessInput");
      let guess = Number(input.value);
      const message = document.getElementById("message");
      console.log(typeof guess, guess);

      if (isNaN(guess)) {
        message.textContent = "⚠️ Please enter a valid number.";
        return;
      }
      if (guess < minNumber || guess > maxNumber) {
        message.textContent = "⚠️ Number out of range! Please try again.";
        return;
      }

      attempts++;
      if (guess === randomNumber) {
        message.textContent = `🎉 Congratulations! You guessed ${randomNumber} in ${attempts} attempts.`;
        running = false;
        window.alert("Congrats ypu are offically a nigga");
      } else if (guess < randomNumber) {
        message.textContent = "⬇️ Too low! Try again.";
      } else {
        message.textContent = "⬆️ Too high! Try again.";
      }

      input.value = ""; // clear input after each try
      input.focus(); // focus back on input
    }