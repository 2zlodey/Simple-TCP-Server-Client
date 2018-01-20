var characterVariants = "abcdefghijklmnopqrstuvwxyz0123456789";

const generateGuid = function(){
    return randomString(8) + "-"
        + randomString(4) + "-"
        + randomString(4) + "-"
        + randomString(12);
};

function randomString(length){
    let string = "";
    for(let i = 0; i < length; i++){
        string += randomCharacter();
    }
    return string;
}

function randomCharacter(){
    return characterVariants.charAt(Math.floor(Math.random() * characterVariants.length));
}

module.exports = {generateGuid: generateGuid};
