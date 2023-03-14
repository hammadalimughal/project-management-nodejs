const express = require('express');
const router = express.Router();
const Project = require('../schema/Project');

router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const title = req.body.title;
        const status = req.body.status;
        const technologies = req.body.technologies;
        const description = req.body.description;
            
        const result = await Project.updateOne({ _id: id }, { title, status, technologies, description });
        console.log('updating')
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
    }    
});
module.exports = router