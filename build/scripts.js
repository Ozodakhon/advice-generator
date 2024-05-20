document.addEventListener("DOMContentLoaded", function () {
  const adviceId = document.getElementById("advice-id");
  const adviceContent = document.getElementById("advice-content");
  const iconBtn = document.getElementById("dice-icon");
  const url = "https://api.adviceslip.com/advice";

  async function getAdvice() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const { id, advice } = data.slip;
        adviceId.innerText = "ADVICE # " + id;
        adviceContent.innerText = advice;
    } catch (error) {
        alert("Sorry, the advice genie is taking a coffee break");
    }
}

  iconBtn.addEventListener("click", getAdvice);
});
