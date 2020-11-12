const util = require("util");

const {
  getDataFromFile,
  getBodyFromGetRequest
} = require("../exercises/01_callBack");

const getDataFromFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    getDataFromFile(filePath, (err, content) => { // 왜 utf8이 안들어가야할까?
      if(err){
        reject(err)
      } else {
        resolve(content)
      }
    })
  })
}

const getBodyFromGetRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    getBodyFromGetRequest(url, (err, body) => { // 왜 'GET' 요청과 '(err, res, body) 에서 res가 안들어가는것일까?
      if(err) {
        reject(err)
      } else {
        resolve(body)
      }
    })
  })
}

module.exports = {
  getDataFromFilePromise,
  getBodyFromGetRequestPromise
};
