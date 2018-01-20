var mongoose = require('mongoose');
var Message = require('../model/messageModel');

const saveMessage = function(messageObject) {
    let message = new Message();
    message.guid = messageObject.guid;
    message.dateTime = messageObject.dateTime;
    return new Promise( (resolve, reject) => {
        message.save(function (err) {
            if(err){
                console.log("ERROR : " + err)
                return reject(err);
            }
        });
        return resolve({"status" : "ok"});
    });
};

module.exports = {saveMessage : saveMessage};
