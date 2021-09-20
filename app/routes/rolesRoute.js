const roles = require("../controllers/roles");
const jwtTokenVerify = require("../controllers/jwtTokenVerify.js");

module.exports= (app) => {
    app.post("/createRole",jwtTokenVerify, roles.createRole);
    app.post("/deleteRole", jwtTokenVerify, roles.deleteRole);
    app.post("/updateRole", jwtTokenVerify, roles.updateRole);
    app.get("/getAllRole", jwtTokenVerify, roles.getAllRoles);
    app.get("/getRoleById", jwtTokenVerify, roles.findById);

}