const contactUs = require("../controllers/contactUs");
const jwtTokenVerify = require("../controllers/jwtTokenVerify.js");

module.exports = (app) => {
    app.post("/contactUs", contactUs.addContact);
   app.get("/getContactUs", jwtTokenVerify, contactUs.getContactUs);
   app.get("/getContactUsReport", jwtTokenVerify,contactUs.getContactUsReport);

    
}