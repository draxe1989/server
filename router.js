const Router = require("express");
const { get, post } = require("./controller");

const router = new Router();

router.post("/post", post);
router.get("/get", get);

module.exports = router;
