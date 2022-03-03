const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");


require("dotenv").config;

class AuthController {
    // let's generate a token

    static generateToken = (role) => {
        return jwt.sign({ data: role}, process.env.TOKEN_SECRET, {
             expiresIn: 60 * 60,     
        });
    };


    // login
    static login = async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const student = await User.findOne({
                where: {
                    email,
                },
            });

            if(student === null) {
                res.sendStatus(401);
            }

            const validPassword = bcrypt.compareSync(password, student.password);

            if (validPassword) {
                const token = this.generateToken(student.role);
                res.status(200).json({
                    token,
                    data: student,
                });
            } else {
                res.sendStatus(401, "Wrong credintials");
            }
        } catch (err) {
            res.sendStatus(500, err.message)
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
            if (err) res.sendStatus(403, err.message);
            req.role = authData.data;
            next();
        });
    };

    static preAuthorize = (...role) => {
        return (req, res, next) => {
            if (!role.includes(req.role)) {
                next(
                    res.sendStatus(403, "You do not have permission to perfom this action")
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


