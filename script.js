const chatInput = document.getElementById("chat-input");
const chatSend = document.getElementById("chat-send");
const chatOutput = document.getElementById("chat-output");

chatSend.addEventListener("click", function() {
  const message = chatInput.value;
  chatInput.value = "";
  
  if (message !== "") {
    const chatBubble = document.createElement("div");
    chatBubble.classList.add("chat-bubble", "user");
    chatBubble.innerText = message;
    chatOutput.appendChild(chatBubble);
  }
});
