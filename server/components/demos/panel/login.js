"use strict";

module.exports = {
    verify: async function(data) {
        const saltLength = 13;
        const pepperLength = 8;
        const equalsPepperLenght = 2;

        // Remove pepper after equals number
        const removedEqualsPepper = {
            user: (data.user).substring(0, (data.user).length - equalsPepperLenght),
            pass: (data.pass).substring(0, (data.pass).length - equalsPepperLenght)
        }

        //  Get equals length
        const equals = {
            user: (removedEqualsPepper.user).charAt((removedEqualsPepper.user).length - 1),
            pass: (removedEqualsPepper.pass).charAt((removedEqualsPepper.pass).length - 1)
        }

        //  Remove salt and pepper
        const removedSalt = {
            user: (removedEqualsPepper.user).substring(saltLength),
            pass: (removedEqualsPepper.pass).substring(saltLength)
        }

        const removedPepper = {
            user: (removedSalt.user).substring(0, (removedSalt.user).length - pepperLength - 1),
            pass: (removedSalt.pass).substring(0, (removedSalt.pass).length - pepperLength - 1)
        }

        //  Add equals
        let hash = {
            user: removedPepper.user,
            pass: removedPepper.pass
        }

        for(let i = 0; i < equals.user; i++) {
            hash.user = hash.user + "=";
        }

        for(let i = 0; i < equals.pass; i++) {
            hash.pass = hash.pass + "=";
        }

        console.log(hash.user)

        //  Decrypt
        const decryptedInput = {
            user: atob(hash.user),
            pass: atob(hash.pass)
        }

        console.log(decryptedInput.user + " " + decryptedInput.pass);
        return false;
    }
}