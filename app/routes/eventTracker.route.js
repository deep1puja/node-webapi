const eventTracker = require("../controllers/eventTracker");
const jwtTokenVerify = require("../controllers/jwtTokenVerify.js");

module.exports = (app) => {
 // app.post("/setEvent",jwtTokenVerify, faqController.addFaqs);
   app.post("/setEvent", eventTracker.setEvent);
   app.get("/getEvent", jwtTokenVerify,eventTracker.getEvent);
     
}