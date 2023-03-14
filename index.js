const express = require("express");
const app = express();
const databaseConnection = require('./db.js')

databaseConnection()

app.use(express.json());

const port =  process.env.PORT || 4500;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// projects routes
app.use('/api/addProject', require('./routes/AddProject'))
app.use('/api/getProject', require('./routes/GetProject'))
app.use('/api/updateProject', require('./routes/UpdateProject'))
app.use('/api/deleteProject', require('./routes/DeleteProject'))

app.listen(port,()=>{
    console.log("Listening to port " + port)
})
