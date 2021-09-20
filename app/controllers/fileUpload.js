const config = require("../../config/properties");

module.exports = {
fileUpload:async (req, res) => {
    try {
        if (req.files) {
            var file = req.files.file;
            var fileName = Date.now() + file.name.split(" ").join("");
            file.mv('public/'+req.headers.path +'/'+ fileName, (err) => {
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
                       // fileUrl: `${config.Url}/static/${req.headers.path}/${fileName}`
                        fileUrl: `static/${req.headers.path}/${fileName}`


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