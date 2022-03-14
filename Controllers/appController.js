'use strict'

const Application = require('../models/application');
const User = require('../models/user')
const { Sequelize } = require("sequelize");
const User_role = require('../models/user_role');
const crypto = require('crypto').webcrypto



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
    

    const studentExist = await User_role.findOne({
      where: {
        id:req.userId,
    
      },
    });
    

    if (studentExist) {
      const reqBody = { ...req.body, userId:studentExist.id ,status: "PENDING"}

        
      
      Application.create(reqBody)
      res.send({succes:true, message:"Application success"})

    } else {
     res.send({
       sucess:false
     })
  };

  } catch (err) {

    console.log(err)
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


// exports.markComplete = async (req ,res) =>{

//      await Application.findAll({ order: Sequelize.literal('random()'), limit: 4})
//     .then((application) => {
//       res.status(200).json({ application })
//     })
//   };


const generateRandom = (min, max, maxRange)=>{
  var byteArray = new Uint8Array(1)
  crypto.getRandomValues(byteArray)
  var range = max-min+1
  if(byteArray[0]>=Math.floor(maxRange/range)*range){
      return generateRandom(min, max, maxRange)
  }

  return min + (byteArray[0] % range);

}
exports.markComplete = async (req, res) => { 
  const {males, females }= req.query

  

    await Application.findAll({
        include: User,
    }).then((response) => {
      

      let famaleIndes = []
     const femaleArr = response.filter(f=>f.user.gender==="Female")
     const malesArr = response.filter(f=>f.user.gender==="Male")


     let malesActulRequired = males > malesArr.length?malesArr.length:males
     let mToReturn = []
     let fToReturn = []
     if(males >= malesArr.length){
        mToReturn=malesArr
     }else{
       for(let i = 0; i < males; i++){
         let first = malesArr[generateRandom(0, malesArr.length-1, 256)]
           mToReturn.push(first)
         }
     }

     if(females >= femaleArr.length){
      fToReturn=femaleArr
   }else{
     for(let i = 0; i < females; i++){
       let first = femaleArr[generateRandom(0, femaleArr.length-1, 256)]
         fToReturn.push(first)
       }
   }
   



   let selected= mToReturn.concat(fToReturn)

  
      res.send({selected})
    })}
  // try {
  // const uuid = req.params.applicationUUID;

  // const applicationExist = await Application.findOne({
  //   where: {
  //     uuid,
  //     }
  //   });
  //   if (applicationExist){
  //     Application.update({ status: "COMPLETED" }, {
  //             where: { uuid }
  //           })
  //           .then(response => {
  //             if(response == 1) {
  //               Beneficiary.create({
  //                 applicationId: applicationExist.id,
  //                 scholarshipId: applicationExist.scholarshipId
  //               })
  //               res.send({
  //                 success: true,
  //                 message: "Application accepted",
  //               })
  //             }else{
  //               res.send({
  //                 success: false
  //               })
  //             }
              
  //           })

  //         }} catch (err){
  //              console.log(err)
  //         }
//}



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
