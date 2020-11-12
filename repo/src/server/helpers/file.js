const fs = require("fs");

async function writeFile(filename, body) {
  return new Promise((resolve, reject) => {
    // TODO: 특정 파일이름(filename)을 가진 텍스트를 저장할 수 있도록 구현하세요.
    fs.writeFile(filename, body, (err) => {
      if(err){
        reject(err)
      }else{
        // eslint-disable-next-line no-console
        console.log(body)
        resolve(body)
      }
    })
  });
}

async function readFile(filename) {
  return new Promise((resolve, reject) => {
    // TODO: 특정 파일이름(filename)을 가진 텍스트를 읽을 수 있도록 구현하세요.
    fs.readFile(filename, 'utf8', (err, body) => {
      if(err){
        reject(err)
      }else{
        resolve(body)
      }
    })
  });
}

async function readSourceListFile() {
  return readFile("./data/source.txt");
}

async function writeSourceListFile(body) {
  return writeFile("./data/source.txt", body);
}

async function readLineFromSourceList(nthline) {
  return new Promise((resolve, reject) => {
    // TODO : ./data/source.txt에 저장되어 있는 텍스트에서 특정 줄에 해당하는 텍스트를 읽을 수 있도록 구현하세요.
    readSourceListFile()
        .then(data => {
          let arr = data.split('\n')
          resolve(arr[nthline])
        })
        .catch(err => reject(err))
  });
}

module.exports = {
  readSourceListFile,
  writeSourceListFile,
  writeFile,
  readFile,
  readLineFromSourceList
};
