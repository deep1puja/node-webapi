const homeController = require("../controllers/home");
const jwtTokenVerify = require("../controllers/jwtTokenVerify.js");
module.exports = (app) => {
    app.post("/home/AboutSection/create",jwtTokenVerify, homeController.createAboutSection);
    app.put("/home/AboutSection/update", jwtTokenVerify, homeController.updateAboutSection);
    app.get("/home/AboutSection/findOne", homeController.findByIdAboutSection);
    app.get("/home/AboutSection/find", homeController.findAllAboutSection);

    app.post("/home/BannerSection/create",jwtTokenVerify, homeController.createBannerSection);
    app.put("/home/BannerSection/update",jwtTokenVerify, homeController.updateBannerSection);
    app.get("/home/BannerSection/findOne", homeController.findByIdBannerSection);
    app.get("/home/BannerSection/find", homeController.findAllBannerSection);

    app.post("/home/HowToEarnSection/create",jwtTokenVerify, homeController.createHowToEarnSection);
    app.put("/home/HowToEarnSection/update",jwtTokenVerify, homeController.updateHowToEarnSection);
    app.get("/home/HowToEarnSection/findOne", homeController.findByIdHowToEarnSection);
    app.get("/home/HowToEarnSection/find", homeController.findAllHowToEarnSection);

    app.post("/home/OurFamilySection/create",jwtTokenVerify, homeController.createOurFamilySection);
    app.put("/home/OurFamilySection/update",jwtTokenVerify, homeController.updateOurFamilySection);
    app.get("/home/OurFamilySection/findOne", homeController.findByIdOurFamilySection);
    app.get("/home/OurFamilySection/find", homeController.findAllOurFamilySection);

    app.post("/home/OurPartnerSection/create",jwtTokenVerify, homeController.createOurPartnerSection);
    app.put("/home/OurPartnerSection/update",jwtTokenVerify, homeController.updateOurPartnerSection);
    app.get("/home/OurPartnerSection/findOne", homeController.findByIdOurPartnerSection);
    app.get("/home/OurPartnerSection/find", homeController.findAllOurPartnerSection);

    app.post("/home/BenefitSection/create",jwtTokenVerify, homeController.createBenefitSection);
    app.put("/home/BenefitSection/update",jwtTokenVerify, homeController.updateBenefitSection);
    app.get("/home/BenefitSection/findOne", homeController.findByIdBenefitSection);
    app.get("/home/BenefitSection/find", homeController.findAllBenefitSection);

    app.post("/home/WhySection/create",jwtTokenVerify, homeController.createWhySection);
    app.put("/home/WhySection/update",jwtTokenVerify, homeController.updateWhySection);
    app.get("/home/WhySection/findOne", homeController.findByIdWhySection);
    app.get("/home/WhySection/find", homeController.findAllWhySection);

}