'use strict'

const Application = require('../models/application');
const Beneficiary = require('../models/beneficiary');
const User = require('../models/user');



exports.showBeneficiary = async (req, res) => {
    const Beneficiaries = await Beneficiary.findAll({
    
    });

    if (Beneficiaries) {

      res.status(200).json({ Beneficiaries });
    } else {
      res.status(404).send("no messages");
    }
  };







exports.getBeneficiary = async(req, res) => {

    
        const uuid = req.params.beneficiaryUUID;
        const attributes1 = [
            "uuid",
        ]
        
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

    
  exports.overrideSelection = async(req, res) => {

    try {

      const uuid = req.params.applicationUuid

      const attributes1 = [
                    "uuid",
                ]

      const addBeneficiary = await Application.findOne({
          where: {
            uuid,
          },
          attributes: attributes1,
          include: [
            {
              model: User,
              attributes: [ ]
            }
          ]

      })
      if (addBeneficiary) {
        console.log(addBeneficiary)
        Application.update({ status : "COMPLETED"}, {
          where: {
            uuid,
          }

        }).then(response => {

          if (response === 1) {
            

            Beneficiary.create({
            
              applicationId: addBeneficiary.id,
            })
          }
        })
        res.send({ success:true, message:"Application success" })

      } else {
        res.send({
          success:false
        })
      }
      } catch( err) {
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