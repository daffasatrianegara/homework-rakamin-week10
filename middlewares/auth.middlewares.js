const jwt = require('jsonwebtoken')
require('dotenv').config({path : '../.env'})
const secret_key = process.env.SECRET_KEY || 'koderahasianegara'

const authToken = (req, resp, next) => {
    const token = req.header('Authorization')
    if (!token) {
        return resp.status(401).json({ error: 'Akses ditolak. lakukan login/register terlebih dahulu...' })
    }

    const tokenWithoutBearer = token.replace('Bearer ', '');
    jwt.verify(tokenWithoutBearer, secret_key, (err, user) => {
        if (err) {
            return resp.status(403).json({ error: 'Token tidak valid.' })
        } 
        req.user = user;
        next();
    });
}

module.exports = {
    authToken,
}