const jwt = require("jsonwebtoken");
const Secret_Key = process.env.Secret_Key;

module.exports.createToken = async function createToken(data) {
    return await jwt.sign(data, 'jimijimi');
}

module.exports.verifyToken = async function verifyToken(token) {
    try {
        return await jwt.verify(token, 'jimijimi');
    } catch (error) {
        return false;
    }
}
