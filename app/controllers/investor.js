const investorCategoryModel = require("../models/masters/investorCategoryModel");
const investorSubCategoryModel = require("../models/masters/investorSubCategoryModel");
const investorModel = require("../models/investorModel");
const messages = require("../../config/messages");
const _ = require("lodash");
module.exports = {

    //basic crud operations
    //investor category 
    // if passes id then it will update else create
    createAndUpdateCategory: async (req, res) => {
        try {
            body = req.body;
            if(body.name =="Investor Relations"){
                body.isInvestorRelations=true;
            }
            if (body._id) {
                await investorCategoryModel.findByIdAndUpdate(body._id, body, (err, result) => {
                    if (err) {
                        res.status(402).json({
                            status: false,
                            statusCode: 402,
                            message: messages['402Error'],
                            error: err
                        });
                    }

                    res.status(200).json({
                        status: true,
                        statusCode: 200,
                        message: messages.successUpdate,
                        data: result
                    });
                });
            }
            else {
                const createcategory = new investorCategoryModel(body);
                createcategory.save((err, result) => {
                    console.log(err, result);
                    if (err) {
                        res.status(401).json({
                            status: false,
                            statusCode: 401,
                            message: messages['401Error'],
                            error: err
                        });
                    }

                    res.status(200).json({
                        status: true,
                        statusCode: 200,
                        message: messages.successCreate,
                        data: result
                    });
                });

            }
        }
        catch (err) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: err
            })
        }

    },
    // if passes id then it will findbyid else find
    findCategory: async (req, res) => {
        try {
            var body = req.query;
            if (body._id) {
                await investorCategoryModel.findById(body._id, (err, result) => {
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
            }
            else {
                await investorCategoryModel.find(body, (err, result) => {
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
            }



        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
    //investor sub-category 
    // if passes id then it will update else create
    createAndUpdateSubCategory: async (req, res) => {
        try {
            body = req.body
            if (body._id) {
                await investorSubCategoryModel.findByIdAndUpdate(body._id, body, (err, result) => {
                    if (err) {
                        res.status(402).json({
                            status: false,
                            statusCode: 402,
                            message: messages['402Error'],
                            error: err
                        });
                    }

                    res.status(200).json({
                        status: true,
                        statusCode: 200,
                        message: messages.successUpdate,
                        data: result
                    });
                })
            }
            else {
                const createSubcategory = new investorSubCategoryModel(body)
                createSubcategory.save((err, result) => {
                    console.log(err, result);
                    if (err) {
                        res.status(401).json({
                            status: false,
                            statusCode: 401,
                            message: messages['401Error'],
                            error: err
                        });
                    }

                    res.status(200).json({
                        status: true,
                        statusCode: 200,
                        message: messages.successCreate,
                        data: result
                    });
                })

            }
        }
        catch (err) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: err
            })
        }

    },
    // if passes id then it will findbyid else find
    findSubCategory: async (req, res) => {
        try {
            var body = req.query;
            if (body._id) {
                await investorSubCategoryModel.findById(body._id, (err, result) => {
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
            }
            else {
                await investorSubCategoryModel.find(body, (err, result) => {
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
            }



        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
    //investor doc 
    // if passes id then it will update else create
    createAndUpdateInvestorDoc: async (req, res) => {
        try {
            body = req.body
            console.log(body)
            if (body._id) {
                await investorModel.findByIdAndUpdate(body._id, body, (err, result) => {
                    if (err) {
                        res.status(402).json({
                            status: false,
                            statusCode: 402,
                            message: messages['402Error'],
                            error: err
                        });
                    }

                    res.status(200).json({
                        status: true,
                        statusCode: 200,
                        message: messages.successUpdate,
                        data: result
                    });
                })
            }
            else {
                const createInvestorDoc = new investorModel(body)
                createInvestorDoc.save((err, result) => {
                    console.log(err, result);
                    if (err) {
                        res.status(401).json({
                            status: false,
                            statusCode: 401,
                            message: messages['401Error'],
                            error: err
                        });
                    }

                    res.status(200).json({
                        status: true,
                        statusCode: 200,
                        message: messages.successCreate,
                        data: result
                    });
                })

            }
        }
        catch (err) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: err
            })
        }

    },
    // if passes id then it will findbyid else find
    findInvestorDoc: async (req, res) => {
        try {
            var body = req.query;
            if (body._id) {
                await investorModel.findById(body._id, (err, result) => {
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
            }
            else {
                await investorModel.find(body, (err, result) => {
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
            }



        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages['500Error'],
                error: error
            });
        }
    },
    aggregateInvestorDoc: async (req, res) => {
        var body = req.query;
        Number(body.order)

        if(Number(body.order))
         console.log("test....");
        else
         console.log("testFalse");
        try {
          let  mongooseAggregateData = await investorCategoryModel.aggregate([
                {
                    $lookup: {
                        from: 'investorsubcategories',
                        localField: '_id',
                        foreignField: 'categoryId',
                        as: 'investorsubcategories'
                    }
                },
                {
                    $unwind: {
                        path: "$investorsubcategories",
                        preserveNullAndEmptyArrays: true
                    }
                },
                {
                    $lookup: {
                        from: 'investors',
                        localField: 'investorsubcategories._id',
                        foreignField: 'subCategoryId',
                        as: 'investors'
                    }
                },
                {
                    $match: {
                        isActive: true,
                        order: Number(body.order),
                        $and: [
                            { 'investorsubcategories.isActive': { $eq: true } },
                            { 'investors.isActive': { $eq: true } }
                        ],
                    }
                },

                {
                    $group: {
                        _id: "$_id",
                        name: { $first: "$name" },
                        isInvestorRelations: { $first: "$isInvestorRelations" },
                        order: { $first: "$order" },
                        isActive: { $first: "$isActive" },
                        subCategory: {
                            $push: {
                                name: "$investorsubcategories.name",
                                isActive: "$investorsubcategories.isActive",
                                investors: "$investors"
                            }
                        }
                    }
                },
                { $sort: { order : 1 } }
            ]);
 
             var  subCategory=mongooseAggregateData[0].subCategory;
             for(var attributename in subCategory){
                  (subCategory[attributename].investors).reverse(); 
                 
             }
             
            res.status(200).json({
                status: true,
                statusCode: 200,
                message: messages.successFind,
                data: mongooseAggregateData
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages["500Error"],
                error: error
            })
        }
    },
    bycats: async (req, res) => {
        var body = req.query;
        let test={"name":"deep"};
        
        try {
          let  mongooseAggregateData = await investorCategoryModel.aggregate([
                {
                    $lookup: {
                        from: 'investorsubcategories',
                        localField: '_id',
                        foreignField: 'categoryId',
                        as: 'investorsubcategories'
                    }
                },
                {
                    $unwind: {
                        path: "$investorsubcategories",
                        preserveNullAndEmptyArrays: true
                    }
                },
           
                {
                    $lookup: {
                        from: 'investors',
                       localField: 'investorsubcategories._id',
                        foreignField: 'subCategoryId',
                      //  pipeline: [   ],
                           
                        as: 'investorssssss'
                    }
                },
                {
                    $sort: {
                     // Sort the records by created date
                      "investorssssss.updatedAt": -1,order:1
                    }
                  },
           
                {
                    $match: {
                        isActive: true,

                        $and: [
                            { 'investorsubcategories.isActive': { $eq: true } },
                            { 'investorssssss.isActive': { $eq: true } }
                        ],
                    }
                },
    
    
                //    ,{ $project: { 'investors.name': 1, 'investors.updatedAt': 1 }},
           
                {
                    $group: {
                        _id: "$_id",
                        name: { $first: "$name" },
                        isInvestorRelations: { $first: "$isInvestorRelations" },
                        order: { $first: "$order" },
                        isActive: { $first: "$isActive" },
                        subCategory: {
                            $push: {
                                name: "$investorsubcategories.name",
                                _id: "$investorsubcategories._id",
                                
                                isActive: "$investorsubcategories.isActive",
                                investors: test
                            }
                        }
                    }
                },
              { $sort: { order:1  } }
            ]);
            res.status(200).json({
                status: true,
                statusCode: 200,
                message: messages.successFind,
                data: mongooseAggregateData
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages["500Error"],
                error: error
            })
        }
    },

    docs: async (req, res) => {
        var body = req.query;
        let test={"name":"deep"};
        
        try {
          let  mongooseAggregateData = await investorSubCategoryModel.aggregate([
                {
                    $lookup: {
                        from: 'investors',
                        localField: '_id',
                        foreignField: 'subCategoryId',
                        as: 'investors'
                    }
                },
                {
                    $unwind: {
                        path: "$investors",
                        preserveNullAndEmptyArrays: true
                    }
                },
                 
                { $sort: {  'investors.name':1  } },
                {
                    $match: {
                        isActive: true,

                        $and: [
                            { 'investors.isActive': { $eq: true } },
                            
                        ],
                    }
                },
    
    
                //    ,{ $project: { 'investors.name': 1, 'investors.updatedAt': 1 }},
           
                // {
                //     $group: {
                //         _id: "$_id",
                //         name: { $first: "$name" },
                //         isInvestorRelations: { $first: "$isInvestorRelations" },
                //         order: { $first: "$order" },
                //         isActive: { $first: "$isActive" },
                //         subCategory: {
                //             $push: {
                //                 name: "$investorsubcategories.name",
                //                 _id: "$investorsubcategories._id",
                                
                //                 isActive: "$investorsubcategories.isActive",
                //                 investors: test
                //             }
                //         }
                //     }
                // },
               // { $sort: { order:1  } }
            ]);
            res.status(200).json({
                status: true,
                statusCode: 200,
                message: messages.successFind,
                data: mongooseAggregateData
            })
        } catch (error) {
            res.status(500).json({
                status: false,
                statusCode: 500,
                message: messages["500Error"],
                error: error
            })
        }
    },







}

