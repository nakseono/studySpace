const { users } = require('../../models');

module.exports = {
  post: (req, res) => {
    // TODO : 유저가 회원가입을 했을 때, 회원정보를 데이터베이스에 저장하도록 구현하세요.
    const {username, email, password} = req.body;
    
    users.findOrCreate({
      where: {
        email
      },
      defaults: {
        username,
        password
      }
    })
    .then(([result, created]) => {
      if(!created){
        return res.status(409).send('Already exists user')
      }
      return res.status(200).send(result);
    })
    
    .catch(error => {
      console.log(error)
      res.status(500)
    })
  }
};