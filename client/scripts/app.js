// eslint-disable-next-line
const app = {
  server: "http://52.78.206.149:3000/messages",
  init: () => {

  },

  fetch: () => {
    fetch(this.sever)
      .then((res) => res.json())
      .then((res) => {
        for(let i = 0; i < res.length; i++){
          res[i].username
          res[i].text
        }
      })
  },

  send: () => {

  },
  
  clearMessages: () => {
    document.querySelector('#list').textContent = '';
  },

  renderMessage: (message) => {
    // eslint-disable-next-line no-undef
    let chats = document.importNode(template.content, true);
      chats.querySelector('.name').textContent = message.username;
      chats.querySelector('.text').textContent = message.text;

  document.querySelector('#list').appendChild(chats);
  }
};