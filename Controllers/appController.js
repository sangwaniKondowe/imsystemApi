'use strict'

const Applicant = require('../models/applicant');
//const applicants = require('../models/applicant');

exports.sending_application = async (req, res) => {
    const details =  { fullName, YrOfStudy, program,
         regNum, description, nameOfScholar, accountNum, bankName,religion };

         details = req.body
         try {
             const appli = await Applicant.create(details)

             return res.json(appli)
         } catch (err) {
             console.log(err)
             return res.status(500).json(err)
         }
}