'use strict'

const Application = require('../models/application');
const Beneficiary = require('../models/beneficiary');
const Scholarship = require('../models/scholarship');



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
