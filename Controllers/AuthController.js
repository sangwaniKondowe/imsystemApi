const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Role = require("../models/role");
const User_role = require("../models/user_role");
//const Application = require("../models/application");


require("dotenv").config();

class AuthController {
    // let's generate a token

    static generateToken = (data) => {
        return jwt.sign({data}, process.env.TOKEN_SECRET, {
             expiresIn: 60 * 60,     
        });
    };


    // login
    static login = async (req, res) => {

    //    await  User.findAll().then(re=>{
    //         res.send(re)
    //     });
      

        try {
            const { email, password } = req.body;

            const user = await User.findOne({
                where: {
                    email,
                },
                include: User_role,
            });
           

            if(user === null) {

                
            res.status(401).json({
                message: "Incorrect email or password."
            });
            }

            const validPassword = bcrypt.compareSync(password, user.password);

            if (validPassword) {
                const userRoles = user.user_roles.map(r=>{return r.dataValues.roleId})

            
                let ur = []
                for(let i = 0; i < userRoles.length; i++){
                    const userRole = await Role.findOne({
                        where:{
                            id:userRoles[i]
                        }
                    })
                    ur.push(userRole.dataValues.role_name)
                }
                const role=ur[0];

                const data = {
                    userId : user.id,
                    roles : ur
                }
                const token = this.generateToken(data);
                res.status(200).json({
                    token,
                    role,
                    response: {
                        message: "logged in successfully!"
                    },
                });
            } else {
                res.sendStatus(401);
            }
        } catch (err) {
          console.log(err)
        }
    }

    //validating token
    static validateToken = (req, res, next) => {
        // gather the jwt access token from the request header

        const authHeader = req.headers["authorization"];

        const token = authHeader && authHeader.split(" ")[1];

        if (token === null) 
            return res.status(401).json({ message: "Unauthenticated" });
        jwt.verify(token, process.env.TOKEN_SECRET, (err, authData) => {

            console.log(authData)
            if (err) res.sendStatus(403, err.message);
            if(authData.data.roles.length>=1){
                req.roles = authData.data.roles[0]
                req.userId = authData.data.userId
            }
            next();
        });
    };
        
    static preAuthorize = (...role) => {
        return (req, res, next) => {
            if (!role.includes(req.roles)) {
                next(
                    res.status(403).json("You do not have permission to perfom this action")
                )
            };
            next();
        };
        
    };
}

const { login, validateToken, preAuthorize } = AuthController;

module.exports = {
    login,
    validateToken,
    preAuthorize
};


