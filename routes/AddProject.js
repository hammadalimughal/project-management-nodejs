const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const Project = require('../schema/Project');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = './uploads/';
        const fullPath = path.resolve(dir);
        console.log(fullPath)
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, fullPath);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "" + Date.now() + '.' + file.originalname.split('.')[1]);
    }
});

const fileFilter = (req, file, cb) => {
    // only image files
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/upload", upload.single("image"), (req, res, next) => {
    const image = req.file;
    if (!image) {
        const error = new Error("Please upload an image");
        error.httpStatusCode = 400;
        return next(error);
    }
    res.send(image);
});



router.post('/', async (req, res) => {
    try {
        project = await Project.create({
            userId: req.body.userId,
            featuredImage: req.body.featuredImage,
            title: req.body.title,
            technologies: req.body.technologies,
            description: req.body.description,
        })
        res.status(200).json(project)
    }
    catch (err) {
        console.log(err)
    }
})



module.exports = router