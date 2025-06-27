const router = require("express").Router();
const userController = require("../controller/user")


router.get("/", userController.homepageController);
router.post("/user",userController.userDataController);
router.get("/userAlldata",userController.userAllDataController)

module.exports = router;