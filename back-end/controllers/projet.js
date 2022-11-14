const Connection = require("../config/DB.js");

exports.getAllProjet = (req,res,next) => {
    const sqlProjet = `SELECT titre, description, url, img FROM projet`;

    Connection.query( sqlProjet, (error, results) => {
        if (error) {
            return res.json({ error })
        }
        res.send(results)
    })
}