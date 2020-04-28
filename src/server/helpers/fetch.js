const https = require('https');

async function retrieveArticle(url) {
  // TODO: retrieve the html string from given url and return as promise
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let data;
            res.on('data',chunk => {
                data += chunk
            })
                .on('end', () => resolve(data))
                .on('error', err=> reject(err))
        })
    })
}

module.exports = {
  retrieveArticle
};
