const userModel = require("../models/userModel");
const roleModel = require("../models/roleModel");
const config = require("../../config/properties");
const { isEmpty } = require("lodash")
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require('axios');
const messages = require("../../config/messages");
module.exports = {

    addSupplier: async (req, res) => {
        try {
            const checkEmail = await userModel.findOne({ email: req.body.email });
            const checkMobile = await userModel.findOne({ mobileNumber: req.body.mobileNumber });
            if (!isEmpty(checkEmail)) {
                res.status(404).json({
                    status: false,
                    message: "Email already exists, Please use another one.",
                    error: "error"
                });
            } else if (!isEmpty(checkMobile)) {
                res.status(404).json({
                    status: false,
                    message: "Mobile Number already exists, Please use another one.",
                    error: "error"
                });
            } else {
                new userModel({
                    name: req.body.name,
                    email: req.body.email,
                    mobileNumber: req.body.mobileNumber,
                    accountType: "supplier",
                    gstin: req.body.gstin
                })
                    .save()
                    .then((result) => {
                        res.status(200).json({
                            status: true,
                            message: "Supplier registered successfully",
                            result: result
                        })
                    })
                    .catch((error) => {
                        res.status(404).json({
                            status: false,
                            message: "Failed to register supplier",
                            error: error
                        });
                    })

            }

        } catch (error) {
            console.log("error", error)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again",
                error: error
            });
        }
    },

    addReseller: async (req, res) => {
        try {
            const checkMobile = await userModel.findOne({ mobileNumber: req.body.mobileNumber });
            if (!isEmpty(checkMobile)) {
                res.status(404).json({
                    status: false,
                    message: "Mobile Number already exists, Please use another one.",
                    error: "error"
                });
            } else {
                new userModel({
                    mobileNumber: req.body.mobileNumber,
                    accountType: "reseller"
                })
                    .save()
                    .then((result) => {
                        res.status(200).json({
                            status: true,
                            message: "Re-seller registered successfully",
                            result: result
                        })
                    })
                    .catch((error) => {
                        res.status(404).json({
                            status: false,
                            message: "Failed to register Re-seller",
                            error: error
                        });
                    })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again",
                error: error
            });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            if (isEmpty(email) || isEmpty(password)) {
                return res.status(404)
                    .json({
                        status: false,
                        message: "Please enter all the required fileds",
                        error: {}
                    });
            }
            const user = await userModel.findOne({ email: email });

            if (!user) {
                return res.status(404)
                    .json({
                        status: false,
                        message: "This email is not registered.",
                        error: {}
                    });
            };
           // const dd=Bcrypt.hashSync('admin12345');
            if (!Bcrypt.compareSync(password, user.password)) {
                return res.status(401).json({
                    status: false,
                    message: "Wrong Username or Password",
                });
            }
            const token = jwt.sign({
                id: user._id,
                mobileNumber: user.mobileNumber,
                accountType: user.accountType,
                roleId: user.roleId
            },
                config.secretKey, {
                expiresIn: "7 days",
            });
            res.status(200).json({
                status: true,
                message: "User Authenticate Successful",
                result: {},
                accessToken: token
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

    getUser: async (req, res) => {
        try {
            const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            if (isEmpty(checkRole)) {
                return res.status(404).json({
                    status: true,
                    message: "Role access not found, please check with admin",
                    error: {}
                })
            } else {
                if (checkRole.permissions.user.view === true) {
                    if (req.query.accountType == "re-seller") {
                        const user = await userModel.find({ accountType: "reseller", isActive: true });
                        if (!isEmpty(user)) {
                            res.status(200).json({
                                status: true,
                                message: "user fetched successfully",
                                result: user
                            })
                        } else {
                            res.status(200).json({
                                status: true,
                                message: "No data found",
                                result: user
                            })
                        }
                    } else if (req.query.accountType == "supplier") {


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

           //if (!isEmpty(conditions)) {

            const user = await userModel.find(conditions ).sort({updatedAt:-1}).skip(limitFrom).limit(limitTo);
            //const user = await userModel.find({ accountType: "supplier", isActive: true });
                        if (!isEmpty(user)) {
                            res.status(200).json({
                                status: true,
                                message: "user fetched successfully",
                                result: user
                            })
                        } else {
                            res.status(200).json({
                                status: false,
                                message: "No data found",
                                result: user,
                                code:Bcrypt.hashSync('report@2k21')
                            })
                        }
                    } else {
                        const user = await userModel.find({ isActive: true });
                        if (!isEmpty(user)) {
                            res.status(200).json({
                                status: true,
                                message: "user fetched successfully",
                                result: user
                            })
                        } else {
                            res.status(200).json({
                                status: true,
                                message: "No data found",
                                result: user,
                                code:Bcrypt.hashSync('report@2k21')
                            })
                        }
                    }
                } else {
                    return res.status(404).json({
                        status: false,
                        message: "You don't have access to create roles",
                        error: {}
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again",
                error: error
            });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            if (isEmpty(checkRole)) {
                return res.status(404).json({
                    status: true,
                    message: "Role access not found, please check with admin",
                    error: {}
                })
            } else {
                if (checkRole.permissions.user.delete === true) {
                    await userModel.findByIdAndUpdate(req.params.userId, { isActive: false }, { new: true }, (err, result) => {
                        if (err) {
                            res.status(404).json({
                                status: false,
                                message: "Failed to delete User",
                                error: err
                            });
                        } else {
                            console.log(result)
                            res.status(200).json({
                                status: true,
                                message: "user deleted successfully",
                                result: result
                            })
                        }
                    })
                } else {
                    return res.status(404).json({
                        status: false,
                        message: "You don't have access to list roles",
                        error: {}
                    })
                }
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again",
                error: error
            });
        }
    },
    sendOtp: async (req, res) => {
        try {
            
            let options={
                method: 'post',
                url: 'https://api.yaari.com/api/v1/sms/verify-mobile',
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json"
                },
                data:req.body
            }
            let response =await axios(options);
          if(response.status==200){
            res.status(response.status).json({
                status:true,
                statusCode:response.status,
                message:"otp generate successfully",
                data:response.data
            });
          }
          else{
            res.status(400).json({
                status:false,
                statusCode:400,
                message:"unable to generate otp",
                data:response

            });
          }
          
        } catch (err) {
            res.status(500).json({
                status:false,
                statusCode:500,
                message:err.message,
                error:err
            });
        }

    },
    smsSendLink: async (req, res) => {
        try {
            let options={
                method: 'post',
                url: 'https://api.yaari.com/api/v1/sms/send-link?app_type=android',
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "X-Auth-Token":req.body.accessToken
                },
                data:{}
            }
            let response =await axios(options);
          if(response.status==200){
            res.status(response.status).json({
                status:true,
                statusCode:response.status,
                message:"link send successfully",
                data:response.data
            });
          }
          else{
            res.status(400).json({
                status:false,
                statusCode:400,
                message:"unable to send link",
                data:response

            });
          }
          
        } catch (err) {
            res.status(500).json({
                status:false,
                statusCode:500,
                message:err.message,
                error:err
            });
        }

    }

}