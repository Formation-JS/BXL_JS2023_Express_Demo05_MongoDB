const memberService = require("../services/member.service");

const memberController = {

    login: async (req, res) => {
        res.render('member/login');
    },
    
    login_POST: async (req, res) => {
        //! TODO Ajouter un validator (→ Yup)

        res.sendStatus(501);
    },
    
    register: async (req, res) => {
        res.render('member/register');
    },
    
    register_POST: async (req, res) => {
        //! TODO Ajouter un validator (→ Yup)
        const data = req.body;

        // Check username is unique
        if(await memberService.usernameExists(data.username)) {
            //! TODO Redirect to register page
            res.sendStatus(501);
            return;
        }

        // Save user in DB
        await memberService.register(data);

        // Redirection vers le login
        res.redirect('/member/login');
    },

}

module.exports = memberController;