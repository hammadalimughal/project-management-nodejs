const express = require('express');
const router = express.Router();
const Project = require('../schema/Project');

router.delete('/:id', async (req, res) => {
    try{
        project = await Project.findByIdAndDelete(req.params.id)
        res.status(200).json({ "Success": "Project has been deleted", Project: project });
        // res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
    }    
});
module.exports = router
