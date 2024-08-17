document.addEventListener("DOMContentLoaded", function() {
  const fightButton = document.getElementById("fight-button");
  fightButton.disabled = true; // Initially disable the "Fight" button

  function createParagraph() {
      const para = document.createElement("p");
      const messages = ["You Won!", "Oh no, you lost :( ", "Victory!", "Sacre bleu! Better luck next time", "Success!"];
      const randomIndex = Math.floor(Math.random() * messages.length);
      const randomMessage = messages[randomIndex];
      para.textContent = randomMessage;
      para.classList.add("styled-paragraph");
      document.body.appendChild(para);
      fightButton.disabled = true; // Disable the "Fight" button after click

      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Try Again";
      resetBtn.classList.add("resetBtn");
      resetBtn.addEventListener("click", resetParagraphs);
      document.body.appendChild(resetBtn);
  }

  function resetParagraphs() {
      const elements = document.querySelectorAll(".styled-paragraph, .resetBtn");
      elements.forEach(el => el.remove());
      fightButton.disabled = true; // Keep the "Fight" button disabled until an image is selected again
  }

  function selectImage(selectedImg) {
      const images = document.querySelectorAll('.img-ind img');
      images.forEach(img => img.classList.remove('selected'));

      selectedImg.classList.add('selected');
      fightButton.disabled = false; // Enable the "Fight" button when an image is selected
  }

  fightButton.addEventListener("click", createParagraph);

  const images = document.querySelectorAll('.img-ind img');
  images.forEach(img => {
      img.addEventListener('click', function() {
          selectImage(this);
      });
  });
});
