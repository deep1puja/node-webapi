const investorCategoryModel = require("../models/masters/investorCategoryModel");
const investorSubCategorySchema = require("../models/masters/investorSubCategoryModel");
const fileSchemna = require("../models/masters/filesModel");
const investorSchemna = require("../models/investorModel");
const messages = require("../../config/messages");
const config = require("../../config/properties");
const _ = require("lodash")
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports =  {

    //basic crud operations
    //investor category
    createCategory: async (body)=> {
        try {
            const createcategory = new investorCategoryModel.create(body)
            createcategory.save((err, result) => {
                console.log(err, result);
                if (err) {
                    return {
                        status: false,
                        statusCode: 401,
                        message: messages['401Error'],
                        error: err
                    };
                }

                return {
                    status: true,
                    statusCode: 200,
                    message:  messages.successCreate,
                    data: result
                };
            })

        } catch (error) {
            return {
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            };
        }
    },
     updateCategory: async (body)=> {
        try {
          await  investorCategoryModel.findByIdAndUpdate(body._id, body, (err, result)=>{
                if (err) {
                    return Promise.resolve({
                        status: false,
                        statusCode: 402,
                        message: messages['402Error'],
                        error: err
                    });
                }

                return Promise.resolve({
                    status: true,
                    statusCode: 200,
                    message:  messages.successCreate,
                    data: result
                });
            })
 

        } catch (error) {
            return Promise.reject({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
   findByIdCategory: async (body)=> {
        try {
          await  investorCategoryModel.findById(body._id, (err, result)=>{
                if (err) {
                    return Promise.resolve({
                        status: false,
                        statusCode: 400,
                        message: messages['400Error'],
                        error: err
                    });
                }

                return Promise.resolve({
                    status: true,
                    statusCode: 200,
                    message:  messages.successCreate,
                    data: result
                });
            })
 

        } catch (error) {
            return Promise.reject({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
    findCategory: async (body)=> {
        try {
          await  investorCategoryModel.find(body, (err, result)=>{
                if (err) {
                    return Promise.resolve({
                        status: false,
                        statusCode: 400,
                        message: messages['400Error'],
                        error: err
                    });
                }

                return Promise.resolve({
                    status: true,
                    statusCode: 200,
                    message:  messages.successCreate,
                    data: result
                });
            })
 

        } catch (error) {
            return Promise.reject({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    }




}