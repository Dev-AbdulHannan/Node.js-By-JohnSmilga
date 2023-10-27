const express = require("express");
const router = express.Router(); // it will take care of the routing in express

//***********************************************************************/
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

//Routes
router.get("/", getPeople);
router.post("/", createPerson);
router.post("/postman", createPersonPostman);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

// We can also do it this way
// router.route("/").get(getPeople).post(createPerson);
// router.route("/postman").post(createPersonPostman);
// router.route("/:id").put(updatePerson).delete(deletePerson);
// module.exports = router;
