// eslint-disable-next-line
const app = {
  server: "http://52.78.206.149:3000/messages",

  init: () => {
    app.fetch();
  },

  fetch: () => {
    fetch(app.sever)
      .then((res) => res.json())
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          this.renderMessage(res[i]);
        }
      });
  },

  send: (message) => {
    fetch(app.server, {
      method: "POST",
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  clearMessages: () => {
    document.querySelector("#list").textContent = "";
  },

  renderMessage: (message) => {
    // eslint-disable-next-line no-undef
    let chats = document.importNode(template.content, true);
    chats.querySelector(".id").textContent = message.id;
    chats.querySelector(".name").textContent = message.username;
    chats.querySelector(".text").textContent = message.text;
    chats.querySelector(".roomname").textContent = message.roomname;
    chats.querySelector(".date").textContent = message.date;

    document.querySelector("#list").appendChild(chats);
  },
};
function sendTo() {
  let newUser = document.querySelector("#inputId").value;
  let newCommment = document.querySelector("#inputText").value;
  // let newRoomname =

  let message = {
    username: newUser.value,
    text: newCommment.value,
  };

  app.send(message);
}

let commentBtn = document.querySelector("#inputBtn");
commentBtn.addEventListener("click", sendTo());
