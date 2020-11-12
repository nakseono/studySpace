<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
# Immersive Prep
=======
# Datastructure
>>>>>>> project/master
=======
## Beesbeesbees
>>>>>>> project/master
=======
## Subclass Dance Party
>>>>>>> project/master
=======
## N-Queens
>>>>>>> project/master
=======
# Hiring Assessments

> 기본적으로 Hiring Assessments의 목적은 이후 코스 과정으로 넘어가기에 적합한 실력과 소양을 갖추고 있는지 스스로 진단 및 확인하는 기회입니다. 코드스테이츠에서 요구하는 아래의 규칙은 여러분들이 다른 유혹의 생각이 들지 않도록 하는 최소한의 장치로 이해해 주시면 좋겠습니다. 수강생 본인이 스스로의 힘으로 이 시험들을 해 내는 것에 큰 의미가 있으며, 본인이 무엇을 알고 무엇을 모르는지 확인하는 시간이 되겠습니다.

## Basic CS Sections Assessments
> 여러분은 이머시브 스프린트 기간 중 총 세 번의 assessments를 치르게 되며 이번 assessments는 첫번째 assessments 입니다.다음 스프린트들에 대해서 점검 해보는 시간을 가지게 됩니다. 또한 객관식 문제가 있습니다. `multiple.md` 파일을 참고하시어 google form을 통해 제출 하시면 됩니다.

1. Immesive Prep
2. Data Structure
3. Inheritance Pattern & OOP
4. Algorithms

## Before Starting

1. 다른 사람들과 상의해서 풀지 마세요.
2. MDN / Offical Document 이외에는 활용할 수 없습니다. (문제와 완전히 동일한 자료가 아니라면 추가적으로도 참고 가능합니다)
3. 이전에 풀었던 코드를 그대로 참고해서 문제를 푸시면 안됩니다. 본인이 참고했던 자료나 글들은 모두 각 문제에 코멘트로 남겨주세요. (링크들을 첨부해주시면 됩니다.)
4. 다른 사람이 제출한 내용을 절대로 참고하지 마세요.
5. Assessment git repository 를 fork & clone 하세요.
6. `student.json`에 수강생분의 기수 이름을 입력해주세요.
7. 객관식 문제 & 코딩 문제는 마감시간까지 반드시 `npm run submit` 및 제출하셔야 합니다. 시험 시간이 종료되기 전에 `npm run submit` 할 시간을 남겨주세요. 또한 제출하기 전에 결과 값을 업데이트 하기 위해 `npm run test` 를 다시 실행해 주시기 바랍니다.
8. 제출 이후에 자신의 origin에 push 해주시기 바랍니다.
9. 시험이 일찍 종료되신 분들은 제출하신 뒤에 일찍 끝내셔도 됩니다.
10. 반드시 모든 문제를 조금이라도 풀려고 시도하시길 바랍니다. 코드를 작성할 시간이 부족하더라도 코멘트를 남겨서 어떤 식으로 풀어가려고 했는지에 대해 작성하시기 바랍니다. 아예 한 문제에 대해서 아무것도 하지않고 그대로 두는것보다는 pseudocode 나 comment 를 작성하는 것이 추후 이의제기(claim)이 필요한 경우 부분 평가를 받을 수도 있습니다.

## Using and Referencing Outside Resources

실무에서 겪을 일들의 주요 특징 중 하나는 작업중인 문제에 딱 맞는 해결책을 인터넷에서 찾기 어려울 수 있다는 점입니다. 물론, 너무 복잡한 부분은 어느정도 무시하고 빠르게 해결책을 찾아 만드는 것은 소프트웨어 엔지니어로서 개발하는데 필요한 스킬 입니다. 하지만 Assessment는 여러분이 해결책을 만들어낼 수 있는 능력이 있는지 확인하는 것 뿐만 아니라, 여러분이 만든 해결책을 잘 이해하고 있는지 점검하는 시간입니다.

따라서 이번 시험에서도 테스트에서는 문제에서 요구하는 부분의 해결책을 직접 알려주는 코드 등 허용된 범위 외의 자료를 참고해서는 안됩니다. 문제를 이해하기 위해 필요한 부분을 검색해 참고하는 건 괜찮습니다.

정직하지않게 시험을 보면, 여러분이 학습한 부분을 얼마나 잘 이해했는지 정확히 진단하기 어렵습니다. 참고한 자료가 본인이 생각하기에 공정한 자료를 참고하지 않았다고 생각되는 경우는 그 자료의 링크를 복사해서 문제의 답안에 넣어주시기 바랍니다.

>>>>>>> project/master
=======
## Chatterbox client
>>>>>>> project/master
=======
## chatterbox server
>>>>>>> project/master
=======
## Recast.ly
>>>>>>> project/master
=======
### Personal Portfolio

이 repository는 여러분이 처음부터 시작해야 합니다. 

과제 제출시  다음과 같은 폴더 구조로 제출해주세요.

    / 
    ├── /server
    │   ├── /public      # React앱을 빌드한 파일
    │   ├── index.js     # node.js로 작성된 웹 서버 진입점
    │   ├── ...          # 기타 여러분들이 필요에 따라 만드는 파일들
    │   └── package.json
    │
    ├── /client
    │   ├── README.md    # create-react-app이 만들어낸 파일
    │   ├── /build       # React앱을 빌드한 파일
    │   ├── /public      # create-react-app이 만들어낸 파일, yarn start로 실행할 시에 쓰입니다
    │   └── /src         # React 컴포넌트가 들어가는 폴더
    │        ├── App.js
    │        ├── App.css
    │        ├── index.js
    │        ├── index.css
    │        ├── ...
    │        └── package.json
    │
    └.gitignore   # gitignore를 이용해서 node_modules가 repository에 포함되지 않도록 하세요
>>>>>>> project/master
=======
## Promises
>>>>>>> project/master
=======
## Article Collector
>>>>>>> project/master
=======
## Database
>>>>>>> project/master
=======
## Shortly Express

- [x] Implemented testcase

  - GET /links
  - POST /links
  - GET /D\*
    <!-- mysql sever 실행 및 shortly database만들어주기, password 설정 -->

- Bare Mininum Requirements
- GET
  - [x] should respond with Success message
- POST /user/signup
  - [x] should respond user info to signup data
  - [x] should respond conflict with existing user email
- POST /user/signin
  - [x] should respond user id to signin data
  - [x] should respond NOT FOUND with unvalid user
- GET /user/info
  - [x] should return user data with request of session.userid
  - [x] should return Unauthorized if request without session.userid
        POST /user/signout
  - [x] should redirect {BASE_URL}/ to signout
>>>>>>> project/master
=======
# Daily Toy Problems
>>>>>>> project/master
