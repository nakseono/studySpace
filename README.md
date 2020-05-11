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
  - [ ] should redirect {BASE_URL}/ to signout
