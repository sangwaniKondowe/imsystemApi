'use strict'

const { Console } = require('console');
const Application = require('../models/application');
const User = require('../models/user')
const User_role = require('../models/user_role');
const crypto = require('crypto').webcrypto
const nodemailer = require('nodemailer');
const { response } = require('express');
const e = require('express');



// Getting all applications 


// exports.getall = async (req, res) => {
//   const Applications = await Application.findAll();
//   if (Applications) {
//     res.status(200).json({ Applications });
//   } else {
//     res.status(404).send("no messages");
//   }
// };



// student application

exports.sending_application = async (req, res) => {



  try {


    const studentExist = await User_role.findOne({
      where: {
        id: req.userId,

      },
    });


    if (studentExist) {


      const app = await Application.findOne({
        where: {
          userId: studentExist.id
        }
      })
      if (!app) {
        const reqBody = { ...req.body, userId: studentExist.id, status: "PENDING" }

        Application.create(reqBody)
        res.send({ success: true, message: "Application success" })
      } else {
        res.send({ success: false, message: "Oops...You can only apply once." })
      }

      //   if(studentExist.id !== reqBody.userId) {
      //     res.send({success:true, message:"Application success"})

      //   }
      //  else {
      //   res.send({success:false, message:"Oops...You can only apply once."})

      //  }

    }
    else {
      res.send({
        succsess: false
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





const generateRandom = (min, max, maxRange) => {
  var byteArray = new Uint8Array(1)
  crypto.getRandomValues(byteArray)
  var range = max - min + 1
  if (byteArray[0] >= Math.floor(maxRange / range) * range) {
    return generateRandom(min, max, maxRange)
  }

  return min + (byteArray[0] % range);

}


exports.markComplete = async (req, res) => {
  const { males, females } = req.query



  await Application.findAll({

    include: {
      model: User,
    }
    ,
    raw: true,
    nest: true
  }).then(async (response) => {


    let famaleIndes = []
    const femaleArr = response.filter(f => f.user.gender === "Female")
    const malesArr = response.filter(f => f.user.gender === "Male")


    let malesActulRequired = males > malesArr.length ? malesArr.length : males
    let mToReturn = []
    let fToReturn = []
    let fHolder = []
    let mHolder = []

    const maleSetToReturn = new Set()
    const femaleSettoReturn = new Set();
    if (males >= malesArr.length) {
      mToReturn = malesArr
    } else {
      while (mToReturn.length != males) {
        let first = malesArr[generateRandom(0, malesArr.length - 1, 256)]
        mHolder.push(first)
        mToReturn = mHolder.filter((value, index, self) =>
          self.findIndex(v => v.id === value.id) === index
        );
      }

    }
    if (females >= femaleArr.length) {
      fToReturn = femaleArr
    } else {
      while (fToReturn.length != females) {
        let first = femaleArr[generateRandom(0, femaleArr.length - 1, 256)]
        fHolder.push(first)
        fToReturn = fHolder.filter((value, index, self) =>
          self.findIndex(v => v.id === value.id) === index
        );
      }
    }

    const m = []
    const f = []


    for (let fem of femaleSettoReturn) {
      f.push(fem)
    }
    for (let mal of maleSetToReturn) {
      m.push(mal)
    }
    // = m.concat(f)


    let unique = mToReturn.concat(fToReturn)
    unique.map(async app => {
      await Application.update({ status: "COMPLETED" }, {
        where: { id: app.id }
      })
    })



    let toRData = unique.map(ui => {
      return { ...ui, status: "COMPLETED" }
    })
    if (toRData) {

      let user = [];
      toRData.forEach(element => {
        user.push({
          "id": element.id,
          "uuid": element.uuid,
          "firstname": element.user.firstname,
          "lastname": element.user.lastname,
          "email": element.user.email,
          "regnum": element.user.regnum,
          "yrofstudy": element.user.yrofstudy,
          "gender": element.user.gender,
          "gpa": element.user.gpa,
        }
        );

      });
      res.send({ complete: user })

      const emails = []
      user.forEach(mail => {
        emails.push({
          "email": mail.email,
        })
      })
      //console.log(emails)

      //let stringMessage = Object.values(emails);

      let allemails = emails.reduce((arr, email) => {
        arr.push(email.email)
        return (arr)
      }, [])

      //console.log(allemails)

      sendEmail(allemails)


    }
  })
}



function sendEmail(allemails) {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'buy73v3n7psfqxrh@ethereal.email', // generated ethereal user
      pass: 'Wanhtrw7MRjv9p3xuS'  // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"Glen Fally Contact" <myemail@gmail.com>', // sender address
    to: allemails, // list of receivers
    subject: 'Glen Fally Scholarship Approval', // Subject line
    html: "<b>You have been selected.</b>" // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email(s) sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  });

}




//override the auto-selection method

exports.overrideSelection = async (req, res) => {

  const uuid = req.params.uuid;

  try {

    const Admin = await User_role.findOne({
      where: {
        id: req.userId,

      },
    });
    if (Admin === null) {
      res.status(401).json({ message: "no such department name" });
    }
    else {
      const goApp = await Application.findOne({
        where: {
          uuid
        }
      });
      if (goApp) {
        const select = await Application.update({ status: "COMPLETED" }, {
          where: { uuid }
        });
        if (select) {
          const ss = await Application.findOne({
            where: {
              uuid: goApp.uuid,
            },
            include: {
              model: User
            }
          });
          if (ss) {
            var allemails = []
            let userEmail = ss.user.email
            allemails.push(userEmail)
            sendEmail(allemails)
            res.send("Status Updated Successfully!")

          }
          
          
        }
      }
      else {
        res.send({
          success: false
        })
      }
    }
  } catch (err) {
    console.log(err)
  }
}

//Get number of all complete aplications

exports.statusComplete = async (req, res) => {
  const all = await Application.findAll({
    where: {
      status: "COMPLETED",
    },
    include: {
      model: User,
      attributes: [
        "firstname",
        "lastname",
        "email",
        "regnum",
        "gender",
        "yrofstudy",
        "gpa"
      ]}
    })
  if (all) {

    const users = []

    all.forEach(element => {
      users.push({
        "id":element.id,
        "appUUID": element.uuid,
        "status": element.status,
        "firstname": element.user.firstname,
        "lastname": element.user.lastname,
        "email": element.user.email,
        "regnum": element.user.regnum,
        "yrofstudy": element.user.yrofstudy,
        "gender": element.user.gender,
        "gpa": element.user.gpa,
      }
      );

    });

    
    res.send({ applications: users })
  } else {
    res.status(404).send("no approved applications");
  }
}


exports.pendingApp = async (req, res) => {
  const user = await Application.findAll({

    where: {
      status: "PENDING"
    },
    include: [
      {
        model: User,
      }
    ]
  })
  if (user) {
    console.log(user)
    const users = []

    user.forEach(element => {
      users.push({
        "id": element.id,
        "uuid": element.uuid,
        "userUUID": element.user.uuid,
        "firstname": element.user.firstname,
        "lastname": element.user.lastname,
        "email": element.user.email,
        "regnum": element.user.regnum,
        "yrofstudy": element.user.yrofstudy,
        "gender": element.user.gender,
        "gpa": element.user.gpa,
      }
      );

    });
    res.send(users)
  } else {
    res.sendStatus(404);
  }
}


exports.allWithDetails = async (req, res) => {
  const user = await Application.findAll({
    include: [
      {
        model: User,
      }
    ]
  })
  if (user) {
    console.log(user)
    const users = []

    user.forEach(element => {
      users.push({
         "id": element.id,
        "uuid": element.uuid,
        "status": element.status,
        "userUUID": element.user.uuid,
        "firstname": element.user.firstname,
        "lastname": element.user.lastname,
        "email": element.user.email,
        "regnum": element.user.regnum,
        "yrofstudy": element.user.yrofstudy,
        "gender": element.user.gender,
        "gpa": element.user.gpa,
      }
      );

    });
    res.send(users)
  } else {
    res.sendStatus(404);
  }
}


exports.countAll = async (req, res) => {
  const all = await Application.findAll({
    attributes:["status"],
    include: {
      model: User,
      attributes: [
        "gender",
        "yrofstudy"
      ]
    }

  })
  if (all) {
     
    const completed = all.filter(app=>app.status==='COMPLETED')
    const pending = all.filter(app=>app.status==='PENDING')
    const females = all.filter(app=>app.user.gender==='Female')
    const males = all.filter(app=>app.user.gender==='Male')
    const yr2 = all.filter(app=>app.user.yrofstudy=== 2)
    const yr3 = all.filter(app=>app.user.yrofstudy=== 3)
    const yr4 = all.filter(app=>app.user.yrofstudy=== 4)

    const dataToReturn = {
      totalApplicants : all.length,
      completedApplications: completed.length,
      pendingApplication: pending.length,
      totalFemales: females.length,
      totalMales: males.length,
      secondyr: yr2.length,
      thirdyr: yr3.length,
      fourthyr: yr4.length

    }
      
    res.send(dataToReturn)
  } else {
    res.status(404).send("no pending applications");
  }
}