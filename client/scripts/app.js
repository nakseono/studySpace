// eslint-disable-next-line
const app = {
  server: "http://52.78.206.149:3000/messages",

  init: () => {
    app.fetch().then((res) => {
      for(let i = 0; i < res.length; i++){
        app.renderMessage(res[i]);
      }
    })
  },

  fetch: () => {
    return fetch(app.sever) 
    // .then((res) => res.json())
     .then((res) => {
        return res;
      }); 
  },

  send: (message) => {
    window.fetch((app.server), {
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // eslint-disable-next-line no-console
      console.log(json);
    })
  },

  clearMessages: () => {
    document.querySelector('#chats').innerHTML = '';
    //list.innerHTML = "";
  },

  renderMessage: (message) => {
    // https://github.com/codestates/help-desk/issues/1332
    let newElement = document.createElement('div');
    let newUsername = document.createElement('div');
    let newText = document.createElement('div');
    newElement.className = 'chat';
    newUsername.className = 'username';
    newText.className = 'userText';

    newUsername.textContent = message.username;
    newText.textContent = message.text;
    newElement.appendChild(newUsername);
    newElement.appendChild(newText);
    document.querySelector('#chats').prepend(newElement);

    /* let chat = document.importNode(template.content, true);
      chat.querySelector('.name').textContent = message.username;
      chat.querySelector('.text').textContent = message.text;

    list.appendChild(chat);
    */
  }
};


app.init();