const contactModel = require("../models/contactUs");
const sendMail = require("./sendMail");
const config = require("../../config/properties");
const { isEmpty } = require("lodash");

module.exports = {
    addContact: async (req, res) => {
        try {
            let mailOptions = {
                from: config.senderName + "<" + config.senderEmail + ">",
                to: req.body.email,
                subject: "Contact Us",
                html: "Thank You for contacting yaari"
            };
            sendMail
                .sendMail(mailOptions)
                .then(async (result) => {
                    if (result) {
                        console.log(result)
                        await new contactModel({
                            name: req.body.name,
                            email: req.body.email,
                            mobileNumber: req.body.mobileNumber,
                            message: req.body.message,
                            contactType: req.body.contactType,
                            isRegistered:req.body.isRegistered
                        }).save();
                        return res.json({
                            status: true,
                            message: "Thank You for contacting Us.",
                        });
                    } else {
                        return res.status(404).json({
                            status: false,
                            message: "Unable to send email.",
                        });
                    }
                })
                .catch((err) => {
                    return res.status(404).json({
                        status: false,
                        message: "Unable to send email.",
                        result: err,
                    });
                });
        } catch (error) {
            console.log(error)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again",
                error: error
            });
        }
    },
     getContactUsReport: async (req, res) => {
        try {
            // const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            // if (isEmpty(checkRole)) {
            //     return res.status(404).json({
            //         status: true,
            //         message: "Role access not found, please check with admin",
            //         error: {}
            //     })
            // } else {
            //     if (checkRole.permissions.role.view === true) {

             
             
                //var object1 = {isActive: true};
               // var object2 = {event_name: req.query.event_name};
               // var object3 = {city: req.query.city};
                
                var queries = '';
                var conditions = '';
                
              //  queries=JSON.stringify(object1);
                
                
             var qq= JSON.stringify({isActive: true});
 
 
             if(req.query.isRegistered) 
             qq+=  JSON.stringify({isRegistered: req.query.isRegistered});

             if(req.query.contactType) 
             qq+=  JSON.stringify({contactType: req.query.contactType});

             if(req.query.dateStart) 
             qq+=  JSON.stringify({createdAt: {$gte: new Date((req.query.dateStart+'T00:00:00.000Z')),$lte: new Date((req.query.dateEnd+'T00:00:00.000Z'))}}
             );

             var limitFrom=0;
             if(req.query.limitFrom) 
             limitFrom=Number(req.query.limitFrom);
              
             var limitTo=0;
             if(req.query.limitTo) 
             limitTo=Number(req.query.limitTo);
              
             
             
             //var conditions = JSON.parse(qq).replace(/}{/g,","));
    
            var conditions = JSON.parse((qq).replace(/}{/g,","))
       
            if (!isEmpty(conditions)) {

                const FAQS = await contactModel.find(conditions ).sort({updatedAt:-1}).skip(limitFrom).limit(limitTo);
 
                if (!isEmpty(FAQS)) {
                    res.status(200).json({
                        status: true,
                        message: "ContactUs data fetched successfully",
                        result: FAQS
                    })
                } else {
                    res.status(200).json({
                        status: false,
                        message: "No data found",
                        result: conditions
                    })
                }
            }
            /* else if (req.query.type == "supplier") {
                const FAQS = await contactModel.find({ faqType: "supplier", isActive: true });
                if (!isEmpty(FAQS)) {
                    res.status(200).json({
                        status: true,
                        message: "FAQS fetched successfully",
                        result: FAQS
                    })
                } else {
                    res.status(200).json({
                        status: true,
                        message: "No data found",
                        result: FAQS
                    })
                }
            }
            */

            else {
                const FAQS = await contactModel.find({ isActive: true });
                if (!isEmpty(FAQS)) {
                    res.status(200).json({
                        status: true,
                        message: "FAQS fetched successfully",
                        result: FAQS
                    })
                } else {
                    res.status(200).json({
                        status: true,
                        message: "No data found",
                        result: conditions
                    })
                }
            }

            //     } else {
            //         return res.status(404).json({
            //             status: false,
            //             message: "You don't have access to create roles",
            //             error: {}
            //         })
            //     }
            // }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again",
                error: conditions
            });
        }
    },

    getContactUs: async(req, res) => {
        try {
            await contactModel.find().sort("-createdAt")
            .then(result => {
                if(isEmpty(result)){
                    res.status(200).json({
                        status:true,
                        message:"No data found",
                        result:result
                    })
                }else {
                    res.status(200).json({
                        status:true,
                        message:"Data fetch successfully",
                        result:result
                    })
                }
            })
            .catch(error => {
                res.status(404).json({
                    status:false,
                    message:"Something went wrong, please try again",
                    error:error
                })
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again",
                error: error
            });
        }
    }
}