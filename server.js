const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const port = 5000;

// initialize fileUpload
app.use(fileUpload());
// Upload Endpoint
app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res, status(400).json({ msg: "No file uploaded" });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/client/public/upload/${file.name}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `upload/${file.name}` });
    })
})




app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
})