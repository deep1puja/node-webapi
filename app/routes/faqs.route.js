const faqController = require("../controllers/faqs");
const jwtTokenVerify = require("../controllers/jwtTokenVerify.js");

const vaVerify = require("../controllers/vaVerify");

module.exports = (app) => {
    app.post("/addFAQ",jwtTokenVerify, faqController.addFaqs);
    app.get("/getFAQ", vaVerify,faqController.getFaqs);
    app.put("/deleteFAQ",jwtTokenVerify, faqController.deleteFaqs);
    app.put("/updateFAQ",jwtTokenVerify, faqController.updateFaqs);
}