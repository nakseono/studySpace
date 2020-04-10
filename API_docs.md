# chatterbox-server API docs

## describe your API server

- 클라이언트가 서버의 API를 활용할 수 있게 api server에 대한 문서를 작성 해주세요.
- ex)

| Method | URL               | Body                                            | response                                             |
| ------ | ----------------- | ----------------------------------------------- | ---------------------------------------------------- |
| get    | /classes/messages | null                                            | `{results:[]}`                                       |
| post   | /classes/messages | `{username:'codestates',message:'hello world'}` | `{id:1,username:'codestates',message:'hello world'}` |

GET
     
서버에 있는 데이터를 리턴해준다

```js
      [
        {
            "username": "??",
            "text": "심해",
            "roomname": "로비",
            "id" : 0
        },
        {
            "username": "번역기",
            "text": "한글",
            "roomname": "코드스테이츠",
            "id" : 1
        },
        {
            "username": "밤",
            "text": "25번째밤",
            "roomname": "모두보기",
            "id" : 2
        }
      ]
```

POST

메세지를 객체형식으로 post 요청을 한다.

```js

 {
     "username" : "광남이"
     "text" :  "역시는 역시군"
     "roomname" : "킬베로스"
 }


```






























