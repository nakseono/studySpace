<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import FishTable from "./FishTable";

var fishData = [
  {
    name: "Goldfish",
    image: "http://tinyurl.com/n4vgcl5",
    description: "Everyone's first pet"
  },
  {
    name: "Pufferfish",
    image: "http://tinyurl.com/kxd7cuu",
    description: "So puffy!"
  },
  {
    name: "Tuna",
    image: "http://tinyurl.com/zgs7z2s",
    description: "Why are these things so huge? THey're terrifying."
  }
];
ReactDOM.render(
  <FishTable fishes={fishData} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
=======
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { YOUTUBE_API_KEY } from '../config/youtube';

// const title = 'hello world';
console.log(App);
console.log(YOUTUBE_API_KEY);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
>>>>>>> project/master
