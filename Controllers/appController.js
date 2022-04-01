'use strict'

const { Console } = require('console');
const Application = require('../models/application');
const User = require('../models/user')
const User_role = require('../models/user_role');
const crypto = require('crypto').webcrypto



exports.sendmail = async(req, res, next) => {
  res.status(200).json({ msg: 'Working' })
  };

exports.post = async(req, res, next) => {
  //make mailable object
  const mail = {
  from: process.env.SMTP_FROM_EMAIL,
  to: process.env.SMTP_TO_EMAIL,
  subject: 'New Contact Form Submission',
  text: `
    from:
    ${req.body.name}

    contact details
    email: ${req.body.email}
    phone: ${req.body.tel}

    message:
    ${req.body.message}`,
  }
  transporter.sendMail(mail, (err, data) => {
      if (err) {
          res.json({
              status: 'fail',
          })
      } else {
          res.json({
              status: 'success',
          })
      }
  })
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

// student application

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


//override the auto-selection method

exports.overrideSelection = async(req, res) => {

      const uuid = req.params.uuid;
  
      try {
  
        const Admin = await User_role.findOne({
          where: {
            id:req.userId,
        
          },
        });
        
        if (Admin) {
            const goApp = Application.findOne({
              where : {
                uuid,
              }
            })
            if (goApp) {
              
              Application.update({ status: "COMPLETED" }, {
                       where: { uuid }
                     })
  
                res.send("Status Updated Successfully!")     
              }
           } else {
          res.send({
            success:false
          })
        }
        } catch( err) {
          console.log(err)
        }
    }

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

exports.pendingApp = async (req, res) => {
  const pending = await Application.findAll({

      where : {
          status: "PENDING"
    },
      include: [
          {
              model: User,
          }   
      ]
  })
  if(pending) {

      const pendingA = []
    
      for(let i = 0; i < pending.length; i++){
        let u = pending[i].user
            //let role = pending[i].role
           // let uder = {...u.datavalues, user: u.firstname }
          const wP = {
              id: u.id,
              uuid: u.uuid,
              firstname: u.firstname,
              lastname:u.lastname,
              email:u.email,
              regnum:u.regnum,
              yrofstudy:u.yrofstudy,
              gender:u.gender,
              gpa:u.gpa,

        }
          pendingA.push(wP)
       }

      //console.log(users)
      res.send(pending)
    }else {
      res.sendStatus(404);
    }
}
