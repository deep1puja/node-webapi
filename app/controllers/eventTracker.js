const roleModel = require("../models/roleModel");
const eventsTecks = require("../models/eventTracker");
const { isEmpty } = require("lodash");

module.exports = {
    setEvent: async (req, res) => {
        try {
           // const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
           
                if (1) {
                    const eventTs = new eventsTecks({
                        event_type: req.body.event_type,
                        event_name: req.body.event_name,
                        event_page: req.body.event_page,
                        ip: req.body.ip,
                        country: req.body.country,
                        region: req.body.region,
                        city: req.body.city,
                        pin_code: req.body.pin_code,
                        lat_long: req.body.lat_long,
                      
                    });
                    eventTs.save((err, data) => {
                        if (err) {
                            res.status(404).json({
                                status: false,
                                message: "Failed to track Events",
                                error: err,
                            });
                        } else {
                            return res.status(200).json({
                                status: true,
                                message: "Event tracked",
                                result: data,
                            });
                        }
                    })
                } else {
                    return res.status(404).json({
                        status: false,
                        message: "You don't have access to create roles",
                        error: {}
                    })
                }
            
        } catch (error) {
            console.log(err)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again",
                error: error
            });
        }
    },
  
    getEvent: async (req, res) => {
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
 

             if(req.query.event_type) 
             qq+=  JSON.stringify({event_type: req.query.event_type});

             if(req.query.event_name) 
             qq+=  JSON.stringify({event_name: req.query.event_name});
            
             if(req.query.city) 
             qq+=  JSON.stringify({city: req.query.city});

             if(req.query.event_page) 
             qq+=  JSON.stringify({event_page: req.query.event_page});

             if(req.query.dateStart) 
             qq+=  JSON.stringify({updatedAt: {$gte: new Date((req.query.dateStart+'T00:00:00.000Z')),$lte: new Date((req.query.dateEnd+'T00:00:00.000Z'))}}
             );

             var limitFrom=0;
             if(req.query.limitFrom) 
             limitFrom=Number(req.query.limitFrom);
              
             var limitTo=0;
             if(req.query.limitTo) 
             limitTo=Number(req.query.limitTo);
              
             
             
             //var conditions = JSON.parse(qq).replace(/}{/g,","));
    
            var conditions = JSON.parse((qq).replace(/}{/g,","))
               // if(req.query.event_name) 
               //    conditions.push({ 'event_name': req.body.event_name });
               //   JSON.parse((JSON.stringify(object1)
               // if(req.query.event_page) 
               //and_clauses.push({ 'event_page':  req.body.event_page });
                
                
               // if(and_clauses.length > 0){ 
                //    conditions = and_clauses; // filter the search by any criteria given by the user
               // }
 
            if (!isEmpty(conditions)) {

                const FAQS = await eventsTecks.find(conditions ).sort({updatedAt:-1}).skip(limitFrom).limit(limitTo);


                if (!isEmpty(FAQS)) {
                    res.status(200).json({
                        status: true,
                        message: "Event data fetched successfully",
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
                const FAQS = await eventsTecks.find({ faqType: "supplier", isActive: true });
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
                const FAQS = await eventsTecks.find({ isActive: true });
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

 /* 
    deleteFaqs: async (req, res) => {
        try {
            const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            if (isEmpty(checkRole)) {
                return res.status(404).json({
                    status: true,
                    message: "Role access not found, please check with admin",
                    error: {}
                })
            } else {
                if (checkRole.permissions.role.delete === true) {
                    await faqModel.findByIdAndUpdate(req.body.faqId, { isActive: false }, { new: true }, (err, result) => {
                        if (err) {
                            res.status(404).json({
                                status: false,
                                message: "Failed to delete FAQ",
                                error: err
                            });
                        } else {
                            console.log(result)
                            res.status(200).json({
                                status: true,
                                message: "FAQ deleted successfully",
                                result: result
                            })
                        }
                    })
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

    updateFaqs: async (req, res) => {
        try {
            const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            if (isEmpty(checkRole)) {
                return res.status(404).json({
                    status: true,
                    message: "Role access not found, please check with admin",
                    error: {}
                })
            } else {
                if (checkRole.permissions.role.update === true) {
                    await faqModel.findByIdAndUpdate(req.body.faqId, {
                        '$set': {
                            faqQuestion: req.body.faqQuestion,
                            faqAnswer: req.body.faqAnswer,
                            faqType: req.body.faqType
                        }
                    }, { new: true, runValidators: true }, (err, result) => {
                        if (err) {
                            res.status(404).json({
                                status: false,
                                message: "Failed to update FAQ",
                                error: err
                            });
                        } else {
                            console.log(result)
                            res.status(200).json({
                                status: true,
                                message: "FAQ updated successfully",
                                result: result
                            })
                        }
                    })
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
    }
    
    */
}