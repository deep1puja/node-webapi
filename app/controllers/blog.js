const blogModel = require("../models/blogModel");
const roleModel = require("../models/roleModel");
const { isEmpty } = require("lodash")
const config = require("../../config/properties");

module.exports = {
    addBlog: async (req, res) => {
        try {
            const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            if (isEmpty(checkRole)) {
                return res.status(404).json({
                    status: true,
                    message: "Role access not found, please check with admin",
                    error: {}
                })
            } else {
                if (checkRole.permissions.blog.create === true) {
                    const blog = new blogModel({
                        author: req.body.author,
                        title: req.body.title,
                        urlTitle: req.body.title.trim().split(" ").join("-"),
                        imageUrl: req.body.imageUrl,
                        tag: req.body.tag,
                        content: req.body.content,
                        description: req.body.description
                    });
                    await blog.save()
                        .then((result) => {
                            res.status(200).json({
                                status: true,
                                message: "Blog added successfully",
                                result: result
                            })
                        }).catch((error) => {
                            if (error.code === 11000) {
                                res.status(404).json({
                                    status: true,
                                    message: "Blog already exists with the same title",
                                    result: error
                                })
                            } else {
                                res.status(404).json({
                                    status: true,
                                    message: "Fail to add blog",
                                    result: error
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

    getBlog: async (req, res) => {
        try {
            // const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            // if (isEmpty(checkRole)) {
            //     return res.status(404).json({
            //         status: true,
            //         message: "Role access not found, please check with admin",
            //         error: {}
            //     })
            // } else {
            //     if (checkRole.permissions.blog.view === true) {
            const blog = await blogModel.find({ isActive: true });
            if (!isEmpty(blog)) {
                res.status(200).json({
                    status: true,
                    message: "FAQS fetched successfully",
                    result: blog
                })
            } else {
                res.status(200).json({
                    status: true,
                    message: "No data found",
                    result: blog
                })
            }
            //     } else {
            //         return res.status(404).json({
            //             status: false,
            //             message: "You don't have access to list roles",
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

    getBlogByTitle: async (req, res) => {
        try {
            // const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            // if (isEmpty(checkRole)) {
            //     return res.status(404).json({
            //         status: true,
            //         message: "Role access not found, please check with admin",
            //         error: {}
            //     })
            // } else {
            //     if (checkRole.permissions.blog.view === true) {
            if (!isEmpty(req.query.title)) {
                let title = req.query.title.trim();  
                console.log(title)
                var regex = new RegExp("(^|\\s)" + title + "($|\\s)", "i");
                const blog = await blogModel.findOne({ urlTitle: { "$regex": regex }, isActive: true });
                if (!isEmpty(blog)) {
                    res.status(200).json({
                        status: true,
                        message: "Blogs fetched successfully",
                        result: blog
                    })
                } else {
                    res.status(200).json({
                        status: true,
                        message: "No data found",
                        result: blog
                    })
                }
            } else {
                res.status(404).json({
                    status: false,
                    message: "Please enter Blog Title",
                    error: "error"
                })
            }
            //     } else {
            //         return res.status(404).json({
            //             status: false,
            //             message: "You don't have access to list roles",
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

    getBlogById: async (req, res) => {
        try {
            // const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            // if (isEmpty(checkRole)) {
            //     return res.status(404).json({
            //         status: true,
            //         message: "Role access not found, please check with admin",
            //         error: {}
            //     })
            // } else {
            //     if (checkRole.permissions.blog.view === true) {
            if (!isEmpty(req.query.id)) {
                const blog = await blogModel.findOne({ _id: req.query.id, isActive: true });
                if (!isEmpty(blog)) {
                    res.status(200).json({
                        status: true,
                        message: "Blogs fetched successfully",
                        result: blog
                    })
                } else {
                    res.status(200).json({
                        status: true,
                        message: "No data found",
                        result: blog
                    })
                }
            } else {
                res.status(404).json({
                    status: false,
                    message: "Please enter Blog Id",
                    error: "error"
                })
            }
            //     } else {
            //         return res.status(404).json({
            //             status: false,
            //             message: "You don't have access to list roles",
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

    deleteBlog: async (req, res) => {
        try {
            const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            if (isEmpty(checkRole)) {
                return res.status(404).json({
                    status: true,
                    message: "Role access not found, please check with admin",
                    error: {}
                })
            } else {
                if (checkRole.permissions.blog.delete === true) {
                    await blogModel.findByIdAndUpdate(req.body.blogId, { isActive: false }, { new: true }, (err, result) => {
                        if (err) {
                            res.status(404).json({
                                status: false,
                                message: "Failed to delete Blog",
                                error: err
                            });
                        } else {
                            console.log(result)
                            res.status(200).json({
                                status: true,
                                message: "Blog deleted successfully",
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

    updateBlog: async (req, res) => {
        try {
            const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            if (isEmpty(checkRole)) {
                return res.status(404).json({
                    status: true,
                    message: "Role access not found, please check with admin",
                    error: {}
                })
            } else {
                if (checkRole.permissions.blog.update === true) {
                    if (req.body.title) {
                        req.body.urlTitle = req.body.title.trim().split(" ").join("-")
                    }
                    console.log(req.body.urlTitle)
                    await blogModel.findByIdAndUpdate(req.body.blogId, {
                        '$set': req.body
                    }, { new: true, runValidators: true })
                        .then((result) => {
                            res.status(200).json({
                                status: true,
                                message: "Blog updated successfully",
                                result: result
                            })
                        })
                        .catch((err) => {
                            if (err.code === 11000) {
                                res.status(404).json({
                                    status: true,
                                    message: "Blog already exists with the same title",
                                    result: err
                                })
                            } else {
                                res.status(404).json({
                                    status: true,
                                    message: "Fail to add blog",
                                    result: err
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

    uploadImage: async (req, res) => {
        try {
            if (req.files) {
                var file = req.files.file;
                var fileName = Date.now() + file.name.split(" ").join("");
                file.mv('public/Blogs/' + fileName, (err) => {
                    if (err) {
                        return res.status(404).json({
                            status: false,
                            message: "Something went wrong, please try after sometime",
                            error: err
                        });
                    } else {
                        res.status(200).json({
                            status: true,
                            message: "Images uploaded successfully",
                         //   imageUrl: `${config.Url}/static/Blogs/${fileName}`
                            imageUrl: `static/Blogs/${fileName}`
                            
                        })
                    }
                })
            } else {
                res.status(404).json({
                    status: false,
                    message: "Please attach image to upload",
                    error: "error"
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
    }
}