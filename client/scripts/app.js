// eslint-disable-next-line
const app = {
  server: "http://localhost:3000/"
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