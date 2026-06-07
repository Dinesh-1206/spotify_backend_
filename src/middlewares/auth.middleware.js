const jwt = require("jsonwebtoken");

async function authArtist(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ messsage: "unauthorized 1" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.role !== "artist") {
            return res.status(403).json({ message: "you donot have access to create music" })
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "unauthorized 2" })
    }
}

async function authUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ messsage: "unauthorized " })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.role !== "user " && decoded.role !== "artist") {
            return res.status(403).json({ message: "you donot have access to this resource" })
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "unauthorized 2" })
    }
}

module.exports = { authArtist, authUser };