const jwt = require("jsonwebtoken");
const Secret_Key = process.env.Secret_Key;

module.exports.createToken = function createToken(data) {
    return await jwt.sign(data, Secret_Key);
}

module.exports.verifyToken = function verifyToken(token) {
    try {
        return await jwt.verify(token, Secret_Key);
    } catch (error) {
        return false;
    }
}