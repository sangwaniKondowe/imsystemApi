'use strict'

const { response } = require('express');
const { status } = require('express/lib/response');
const { user } = require('pg/lib/defaults');
//const { where } = require('sequelize/types');
const Application = require('../models/application');
const Beneficiary = require('../models/beneficiary');
//const Applications = require('../models/applicant');


// Getting all applications

exports.getsome = async (req, res) => {
  const Muslims = await Application.findAll({
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


// Getting all applications 


exports.getall = async (req, res) => {
  const Applications = await Application.findAll();
  if (Applications) {
    res.status(200).json({ Applications });
  } else {
    res.status(404).send("no messages");
  }
};

 //checking existence and saving application with pending status

exports.sending_application = async (req, res) => {

  const { fullName, YrOfStudy, program, regNum, description, nameOfScholar, accountNum, bankName, religion, status } = req.body;

 

  const applicantExist = await Application.findOne({
    where: {
      regNum,
      accountNum,
    },
  });
  if (applicantExist) {
    res.status(409).json({
      message: "applicant already in the database",
      Application: applicantExist,
    });
  } else {

    const reqBody = {...req.body, status:"PENDING"}

    await require("../models/application")
      .create(reqBody).then((response) => {
        res.status(201).json({
          message: "application added successfully",
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

// sending application uuid to beneficiaries table

exports.markComplete = async (req, res) => {
  const uuid = req.params.uuid;
   const application2 = await Application.findOne({
     where: {
       uuid,
      }})
    if ( application2 ) {
      const appBody = {...application2, status:"COMPLETED"}
      Application.update({status:"COMPLETED"}, {
        where:{uuid}
      }
  ).then(response=>{
    if(response==1){
      Beneficiary.create({
        applicationId:application2.id
      })
      res.send({
        success:true
,
message:"Application accepted"      })
    }
  })
      
  }
}



// exports.changestatus = async (req, res) =>{
//   const uuid = req.params.uuid;
//  const application = await Application.findOne({where: {uuid}})
 
 
//  if ( application ){

//   const pending = Object.assign(application,{status:"pending"})
//     pending.save()
//     res.send("ok success")
//  }
// }

// Marking an application as complete

// exports.markComplete = async (req, res) => {
//    const uuid = req.params.uuid;
   
//    const application1 = await Application.findOne({where: {uuid}})

//    if ( application1 ) {
//      const complete = Object.assign(application1, {status: "PENDING" ? "COMPLETED" : ""})
//      complete.save()
//      res.send("Success")
//    }
// }

// Get number of all complete aplications

exports.statusComplete = async (req, res) => {
  const all = await Application.count({
    where: {
      status: "COMPLETED",
    },
  
  })
  if (all) {

  res.send(`approved applications: ${all}`)
  }else {
    res.status(404).send("no approved applications");
  }
}

// Get number of all pending applications

exports.statusPending = async (req, res) => {
  const all = await Application.count({
    where: {
      status: "PENDING",
    },
  
  })
  if (all) {

  res.send(`pending applications: ${all}`)
  }else {
    res.status(404).send("no pending applications");
  }
}




































// Get number of all applications

// exports.allApplications = async (req, res) => {
//   const all = await Application.count( () => {


//     if (all >= 0) {

//       res.send(`all applications: ${all}`)
//       }else {
//         res.status(404).send("no applications at the moment.");
//       }
//   })

// }

// user.sync({ alter: true}).then(() => {
//   return user.findByPk();
// }).then((data) => {
//   console.log(data.toJSON());
// }).catch((err) => {
//   console.log(err)
// })
