const express = require('express');
const { sequelize } = require('./models')
const logger = require("morgan");

const app = express();
app.use(express.json())
app.use(logger("common"));
app.use(logger())

const router = express.Router()


router.post('/send_application', require('./Controllers/appController').sending_application)
// const { sequelize } = require("./models");

// const AllController = require('./Controllers/Controller');


app.listen({ port: 3000 }, async () => {
    console.log("Server up on http://localhost:3000")
});