const express = require('express');

const app = express();

const port = 4000;

const fs = require('node:fs');

const bodyParser = require('body-parser');

const path = require('path');

app.use(bodyParser.json());

app.get("/", (req, res) => {
        console.log(res);
        res.send("Server running successfully")
})

app.post("/createfile", (req, res) => {
    
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const content  = `${timestamp} \n`;
    const fileName = `outputFiles/${timestamp}.txt`;

    fs.writeFile(fileName, content, (err) => {
            if(err) {
                console.error(err);
                res.status(500).send('Error creating file.');
            } else {
                console.log(fileName);
                res.status(201).send(`File ${timestamp} Created successfully.`);
                //res.send("File created sucessfully");
            }
    });
});

app.get("/textfiles", (req, res) => {
    const folderPath = 'outputFiles/'; // Specify the folder path here
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading folder contents.');
        } else {
            const textFiles = files.filter(file => path.extname(file) === '.txt');
            res.status(200).json(textFiles);
        }
    });
});

app.listen(port, () => {
    console.log(`Server started at ${port}`)
})