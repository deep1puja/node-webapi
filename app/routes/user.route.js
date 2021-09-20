const user = require("../controllers/users");
const jwtTokenVerify = require("../controllers/jwtTokenVerify.js");

module.exports = (app) => {
    app.post("/addSupplier",user.addSupplier);
    app.post("/addReseller",user.addReseller);
    app.post("/login",user.login);
    app.get("/getUsers",jwtTokenVerify, user.getUser);
    app.delete("/deleteUser/:userId",jwtTokenVerify, user.deleteUser);
    app.post("/users/send-otp",user.sendOtp);
    app.post("/users/sms-link",user.smsSendLink);
   // app.post("/setuser",user.setUser);


    
}