const privacyPolicyModel = require("../models/privacyPolicyModel");
const termsAndConditionModel = require("../models/termsAndConditionModel");
const messages = require("../../config/messages");
const _ = require("lodash");
module.exports = {
    //basic crud operations
    //termsAndConditionModel category
    createTerms: async (req, res) => {
        try {
            var body = req.body;
            console.log(body);
            const createcategory = new termsAndConditionModel(body)
            createcategory.save((err, result) => {
                console.log(err, result);
                if (err) {
                        res.status(401).json({
                        status: false,
                        statusCode: 401,
                        message: messages['401Error'],
                        error: err.message
                    });
                }

                  res.status(200).json({
                    status: true,
                    statusCode: 200,
                    message: messages.successCreate,
                    data: result
                });
            })

        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
    updateTerms: async (req, res) => {
        try {
            var body = req.body;
            await termsAndConditionModel.findByIdAndUpdate(body._id, body, (err, result) => {
                if (err) {
                    res.status(402).json({
                        status: false,
                        statusCode: 402,
                        message: messages['402Error'],
                        error: err.message
                    });
                }

                res.status(200).json({
                    status: true,
                    statusCode: 200,
                    message: messages.successUpdate,
                    data: result
                });
            })


        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
    findAllTerms: async (req, res) => {
        try {
            var body = req.query;
            await termsAndConditionModel.find(body, (err, result) => {
                if (err) {
                    res.status(400).json({
                        status: false,
                        statusCode: 400,
                        message: messages['400Error'],
                        error: err.message
                    });
                }

                res.status(200).json({
                    status: true,
                    statusCode: 200,
                    message: messages.successFind,
                    data: result
                });
            })


        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
    //privacyPolicyModel category
    createPrivacy: async (req, res) => {
        try {
            var body = req.body;
            const createcategory = new privacyPolicyModel(body)
            createcategory.save((err, result) => {
                console.log(err, result);
                if (err) {
                        res.status(401).json({
                        status: false,
                        statusCode: 401,
                        message: messages['401Error'],
                        error: err.message
                    });
                }

                  res.status(200).json({
                    status: true,
                    statusCode: 200,
                    message: messages.successCreate,
                    data: result
                });
            })

        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
    updatePrivacy: async (req, res) => {
        try {
            var body = req.body;
            await privacyPolicyModel.findByIdAndUpdate(body._id, body, (err, result) => {
                if (err) {
                    res.status(402).json({
                        status: false,
                        statusCode: 402,
                        message: messages['402Error'],
                        error: err.message
                    });
                }

                res.status(200).json({
                    status: true,
                    statusCode: 200,
                    message: messages.successUpdate,
                    data: result
                });
            })


        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
    findAllPrivacy: async (req, res) => {
        try {
            var body = req.query;
            await privacyPolicyModel.find(body, (err, result) => {
                if (err) {
                    res.status(400).json({
                        status: false,
                        statusCode: 400,
                        message: messages['400Error'],
                        error: err.message
                    });
                }

                res.status(200).json({
                    status: true,
                    statusCode: 200,
                    message: messages.successFind,
                    data: result
                });
            })


        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
}