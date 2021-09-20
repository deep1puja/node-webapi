const investorController = require("../controllers/investor");
const jwtTokenVerify = require("../controllers/jwtTokenVerify.js");
module.exports = (app) => {
    app.post("/category/createAndUpdate",jwtTokenVerify, investorController.createAndUpdateCategory);
    app.post("/subcategory/createAndUpdate", jwtTokenVerify,investorController.createAndUpdateSubCategory);
    app.post("/investordoc/createAndUpdate",jwtTokenVerify, investorController.createAndUpdateInvestorDoc);
    app.post("/investordoc/createAndUpdate", investorController.createAndUpdateInvestorDoc);
    app.get("/category/find", investorController.findCategory);
    app.get("/subcategory/find", investorController.findSubCategory);
    app.get("/investordoc/find", investorController.findInvestorDoc);
    app.get("/investordoc/findAll", investorController.aggregateInvestorDoc);
   app.get("/investordoc/bycat", investorController.bycats);
   app.get("/investordoc/docs", investorController.docs);

    
}