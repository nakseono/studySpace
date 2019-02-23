import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { YOUTUBE_API_KEY } from "../config/youtube.example";
import { searchYouTube } from "./searchYouTube";

ReactDOM.render(
  <App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />,
  document.getElementById("app")
);
