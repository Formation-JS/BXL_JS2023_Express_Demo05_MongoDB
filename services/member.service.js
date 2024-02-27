const argon2 = require("argon2");
const Member = require("../models/member.model");

const memberService = {

    usernameExists: async (username) => {
        //! TODO Finish -> Check in DB 
        return false;
    },

    register: async ({username, firstname, lastname, password}) => {

        const pwdHash = await argon2.hash(password);

        const memberCreated = new Member({
            username, 
            firstname, 
            lastname, 
            password: pwdHash
        });
        await memberCreated.save();

        return memberCreated;
    },

};

module.exports = memberService;