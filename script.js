const socket = io("http://127.0.0.1:3000");

const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

const appendMessage = (message) => {
  const msgBox = document.createElement("div");
  msgBox.textContent = message;
  messageContainer.appendChild(msgBox);
};

// console.log("heelooooooooooo")
const user = prompt("what is your name?")
socket.emit("new user", user)
appendMessage(`you joined the room`)


socket.on("chat-message", (data) => {
  appendMessage(`${data.name}: ${data.message}`);
});

socket.on("user-connected", (name) => {
    appendMessage(`${name} connected`);
  });

  socket.on("user-disconnected", (name) => {
    appendMessage(`${name} disconnected`);
  });




messageForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let message = messageInput.value;
  appendMessage(`you: ${message}`)
  socket.emit("send-chat-message", message);
  socket.emit("chat-message", message);
  messageInput.value = ""
  
});

