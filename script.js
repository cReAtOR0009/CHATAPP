const socket = io("http://127.0.0.1:3000");

const messageContainer = document.getElementById("message-container");
const messageForm = document.getElementById("send-container");
const messageInput = document.getElementById("message-input");

socket.on("chat-message", (data) => {
  console.log(data);
});

console.log("script working")

messageForm.addEventListener("submit", async (e) => {
    // console.log("first subit button clicked")
  e.preventDefault();
  let message = messageInput.value;
  socket.emit("send-chat-message", message)
  message = "yes"
});
