const functions = require('firebase-functions');
const  fs = require('file-system');

module.exports = (exp, admin) => {

    exp.getRewards = functions.https.onRequest((req, res) => {
        fs.readFile('data/rewards.json', 'utf8', function (err, data) {
            if (err){
                res.json({inError: err});
            }else{
                res.json(JSON.parse(data));
            }
        });
    });

};