<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { exec } = require("child_process");
const https = require("https");
=======
const { exec } = require("child_process");
const getTodaysScript = require("./getdailyscript");
const axios = require("axios");

>>>>>>> project/master
const { URCLASS_URL, ASSESSMENT_ID, TRAVIS_PULL_REQUEST_SLUG } = process.env;

if (TRAVIS_PULL_REQUEST_SLUG === "\n") {
  throw new Error("github username is missing");
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
exec("jest --json", (err, json, stderr) => {
=======
exec("mocha ./test/**/*.js --reporter json", (err, json, stderr) => {
>>>>>>> project/master
=======
exec("mocha spec/test.js --reporter json", (err, json, stderr) => {
>>>>>>> project/master
=======
exec("mocha ./__test__/test.mocha.js --reporter json", (err, json, stderr) => {
>>>>>>> project/master
=======
exec("mocha __test__/test.mocha.js --reporter json", (err, json, stderr) => {
>>>>>>> project/master
=======
exec("jest --json", (err, json, stderr) => {
>>>>>>> project/master
=======
exec("jest --json", (err, json, stderr) => {
>>>>>>> project/master
=======
exec("jest --json", (err, json, stderr) => {
>>>>>>> project/master
  const result = JSON.parse(json);
  const username = TRAVIS_PULL_REQUEST_SLUG.split("/")[0];

  const options = {
    hostname: URCLASS_URL,
    path: `/Prod/submit/`,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
=======
=======
>>>>>>> project/master
const { exec } = require('child_process');
const https = require('https');
const { URCLASS_URL, ASSESSMENT_ID, TRAVIS_PULL_REQUEST_SLUG } = process.env;

if (TRAVIS_PULL_REQUEST_SLUG === '\n') {
  throw new Error('github username is missing');
}
<<<<<<< HEAD

exec('jest ./__test__/index.test.js --json', (err, json, stderr) => {
  const result = JSON.parse(json);
  const username = TRAVIS_PULL_REQUEST_SLUG.split('/')[0];

  const options = {
    hostname: URCLASS_URL,
    path: `/production/submit/sprint`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
>>>>>>> project/master
  };

  console.log(JSON.stringify(options));
  console.log(result);

  const body = {
    assessment_id: ASSESSMENT_ID,
    githubUsername: username,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    type: "mocha",
>>>>>>> project/master
=======
    type: "mocha",
>>>>>>> project/master
=======
    type: "mocha",
>>>>>>> project/master
=======
    type: "mocha",
>>>>>>> project/master
=======
>>>>>>> project/master
=======
>>>>>>> project/master
=======
>>>>>>> project/master
    result: result
=======
    result: result,
>>>>>>> project/master
  };

  makeRequest(options, body);
});

function makeRequest(options, body) {
<<<<<<< HEAD
  const req = https.request(options, res => {
    let data;
    res.on("data", chunk => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("data from urclass is ", data);
      if (res.statusCode >= 400) {
        if (res.statusCode === 400) {
          throw new Error("invalid github username.");
        }
        throw new Error("There is an error on response from urclass.");
=======
=======
exec(
  'node ./node_modules/.bin/mocha ./__test__/spec.js --reporter json --exit',
  (err, json, stderr) => {
    const result = JSON.parse(json);
    const username = TRAVIS_PULL_REQUEST_SLUG.split('/')[0];

    const options = {
      hostname: URCLASS_URL,
      path: `/production/submit/sprint`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
=======
(async function() {
  let resp = await getTodaysScript();
  console.log(resp.data);
  executeScript(resp.data);
})();

function executeScript(obj) {
  exec(obj.script, (err, json, stderr) => {
    const result = JSON.parse(json);
    const username = TRAVIS_PULL_REQUEST_SLUG.split("/")[0];

    const options = {
      baseURL: `https://${URCLASS_URL}`,
      url: `/Prod/submit`,
      method: "post",
      headers: {
        "Content-Type": "application/json"
      }
>>>>>>> project/master
    };

    console.log(JSON.stringify(options));
    console.log(result);

    const body = {
<<<<<<< HEAD
      assessment_id: ASSESSMENT_ID,
      githubUsername: username,
      type: 'mocha',
      result: result,
    };

    makeRequest(options, body);
  }
);

function makeRequest(options, body) {
>>>>>>> project/master
  const req = https.request(options, (res) => {
    let data;
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      console.log('data from urclass is ', data);
      if (res.statusCode >= 400) {
        if (res.statusCode === 400) {
          throw new Error('invalid github username.');
        }
        throw new Error('There is an error on response from urclass.');
<<<<<<< HEAD
>>>>>>> project/master
=======
>>>>>>> project/master
      }
    });
  });

<<<<<<< HEAD
<<<<<<< HEAD
  req.on("error", e => {
    console.log(e);
    throw new Error("data did not send to urclass");
=======
  req.on('error', (e) => {
    console.log(e);
    throw new Error('data did not send to urclass');
>>>>>>> project/master
=======
  req.on('error', (e) => {
    console.log(e);
    throw new Error('data did not send to urclass');
>>>>>>> project/master
  });

  req.write(JSON.stringify(body));
  req.end();
=======
      assessment_id: obj.uuid,
      githubUsername: username,
      type: "mocha",
      result: result
    };

    makeRequest(options, body);
  });
}

function makeRequest(options, body) {
  options.data = body;
  console.log(options);
  axios(options)
    .then(resp => {
      console.log(resp.status);
      if (resp.status >= 400) {
        if (resp.status === 400) {
          throw new Error("invalid github username.");
        }
        throw new Error("There is an error on response from urclass.");
      }
      console.log("data from urclass is ", resp.data);
    })
    .catch(e => {
      console.log(e);
      throw new Error("data did not send to urclass");
    });
>>>>>>> project/master
}
