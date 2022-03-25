'use strict'

const Application = require('../models/application');
const User = require('../models/user')
const { Sequelize, where } = require("sequelize");
const User_role = require('../models/user_role');
const console = require('console');
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
      res.send({success:true, message:"Application success"})

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
        raw : true ,
        nest: true 
    }).then(async (response) => {
      

      let famaleIndes = []
     const femaleArr = response.filter(f=>f.user.gender==="Female")
     const malesArr = response.filter(f=>f.user.gender==="Male")


     let malesActulRequired = males > malesArr.length?malesArr.length:males
     let mToReturn = []
     let fToReturn = []
     let fHolder = []
     let mHolder = []

     const maleSetToReturn = new Set()
     const femaleSettoReturn = new Set();
     if(males >= malesArr.length){
        mToReturn=malesArr
     }else{
      while(mToReturn.length != males){
        let first = malesArr[generateRandom(0, malesArr.length-1, 256)]
         mHolder.push(first)
         mToReturn = mHolder.filter((value, index, self) => 
         self.findIndex(v => v.id === value.id) === index
       );
      }

     }
     if(females >= femaleArr.length){
      fToReturn=femaleArr
   }else{
      while(fToReturn.length != females){
        let first = femaleArr[generateRandom(0, femaleArr.length-1, 256)]
         fHolder.push(first)
         fToReturn = fHolder.filter((value, index, self) => 
         self.findIndex(v => v.id === value.id) === index
       );
      }
       }
  
       const m = []
       const f = []


      for(let fem of femaleSettoReturn){
        f.push(fem) 
      }
     for(let mal of maleSetToReturn){
      m.push(mal) 
     } 
 // = m.concat(f)


  let unique =mToReturn.concat(fToReturn)
      unique.map(async app=>{
     await Application.update({ status: "COMPLETED" }, {
        where: { id:app.id }
      })
     })
   
 

let toRData = unique.map(ui => {
  return {...ui, status:"COMPLETED"}
})
      res.send({applications : toRData})

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

//Get number of all complete aplications

exports.statusComplete = async (req, res) => {
  const all = await Application.count({
    where: {
      status: "COMPLETED",
    },

  })
  if (all) {

    res.send(`approved applications: ${all}`)
  } else {
    res.status(404).send("no approved applications");
  }
}
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
