'use strict'

const errorHandler = require('errorhandler');
const { response } = require('express');
const { status } = require('express/lib/response');
const { user } = require('pg/lib/defaults');
//const { where } = require('sequelize/types');
const Application = require('../models/application');
const Beneficiary = require('../models/beneficiary');
const Scholarship = require('../models/scholarship');
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

//checking existence of scholarship and saving application with that scholarship id

exports.sending_application = async (req, res) => {

  try{
    //const { fullName, YrOfStudy, program, regNum, description, nameOfScholar, accountNum, bankName, religion, status } = req.body;

    const uuid = req.params.scholarshipUUID;

    const scholarshipExist = await Scholarship.findOne({
      where: {
        uuid      
      },
    });
    if (scholarshipExist) {
      const reqBody = { ...req.body, scholarshipId: scholarshipExist.id, status: "PENDING"}
      Application.create(reqBody)
      res.send({succes:true, message:"Application success"})

    } else {
     res.send({
       sucess:false
     })
  };

  } catch (err) {

    console.log(err)
   // next(new errorHandler(500, err.message));
  }
}
 

// sending application uuid to beneficiaries table

// exports.markComplete = async (req, res) => {
//   const uuid = req.params.uuid;
//   const application2 = await Application.findOne({
//     where: {
//       uuid,
//     }
//   })
//   if (application2) {
//     const appBody = { ...application2, status: "COMPLETED" }
//     Application.update({ status: "COMPLETED" }, {
//       where: { uuid }
//     }
//     ).then(response => {
//       if (response == 1) {
//         Beneficiary.create({
//           applicationId: application2.id,
    
//         })
//         res.send({
//           success: true,
//           message: "Application accepted",
//           appBody
//         })
//       }
//     })

//   }
// }


exports.markComplete = async (req ,res) =>{

  try {
  const uuid = req.params.applicationUUID;

  const applicationExist = await Application.findOne({
    where: {
      uuid,
      }
    });
    if (applicationExist){
      Application.update({ status: "COMPLETED" }, {
              where: { uuid }
            })
            .then(response => {
              if(response == 1) {
                Beneficiary.create({
                  applicationId: applicationExist.id,
                  scholarshipId: applicationExist.scholarshipId
                })
                res.send({
                  success: true,
                  message: "Application accepted",
                })
              }else{
                res.send({
                  success: false
                })
              }
              
            })

          }} catch (err){
               console.log(err)
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

// exports.statusComplete = async (req, res) => {
//   const all = await Application.count({
//     where: {
//       status: "COMPLETED",
//     },

//   })
//   if (all) {

//     res.send(`approved applications: ${all}`)
//   } else {
//     res.status(404).send("no approved applications");
//   }
// }
// }
// Get number of all pending applications

exports.statusPending = async (req, res) => {
  const all = await Application.count({
    where: {
      status: "PENDING",
    },

  })
  if (all) {

    res.send(`pending applications: ${all}`)
  } else {
    res.status(404).send("no pending applications");
  }
}
