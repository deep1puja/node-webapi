const fileUploadController = require("../controllers/fileUpload");
const jwtTokenVerify = require("../controllers/jwtTokenVerify.js");

module.exports = (app) => {
    app.post("/file/upload",jwtTokenVerify, fileUploadController.fileUpload);
}