'use strict'

const Application = require('../models/application');
const Beneficiary = require('../models/beneficiary');
const User_role = require('../models/user_role');



exports.showBeneficiary = async (req, res) => {


  try {
    const Beneficiaries = await Beneficiary.findAll({
    
    });

    if (Beneficiaries) {

      res.status(200).json({ Beneficiaries });
    } else {
      res.status(404).send("no messages");
    }
  }
  catch( err) {
    console.log(err)
  }
}






exports.getBeneficiary = async(req, res) => {

    
        const uuid = req.params.beneficiaryUUID;
        const attributes1 = [
            "uuid",
        ]

    try {
    
        
    const beneficiary = await Beneficiary.findOne({
        where: {
            uuid,
        },
        attributes: attributes1,
        include: [
          {
            model: Application,
            attributes: ["fullName", "regNum", "status"],
          },
         {
             model: Scholarship,
             attributes: ["name"],
         },
        ],
    });
      if(beneficiary) {
        res.send(beneficiary)
      }else {
        res.status(404).send("no beneficiary with uuid:" + uuid);
      }
    } 
   catch( err) {
    console.log(err)
  }
}

    
  



// exports.overrideSelection = async(req, res) => {

    
//         const uuid = req.params.applicationUUID;
//         const attributes1 = [
//             "uuid",
//         ]
        
//     const beneficiary = await Beneficiary.findOne({
//         where: {
//             uuid,
//         },
//         attributes: attributes1,
//         include: [
//           {
//             model: Application,
//             attributes: ["fullName", "regNum", "status"],
//           },
//          {
//              model: Scholarship,
//              attributes: ["name"],
//          },
//         ],
//     });
//       if(beneficiary) {
//         res.send(beneficiary)
//       }else {
//         res.status(404).send("no beneficiary with uuid:" + uuid);
//       }
//     }