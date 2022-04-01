'use strict'

const { Sequelize } = require("sequelize");
const Role = require("../models/role");
const User = require("../models/user");
const User_role = require("../models/user_role");

exports.getUsers = async (req, res) => {
    const user = await User_role.findAll({
        include: [
            {
                model: User,
            },
            {
                model: Role,
            }   
        ]
    })
    if(user) {

        const users = []

        for(let i = 0; i < user.length; i++){
            let u = user[i].user
            let role = user[i].role
            let uder = {...u.dataValues, role:role.role_name}
            const wP = {
                id: uder.id,
                uuid: uder.uuid,
                firstname: uder.firstname,
                lastname:uder.lastname,
                email:uder.email,
                regnum:uder.regnum,
                yrofstudy:uder.yrofstudy,
                gender:uder.gender,
                gpa:uder.gpa,
                role:uder.role
            }
            users.push(wP)
        }

        console.log(users)
        res.send(users)
      }else {
        res.sendStatus(404);
      }
}