const express = require('express');
const { sequelize } = require('./models')
const logger = require("morgan");

const app = express();
app.use(express.json())
app.use(logger("common"));
app.use(logger())




// router.post('/send_application', require('./Controllers/appController').sending_application)

app.use('/applicant',require('./Routers/Router'));
// const { sequelize } = require("./models");

// const AllController = require('./Controllers/Controller');
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));