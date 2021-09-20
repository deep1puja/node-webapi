const blogController = require("../controllers/blog");
const jwtTokenVerify = require("../controllers/jwtTokenVerify.js");

module.exports = (app) =>{
    app.post("/addBlog",jwtTokenVerify,  blogController.addBlog);
    app.get("/getBlog", blogController.getBlog);
    app.get("/getBlogByTitle", blogController.getBlogByTitle);
    app.get("/getBlogById", blogController.getBlogById);
    app.put("/deleteBlog",jwtTokenVerify, blogController.deleteBlog);
    app.put("/updateBlog",jwtTokenVerify, blogController.updateBlog);
    app.post("/uploadImage", blogController.uploadImage);
}