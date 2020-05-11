const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 로그인을 했을 때, 회원정보를 데이터베이스에서 확인하고, 회원의 id를 session에 담아주도록 구현하세요.
    const {email, password} = req.body;

    users.findOne({
      where: {
        email,
        password
      }
    })
    .then(result => {
      if(!result){
        res.status(404).send('unvalid user')
      } else {
      // console.log(`result : ${JSON.stringify(result)}`)
      req.session.user = result
      res.status(200).send({id : req.session.user.id}) // .json으로 보낼 수도 있겠다.
      // console.log({id : req.session.user.id})
      // send 관련 참조 : https://haeguri.github.io/2018/12/30/compare-response-json-send-func/
      }
    })
  }
};