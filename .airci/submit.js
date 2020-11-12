const https = require("https");
const colors = require('colors')

// Get sutdent data and test results from student.json & result.json
let studentInfo = require("../student.json");
let testResult = require("../results.json")
let { th, name, sprint } = studentInfo;
<<<<<<< HEAD
<<<<<<< HEAD
let { passed, failed } = testResult;
=======
let { numPassedTests, numFailedTests } = testResult;
let passed = numPassedTests;
let failed = numFailedTests;
>>>>>>> project/master
=======
let { passed, failed } = testResult
>>>>>>> project/master

console.log(['테스트 결과입니다.', `통과된 테스트: ${passed}`.green, `통과하지 못한 테스트: ${failed}`.red].join('\n'))

const options = {
  hostname: "dnl7koxsek.execute-api.ap-northeast-2.amazonaws.com",
  path: "/default/im-submit",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  }
};
<<<<<<< HEAD
<<<<<<< HEAD

const result = new Promise((resolve, reject) => {
  const req = https.request(options, res => {
    let data = '';

    if (res.statusCode === 500) {
      throw new Error("There is an error on submiting")
    }

    res.on("data", chunk => {
      data += chunk;
    });

=======
=======
>>>>>>> project/master
    
const result = new Promise((resolve, reject) => {
  const req = https.request(options, res => {
    let data = '';
    
    if (res.statusCode === 500) {
      throw new Error("There is an error on submiting")
    }
    
    res.on("data", chunk => {
      data += chunk;
    });
    
<<<<<<< HEAD
>>>>>>> project/master
=======
>>>>>>> project/master
    res.on("end", () => {
      resolve(JSON.parse(data.toString()))
    });
  });
<<<<<<< HEAD
<<<<<<< HEAD

  req.on("error", e => {
    throw new Error("data did not submit correctly");
  });

=======
=======
>>>>>>> project/master
    
  req.on("error", e => {
    throw new Error("data did not submit correctly");
  });
    
<<<<<<< HEAD
>>>>>>> project/master
=======
>>>>>>> project/master
  // send the request
  req.write(
    JSON.stringify({
      fields: {
        class: th,
        name: name,
        sprint: sprint,
        passed,
        failed
      }
    })
  );
  req.end();
})
<<<<<<< HEAD
<<<<<<< HEAD

=======
    
>>>>>>> project/master
=======
    
>>>>>>> project/master
result.then(result => {
  if (failed !== 0) {
    console.log('정상적으로 제출이 되었지만 통과하지 못한 테스트가있습니다.'.blue, '\n테스트가 모두 통과할 수 있도록 도전해보세요!'.rainbow)
  } else {
    console.log('정상적으로 제출이 되었고 모든 테스트를 통과하였습니다.'.rainbow)
  }
}).catch(error => {
  console.log('제출이 실패했습니다. 다시 한 번 제출해주세요.'.magenta)
})
