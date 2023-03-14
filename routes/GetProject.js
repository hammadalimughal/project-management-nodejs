const express = require('express');
const router = express.Router();
const Project = require('../schema/Project');

router.post('/', async (req, res) => {
    try {
        const userId = req.body.userId;
        const project = await Project.find({userId: userId})
        if(!project){
            res.status(500).send("Some error occured");
        }
        else{
            res.status(200).send(project)
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router;