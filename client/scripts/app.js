<<<<<<< HEAD
// eslint-disable-next-line
const app = {
<<<<<<< HEAD
  server: "http://52.78.206.149:3000/messages",

  init: () => {
    app.fetch();
  },

  fetch: function () {
    fetch(app.server).then(function (response) {
      response.json().then(function (data) {
        for (let i = 0; i < data.length; i++) {
          app.renderMessage(data[i]);
        }
      });
    });
  },

  send: (message) => {
    window
      .fetch(app.server, {
        method: "POST",
        body: JSON.stringify(message),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // eslint-disable-next-line no-console
        console.log(json);
      });
  },

  clearMessages: () => {
    document.querySelector("#chats").innerHTML = "";
    //list.innerHTML = "";
  },

  renderMessage: (message) => {
    // https://github.com/codestates/help-desk/issues/1332
    let newElement = document.createElement("div");
    let newUsername = document.createElement("div");
    let newText = document.createElement("div");
    newElement.className = "chat";
    newUsername.className = "username";
    newText.className = "userText";

    newUsername.textContent = message.username;
    newText.textContent = message.text;
    newElement.appendChild(newUsername);
    newElement.appendChild(newText);
    document.querySelector("#chats").prepend(newElement);

    /* let chat = document.importNode(template.content, true);
      chat.querySelector('.name').textContent = message.username;
      chat.querySelector('.text').textContent = message.text;

    list.appendChild(chat);
    */
  },
};

app.init();
=======
  server: "http://localhost:3000"
};

app.fetch = () => {
  fetch(app.server)
  .then(res => res.json())
  .then(data => data)
  .catch(err => {
    return err;
  })
}

app.init = () => {

  fetch(app.server)
  .then(res => res.json())
  .then(data => {
    for(let i = data.length-1; i > -1; i = i-1) {
      let temp = document.querySelector('#temp');
      let parent = document.querySelector('#chats');
      let element = document.importNode(temp.content, true);
      let select = document.querySelector('#room');
      if(select.textContent.indexOf(data[i].roomname) === -1) {
        let option = document.createElement('option');
        option.textContent = data[i].roomname;
        select.appendChild(option);
      }
      element.querySelector('.username').textContent = data[i].username;
      element.querySelector('.message').textContent = data[i].text;
      parent.appendChild(element);
    }
  }) 
}


app.send = (message) => {
  fetch(app.server, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(res => res.json())
  .then(json => {
    return json;
  })
}

app.clearMessages = () => {
  let parent = document.querySelector('#chats');
  while ( parent.hasChildNodes() ) { 
    parent.removeChild( parent.firstChild ); 
  }
}

app.renderMessage = (message) => {
  let parent = document.querySelector('#chats');
  let temp = document.querySelector('#temp');
  let element = document.importNode(temp.content, true);
  element.querySelector('.username').textContent = message.username;
  element.querySelector('.message').textContent = message.text;
  parent.appendChild(element);
}



function onevent () {
let room = document.querySelector('#room');

room.onclick = () => 
  fetch(app.server)
  .then(res => res.json())
  .then(data => {
    // eslint-disable-next-line no-console
    console.log(data)
    app.clearMessages();
      for(let i = data.length-1; i > -1; i = i-1) {
        if(room.value === data[i].roomname || room.value === '모두보기') {
          let temp = document.querySelector('#temp');
          let parent = document.querySelector('#chats');
          let element = document.importNode(temp.content, true);
          element.querySelector('.username').textContent = data[i].username;
          element.querySelector('.message').textContent = data[i].text;
          parent.appendChild(element);
        }
      }
  })

  let submit = document.querySelector('#submit');
  submit.onclick = () => {
    let newchat = document.querySelector('#newchat');
    let room = document.querySelector('#room');
    let user = document.querySelector('#user');
    let message = {username: user.value, text: newchat.value, roomname: room.value};
    newchat.value = '';
    user.value = '';
    
    app.send(message);

  }
}

onevent();

function loop () {
  let room = document.querySelector('#room');
  fetch(app.server)
  .then(res => res.json())
  .then(data => {
    app.clearMessages();
      for(let i = data.length-1; i > -1; i = i-1) {
        if(room.value === data[i].roomname || room.value === '모두보기') {
          let temp = document.querySelector('#temp');
          let parent = document.querySelector('#chats');
          let element = document.importNode(temp.content, true);
          element.querySelector('.username').textContent = data[i].username;
          element.querySelector('.message').textContent = data[i].text;
          parent.appendChild(element);
        }
      }
  })
}
app.init();
// setInterval(loop, 500);
>>>>>>> project/master
=======
// YOUR CODE HERE:

const app = {
  server: 'http://127.0.0.1:3000/classes/messages',
  init: () => {
    app.addEventHandlers();
    app.fetch((json) => {
      json.forEach(app.renderMessage);
    });
  },
  fetchAndRender: () => {
    app.fetch((data) => {
      data.forEach(app.renderMessage);
    });
  },
  addEventHandlers: () => {
    let submit = document.querySelector('#send .submit');
    if (submit) {
      submit.addEventListener('submit', app.handleSubmit);
    }
  },
  fetch: (callback) => {
    window
      .fetch(app.server)
      .then((resp) => {
        return resp.json();
      })
      .then(callback);
  },
  send: (data, callback) => {
    window
      .fetch(app.server, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => {
        return resp.json();
      })
      .then(callback);
  },
  clearMessages: () => {
    document.querySelector('#chats').innerHTML = '';
  },
  clearForm: () => {
    document.querySelector('.inputUser').value = '';
    document.querySelector('.inputChat').value = '';
  },
  renderMessage: ({ username, text, date, roomname }) => {
    const tmpl = `<div class="chat">
      <div class="username">${username
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</div>
      <div>${text
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</div>
      <div>${date}</div>
      <div>${roomname
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')}</div>
    </div>`;

    document.querySelector('#chats').innerHTML =
      tmpl + document.querySelector('#chats').innerHTML;
  },
  handleSubmit: (e) => {
    e.preventDefault();
    app.clearMessages();
    app.send(
      {
        username: document.querySelector('.inputUser').value,
        text: document.querySelector('.inputChat').value,
        roomname: 'codestates',
      },
      () => {
        app.fetchAndRender();
        app.clearForm();
      }
    );
  },
};

app.init();
>>>>>>> project/master
