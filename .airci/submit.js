<<<<<<< HEAD
const https = require("https");
const colors = require('colors')

// Get sutdent data and test results from student.json & result.json
let studentInfo = require("../student.json");
let testResult = require("../results.json")
let { th, name, sprint } = studentInfo;
<<<<<<< HEAD
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
=======
let { numPassedTests, numFailedTests } = testResult;
let passed = numPassedTests;
let failed = numFailedTests;
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
<<<<<<< HEAD
>>>>>>> project/master
=======
>>>>>>> project/master
=======
>>>>>>> project/master
    res.on("end", () => {
      resolve(JSON.parse(data.toString()))
    });
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

  req.on("error", e => {
    throw new Error("data did not submit correctly");
  });

=======
=======
>>>>>>> project/master
=======
>>>>>>> project/master
    
  req.on("error", e => {
    throw new Error("data did not submit correctly");
  });
    
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> project/master
=======
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
<<<<<<< HEAD

=======
    
>>>>>>> project/master
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
<<<<<<< HEAD
})
=======
})
>>>>>>> project/master
=======
const https = require('https');
require('colors');
(() => {
  try {
    const { th, name, sprint } = require('../student.json');
    const clientResult = require('../client/client-result.json');
    const serverResult = require('../server/server-result.json');

    if (!clientResult || !serverResult) {
      throw new Error('테스트 정보가 부족합니다. 테스트를 실행 해주세요');
    }
    console.log(
      [
        '',
        `클라이언트 테스트 결과 ${clientResult.passed +
          clientResult.failed}개 중 ${clientResult.passed}개 통과`.green,
        '',
        `서버 테스트 결과 ${serverResult.passed + serverResult.failed}개 중 ${
          serverResult.passed
        }개 통과`.green
      ].join('\n')
    );
    if (
      th === '기수를 숫자만! 입력해주세요! 예)10' ||
      isNaN(Number(th))
    ) {
      throw new Error('기수 정보를 정확히 입력 해주세요');
    }
    if (
      name ===
      '스프린트를 진행하는 수강생분의 이름을 한글로! 적어주세요! 예)존도우'
    ) {
      throw new Error('성함을 정확히 입력 해주세요');
    }
    const options = {
      hostname: 'dnl7koxsek.execute-api.ap-northeast-2.amazonaws.com',
      path: '/default/im-submit',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const result = new Promise((resolve, reject) => {
      const req = https.request(options, res => {
        let data = '';

        if (res.statusCode === 500) {
          throw new Error('There is an error on submiting');
        }

        res.on('data', chunk => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(JSON.parse(data.toString()));
        });
      });

      req.on('error', e => {
        throw new Error('data did not submit correctly');
      });

      // send the request
      req.write(
        JSON.stringify({
          fields: {
            class: th,
            name: name,
            sprint: sprint,
            passed: clientResult.passed + serverResult.passed,
            failed: clientResult.failed + serverResult.failed
          }
        })
      );
      req.end();
    });

    result
      .then(result => {
        if (clientResult.failed + serverResult.failed) {
          console.log(
            '정상적으로 제출이 되었지만 통과하지 못한 테스트가있습니다.',
            '\n테스트가 모두 통과할 수 있도록 도전해보세요!'.rainbow
          );
        } else {
          console.log(
            '정상적으로 제출이 되었고 모든 테스트를 통과하였습니다.'.rainbow
          );
        }
      })
      .catch(error => {
        console.log(error);
        console.log('제출이 실패했습니다. 다시 한 번 제출해주세요.'.magenta);
      });
  } catch (e) {
    console.error(
      [
        '---------------------------',
        '',
        '** 에 러 발 생 **'.yellow,
        '',
        e.message.red,
        ''
      ].join('\n')
    );
  }
})();
>>>>>>> project/master
