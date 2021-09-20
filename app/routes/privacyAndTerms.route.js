const privacyAndTermsController = require("../controllers/privacyAndTerms");
const jwtTokenVerify = require("../controllers/jwtTokenVerify.js");
module.exports = (app) => {
    app.post("/privacy/create",jwtTokenVerify, privacyAndTermsController.createPrivacy);
    app.put("/privacy/update",jwtTokenVerify,  privacyAndTermsController.updatePrivacy);
    app.get("/privacy/find",  privacyAndTermsController.findAllPrivacy);
    app.post("/terms/create",jwtTokenVerify,  privacyAndTermsController.createTerms);
    app.put("/terms/update",jwtTokenVerify,  privacyAndTermsController.updateTerms);
    app.get("/terms/find",  privacyAndTermsController.findAllTerms);
}