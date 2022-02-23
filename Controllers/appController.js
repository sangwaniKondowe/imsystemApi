'use strict'

const Applicant = require('../models/applicant');
//const applicants = require('../models/applicant');


exports.getsome = async (req, res) => {
  const Muslims = await Applicant.findAll({
    where: {
      religion : 'Muslim',
      nameOfScholar: 'Muslim NGO'
    },
  });
 if( Muslims) {
      res.status(200).json({ Muslims });
 } 
  else {
   res.status(404).send('no messages')
 }
 }





exports.getall = async (req, res) => {
    const Applicants = await Applicant.findAll();
    if (Applicants) {
      res.status(200).json({ Applicants });
    } else {
      res.status(404).send("no messages");
    }
  };

exports.sending_application = async (req, res) => {

    const { fullName, YrOfStudy, program, regNum, description, nameOfScholar, accountNum, bankName,religion } = req.body;

  //checking existsense and saving

  const applicantExist = await Applicant.findOne({
    where: {
        regNum,
        accountNum,
    },
  });
  if (applicantExist) {
    res.status(409).json({
      message: "applicant already in the database",
      Applicant: applicantExist,
    });
  } else {
    await require("../models/applicant")
      .create(req.body).then((response) => {
        res.status(201).json({
          message: "applicant added successfully",
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
