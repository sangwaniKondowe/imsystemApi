'use strict'

const { status } = require('express/lib/response');
const Applicant = require('../models/applicant');
//const applicants = require('../models/applicant');


//GETTING ALL APPLICANTS

exports.getsome = async (req, res) => {
  const Muslims = await Applicant.findAll({
    where: {
      religion: 'Muslim',
      nameOfScholar: 'Muslim NGO'
    },
  });
  if (Muslims) {
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

  const { fullName, YrOfStudy, program, regNum, description, nameOfScholar, accountNum, bankName, religion, status } = req.body;

  //checking existence and saving

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

exports.changestatus = async (req, res) =>{
  const uuid = req.params.uuid;
 const application = await Applicant.findOne({where: {uuid}})
 
 
 if ( application ){

  const pending = Object.assign(application,{status:"pending"})
    pending.save()
    res.send("ok success")
 }
}

exports.markComplete = async (req, res) => {
   const uuid = req.params.uuid;
   const application1 = await Applicant.findOne({where: {uuid}})

   if ( application1 ) {
     const complete = Object.assign(application1, {status: "pending" ? "complete" : ""})
     complete.save()
     res.send("Success")
   }
}

