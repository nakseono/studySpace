const express = require("express");
const fs = require("fs");
const jsdom = require("jsdom");

const fetchHelper = require("../helpers/fetch");
const fileHelper = require("../helpers/file");

const router = express.Router();
const { JSDOM } = jsdom;

// GET /data/{lineNo}
router.get("/:line", async (req, res) => {
  const filename = `./data/${req.params.line}.txt`;
  res.set("Content-Type", "application/json");
  // TODO : Help function을 이용하여, 주어진 filename의 내용을 읽을 수 있도록 구현하세요.
  /*
   * fs.existsSync 를 이용하여, 존재하지 않는 파일에 대해서 에러 핸들링을 할 수 있어야 합니다.
   */
  if(fs.existsSync(filename)){
    fileHelper.readFile(filename)
        .then(text => {
          res.status(200).send({id: req.params.line, body: text})
        })
        .catch(err => res.send('error'+ err))
  }else{
    let result = {
      id : req.params.line,
      status : 'nonexist'
    }
    res.send(result)
  }

});

// POST /data/{lineNo}
router.post("/:line", async (req, res) => {
    const lineNo = req.params.line;
    const filename = `./data/${lineNo}.txt`;
    const url = await fileHelper.readLineFromSourceList(lineNo)
    const content = await fetchHelper.retrieveArticle(url)
    const document = new JSDOM(content)
    const articleContent = document.window.document.querySelector(".sc-kgAjT gXJKuQ sc-gGBfsJ kVIKkh").innerHTML
    var artDucument = JSDOM.jsdom(articleContent, null, {
      features: {
        querySelector: true
      }
    })
    await fileHelper.writeFile(filename, artDucument)

    res.status(201).send('ok')



  // TODO : Help function을 이용하여, 주어진 filename에 내용을 저장할 수 있도록 구현하세요.
  /*
   * Hint : Helper function(readLineFromSourceList, retrieveArticle, wrtieFile)이 필요할 것 입니다.
   * 1) 주어진 lineNo를 통해, 해당 line에 존재하는 url를 얻는다.
   * 2) url을 통해, article contents를 얻어낸다. ( JSDOM을 이용하여, medium 블로그의 글 내용을 얻을 수 있도록 하세요.)
   * 3) 얻어낸 article contents를 저장한다. (ex : filename , data/${lineNo}.txt)
   */
});

module.exports = router;
