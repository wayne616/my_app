const Connection = require("../config/DB.js");

exports.getAllSkills = (req,res,next) => {
    const sqlSkills = `SELECT titre, description, img FROM skills`;

    Connection.query( sqlSkills, (error, results) => {
        if (error) {
            return res.json({ error })
        }
        console.log(results);
        res.send(results)
    })
}