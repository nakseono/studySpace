## Chat Client

chat client assignment 는 test case 가 없습니다.

This repository is a chat-client like the one you built for Chatterbox Client. It has a (mostly) completed HTML/CSS user interface, but is missing a critical feature:

go visit https://jsonplaceholder.typicode.com and see the fake api resource for posts (GET)
You will use this resource for this assessment. 해당 링크를 방문하여 fake api resource 들을 알아보세요.

- [ ] Inside `js/setup.js`, find and implement fetch function that fetchs posts which are array of title and body json data 서버로부터 title 과 body 로 이루어진 array data 를 받아오는 함수를 구현해 보세요
- [ ] As soon as you fetch the data, update the DOM so that you can see fetched posts with title and body in order of psot id. Please apply your own style to make it pretty. data fetch가 성공하면 바로 DOM에 title 과 body로 이루어진 data array를 post id 순서대로 그려보세요. 여러분들만의 스타일을 적용하여 꾸며 보세요.

Note that this is an exercise in reading api document and reading code, so expect to spend most of your time figuring out where to make changes and try to write as little code as possible

### Available Resources for this Prompt

- jQuery docs
- MDN
- https://jsonplaceholder.typicode.com
