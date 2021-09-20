const roleModel = require("../models/roleModel");
const { isEmpty } = require("lodash");

module.exports = {
    createRole: async (req, res) => {
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
                    const check = await roleModel.findOne({ name: req.body.name });
                    if (isEmpty(check)) {
                        new roleModel({
                            name: req.body.name,
                            permissions: req.body.permissions,
                            createdBy: req.auth.id
                        })
                            .save()
                            .then((result) => {
                                return res.status(200).json({
                                    status: true,
                                    message: "Role added successfully",
                                    result: result
                                });
                            })
                            .catch((error) => {
                                return res.status(404).json({
                                    status: false,
                                    message: "Something went wrong, please try after sometime",
                                    error: error
                                });
                            })

                    } else {
                        res.status(404).json({
                            status: false,
                            message: "This role name is already registered",
                        });
                    }
                } else {
                    return res.status(404).json({
                        status: false,
                        message: "You don't have access to create roles",
                        error: {}
                    })
                }
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again.",
                error: err
            });
        }
    },

    deleteRole: async (req, res) => {
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
                    roleModel.findByIdAndUpdate(req.body.id, { isActive: false }, { new: true })
                        .then((result) => {
                            if (result) {
                                res.status(200).json({
                                    status: true,
                                    message: "Role deleted successfully",
                                    result: result
                                });
                            } else {
                                res.status(404).json({
                                    status: false,
                                    message: "Role not found",
                                    result: {}
                                });
                            }
                        })
                        .catch((error) => {
                            res.status(404).json({
                                status: false,
                                message: "Something went wrong, Please try again.",
                                result: error
                            });
                        })
                } else {
                    return res.status(404).json({
                        status: false,
                        message: "You don't have access to delete roles",
                        error: {}
                    })
                }
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again.",
                error: err
            });
        }
    },

    updateRole: async (req, res) => {
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
                    roleModel.findByIdAndUpdate(req.body.id, req.body, { new: true })
                        .then((result) => {
                            if (result) {
                                res.status(200).json({
                                    status: true,
                                    message: "Role updated successfully",
                                    result: result
                                });
                            }
                            else {
                                res.status(404).json({
                                    status: false,
                                    message: "Role not found",
                                    result: result
                                });
                            }
                        })
                        .catch((error) => {
                            res.status(404).json({
                                status: false,
                                message: "Something went wrong, Please try again.",
                                result: error
                            });
                        })
                } else {
                    return res.status(404).json({
                        status: false,
                        message: "You don't have access to update roles",
                        error: {}
                    })
                }
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again.",
                error: err
            });
        }
    },

    getAllRoles: async (req, res) => {
        try {
            const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            if (isEmpty(checkRole)) {
                return res.status(404).json({
                    status: true,
                    message: "Role access not found, please check with admin",
                    error: {}
                })
            } else {
                if (checkRole.permissions.role.view === true) {
                    roleModel.find({ isActive: true }).sort({ _id: -1 })
                        .then((result) => {
                            if (result.length != 0) {
                                res.status(200).json({
                                    status: true,
                                    message: "All role fetch successfully",
                                    result: result
                                });
                            }
                            else {
                                res.status(404).json({
                                    status: false,
                                    message: "Role not found",
                                    result: result
                                });
                            }
                        })
                        .catch(error => {
                            return res.status(404).json({
                                status: false,
                                message: "Something went wrong, Please try again",
                                error: error
                            })
                        })
                } else {
                    return res.status(404).json({
                        status: false,
                        message: "You don't have access to list roles",
                        error: {}
                    })
                }
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again.",
                error: err
            });
        }
    },

    findById: async (req, res) => {
        try {
            const checkRole = await roleModel.findOne({ _id: req.auth.roleId, isActive: true });
            if (isEmpty(checkRole)) {
                return res.status(404).json({
                    status: true,
                    message: "Role access not found, please check with admin",
                    error: {}
                })
            } else {
                if (checkRole.permissions.role.view === true) {
                    roleModel.findOne({ isActive: true, _id: req.query.id })
                        .then((result) => {
                            if (result) {
                                res.status(200).json({
                                    status: true,
                                    message: "Role found successfully",
                                    result: result
                                });
                            }
                            else {
                                res.status(404).json({
                                    status: false,
                                    message: "Role not found",
                                    result: result
                                });
                            }
                        })
                        .catch(error => {
                            return res.status(404).json({
                                status: false,
                                message: "Something went wrong, Please try again",
                                error: error
                            })
                        })
                } else {
                    return res.status(404).json({
                        status: false,
                        message: "You don't have access to list roles",
                        error: {}
                    })
                }
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).json({
                status: false,
                message: "Something went wrong, Please try again.",
                error: err
            });
        }
    }
}