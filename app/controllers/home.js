const homeAboutSectionModel = require("../models/home/homeAboutSectionModel");
const homeBannerModel = require("../models/home/homeBannerModel");
const homeHowToEarnSectionModel = require("../models/home/homeHowToEarnSectionModel");
const homeOurFamilySectionModel = require("../models/home/homeOurFamilySectionModel");
const homeOurPartnerSectionModel = require("../models/home/homeOurPartnerSectionModel");
const homeWhySectionModel = require("../models/home/homeWhySectionModel");
const homebenefitSectionModel = require("../models/home/homebenefitSectionModel");
const messages = require("../../config/messages");
const config = require("../../config/properties");
const _ = require("lodash")
const Bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {

    //basic crud operations
    //homeAboutSectionModel category
    createAboutSection: async (req, res) => {
        try {
            var body = req.body;
            console.log(body);
            const createcategory = new homeAboutSectionModel(body)
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
    updateAboutSection: async (req, res) => {
        try {
            var body = req.body;
            await homeAboutSectionModel.findByIdAndUpdate(body._id, body, (err, result) => {
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
    findByIdAboutSection: async (req, res) => {
        try {
            var body = req.query;
            await homeAboutSectionModel.findById(body._id, (err, result) => {
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
    findAllAboutSection: async (req, res) => {
        try {
            var body = req.query;
            await homeAboutSectionModel.find(body, (err, result) => {
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

    //homeBannerSectionModel category
    createBannerSection: async (req, res) => {
        try {
            var body = req.body;
            const createcategory = new homeBannerModel(body)
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
    updateBannerSection: async (req, res) => {
        try {
            var body = req.body;
            await homeBannerModel.findByIdAndUpdate(body._id, body, (err, result) => {
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
    findByIdBannerSection: async (req, res) => {
        try {
            var body = req.query;
            await homeBannerModel.findById(body._id, (err, result) => {
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
    findAllBannerSection: async (req, res) => {
        try {
            var body = req.query;
            await homeBannerModel.find(body, (err, result) => {
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
    //homeHowToEarnSectionModel category
    createHowToEarnSection: async (req, res) => {
        try {
            var body = req.body;
            const createcategory = new homeHowToEarnSectionModel(body)
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
    updateHowToEarnSection: async (req, res) => {
        try {
            var body = req.body;
            await homeHowToEarnSectionModel.findByIdAndUpdate(body._id, body, (err, result) => {
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
    findByIdHowToEarnSection: async (req, res) => {
        try {
            var body = req.query;
            await homeHowToEarnSectionModel.findById(body._id, (err, result) => {
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
    findAllHowToEarnSection: async (req, res) => {
        try {
            var body = req.query;
            await homeHowToEarnSectionModel.find(body, (err, result) => {
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
    //homeOurFamilySectionModel category
    createOurFamilySection: async (req, res) => {
        try {
            var body = req.body;
            const createcategory = new homeOurFamilySectionModel(body)
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
    updateOurFamilySection: async (req, res) => {
        try {
            var body = req.body;
            await homeOurFamilySectionModel.findByIdAndUpdate(body._id, body, (err, result) => {
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
    findByIdOurFamilySection: async (req, res) => {
        try {
            var body = req.query;
            await homeOurFamilySectionModel.findById(body._id, (err, result) => {
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
    findAllOurFamilySection: async (req, res) => {
        try {
            var body = req.query;
            await homeOurFamilySectionModel.find(body, (err, result) => {
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
    //homeOurPartnerSectionModel category
    createOurPartnerSection: async (req, res) => {
        try {
            var body = req.body;
            const createcategory = new homeOurPartnerSectionModel(body)
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
    updateOurPartnerSection: async (req, res) => {
        try {
            var body = req.body;
            await homeOurPartnerSectionModel.findByIdAndUpdate(body._id, body, (err, result) => {
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
    findByIdOurPartnerSection: async (req, res) => {
        try {
            var body = req.query;
            await homeOurPartnerSectionModel.findById(body._id, (err, result) => {
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
    findAllOurPartnerSection: async (req, res) => {
        try {
            var body = req.query;
            await homeOurPartnerSectionModel.find(body, (err, result) => {
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
    //homebenefitSectionModel category
    createBenefitSection: async (req, res) => {
        try {
            var body = req.body;
            const createcategory = new homebenefitSectionModel(body)
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
    updateBenefitSection: async (req, res) => {
        try {
            var body = req.body;
            await homebenefitSectionModel.findByIdAndUpdate(body._id, body, (err, result) => {
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
    findByIdBenefitSection: async (req, res) => {
        try {
            var body = req.query;
            await homebenefitSectionModel.findById(body._id, (err, result) => {
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
    findAllBenefitSection: async (req, res) => {
        try {
            var body = req.query;
            await homebenefitSectionModel.find(body, (err, result) => {
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
    //homeWhySectionModel category
    createWhySection: async (req, res) => {
        try {
            var body = req.body;
            const createcategory = new homeWhySectionModel(body)
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
    updateWhySection: async (req, res) => {
        try {
            var body = req.body;
            await homeWhySectionModel.findByIdAndUpdate(body._id, body, (err, result) => {
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
    findByIdWhySection: async (req, res) => {
        try {
            var body = req.query;
            await homeWhySectionModel.findById(body._id, (err, result) => {
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
    findAllWhySection: async (req, res) => {
        try {
            var body = req.query;
            await homeWhySectionModel.find(body, (err, result) => {
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