document.addEventListener("DOMContentLoaded", function() {
  function createParagraph() {
      const para = document.createElement("p");
      const messages = ["You Won!", "Oh no, you lost :( ", "Victory!", "Sacre bleu! Better luck next time", "Success!"];
      const randomIndex = Math.floor(Math.random() * messages.length);
      const randomMessage = messages[randomIndex];
      para.textContent = randomMessage;
      para.classList.add("styled-paragraph");
      document.body.appendChild(para);

      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Try Again";
      resetBtn.classList.add("resetBtn");
      resetBtn.addEventListener("click", resetParagraphs);
      document.body.appendChild(resetBtn);
  }

  function resetParagraphs() {
      const elements = document.querySelectorAll(".styled-paragraph, .resetBtn");
      elements.forEach(el => el.remove());
  }

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
      button.addEventListener("click", createParagraph);
  }
});
function selectImage(selectedImg){
  const images=document.querySelectorAll('.img-ind img');
  images.forEach(img=>img.classList.remove('selected'))

  selectedImg.classList.add('selected');
}
function resetPage() {
  location.reload(); // Reloads the page
}