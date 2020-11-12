const mocha = require('mocha');
const fs = require('fs')
<<<<<<< HEAD
const colors = require('colors')
=======
>>>>>>> project/master

module.exports = MyReporter;

function MyReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  let passed = 0;
  let failed = 0;

  runner.on('pass', function() {
    passed++;
  });

  runner.on('fail', function() {
    failed++;
  });

  runner.on('end', function() {
    const result = {
      passed,
      failed
    }
<<<<<<< HEAD
    console.log(['테스트 기록 결과입니다.', `기록된 통과 테스트: ${passed}`.green, `기록된 통과하지 못한 테스트: ${failed}`.red].join('\n'))
=======
>>>>>>> project/master
    fs.writeFileSync('results.json', JSON.stringify(result));
  });
}
