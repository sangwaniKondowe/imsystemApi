'use strict'

const Application = require('../models/application');
const Scholarship = require('../models/scholarship');

//const router = require('express').Router();




exports.scholarDetails = async (req, res) => {

    const { name, description, start_date, finish_date } = req.body;



    const scholarshipExist = await Scholarship.findOne({
        where: {
            name,
        },
    });
    if (scholarshipExist) {
        res.status(409).json({
            message: "sholarship already in the database",
            Scholarship: scholarshipExist,
        });
    } else {
        await require("../models/scholarship")
            .create(req.body).then((response) => {
                res.status(201).json({
                    message: "sholarship added successfully",
                    details: response,
                });
            })
            .catch((error) => {
                console.log(error);
                return res.status(500).json({
                    message: error.message,
                });
            });
    }
};


exports.allScholarships = async (req, res) => {
    const Scholarships = await Scholarship.findAll({
        include:{
            model:Application,
            attributes:["uuid"]
        }
    });
    if (Scholarships) {
      res.status(200).json({ Scholarships });
    } else {
      res.status(404).send("no messages");
    }
}




