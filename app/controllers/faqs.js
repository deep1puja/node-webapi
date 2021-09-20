const roleModel = require("../models/roleModel");
const faqModel = require("../models/FAQs");
const { isEmpty } = require("lodash");

module.exports = {
    addFaqs: async (req, res) => {
        try {
            const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            if (isEmpty(checkRole)) {
                return res.status(404).json({
                    status: true,
                    message: "Role access not found, please check with admin",
                    error: {}
                })
            } else {
                if (checkRole.permissions.role.create === true) {
                    const faq = new faqModel({
                        faqQuestion: req.body.faqQuestion,
                        faqAnswer: req.body.faqAnswer,
                        faqType: req.body.faqType
                    });
                    faq.save((err, data) => {
                        if (err) {
                            res.status(404).json({
                                status: false,
                                message: "Failed to add FAQ",
                                error: err,
                            });
                        } else {
                            return res.status(200).json({
                                status: true,
                                message: "FAQ added",
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

    getFaqs: async (req, res) => {
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
            if (req.query.type == "re-seller") {
                const FAQS = await faqModel.find({ faqType: "re-seller", isActive: true });
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
            } else if (req.query.type == "supplier") {
                const FAQS = await faqModel.find({ faqType: "supplier", isActive: true });
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
            } else {
                const FAQS = await faqModel.find({ isActive: true });
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
                error: error
            });
        }
    },

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
}