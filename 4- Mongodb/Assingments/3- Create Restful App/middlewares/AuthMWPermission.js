//Import
    const jwt = require("jsonwebtoken");
    const config = require("config");


module.exports = (req, res, nxt) => {
    // Get x-auth-token from Header
        const token = req.header("x-auth-token");
        if(!token) return res.status(401).send("Access Denied ...!!!");
    try{
        //Get Payload From Token
            const decodedPayload = jwt.verify(token, config.get("jwtsec"));
        // Check user Role
            if(!decodedPayload.adminRole) return res.status(401).send("This user Not Admin");

            nxt();
    } catch(err) {
        res.status(400).send("Invalid Token...")
    }
};