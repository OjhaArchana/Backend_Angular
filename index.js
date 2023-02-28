const express = require("express");
const app = express();
// const cors = require("cors");

app.use(express.json());
// app.use(cors());

var profiles = [];

app.post('/employee', (req, res) => {
    profiles.push({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        about: req.body.about,
        doj: req.body.doj
    })
    res.send('profile created!');
})

app.get('/employees', (req, res) => {
    res.status(200).json(profiles);
})

app.post('/delete-employee', (req, res) => {
    profiles = profiles.filter(p => p.id != req.body.id)
    res.send('profile deleted!');
})

app.post('/update-employee', (req, res) => {
    profiles = profiles.filter(p => p.id != req.body.id)
    profiles.push({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        about: req.body.about,
        doj: req.body.doj
    })
    res.send('profile updated!');
})

app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running");
});