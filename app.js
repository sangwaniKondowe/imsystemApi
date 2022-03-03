const express = require('express');
const { sequelize } = require('./models')
const logger = require("morgan");
require('dotenv').config();

const AuthRoutes = require('./Routes/loginRoute')

const app = express();
app.use(express.json())
app.use(logger("common"));
app.use(logger())





app.use('/login', AuthRoutes)
app.use('/application',require('./Routes/Routes'));
app.use('/beneficiary', require('./Routes/BeneficiaryRoute'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));