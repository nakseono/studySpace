const express = require("express");
const fileHelper = require("../helpers/file");

const router = express.Router();

// GET /source
router.get("/", async (req, res) => {
  // TODO: Help function을 이용하여, source.txt의 내용을 반환 수 있도록 구현하세요.
    fileHelper.readSourceListFile()
        .then(data => {
            res.send(data)
        })
});

// POST /source
router.post("/", async (req, res) => {
  // TODO: Help function을 이용하여, source.txt의 내   용으로 저장할 수 있도록 구현하세요.
  await fileHelper.writeSourceListFile(req.body)
    res.send()

});

module.exports = router;
