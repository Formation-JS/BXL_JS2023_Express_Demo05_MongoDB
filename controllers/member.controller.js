const memberService = require("../services/member.service");
const { memberRegisterValidator } = require("../validators/member.validator");

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
        // Validation du body
        let data;
        try {
            data = await memberRegisterValidator.validate(req.body, { abortEarly: false });
        }
        catch(error) {
            console.log(error);
            res.render('member/register', { 
                errorMessage: 'Les données sont invalides',
                data: req.body
            });
            return;
        }

        // Check username is unique
        if(await memberService.usernameExists(data.username)) {
            res.render('member/register', { 
                errorMessage: 'Le pseudo n\'est pas disponible 😭',
                data: req.body
            });
            return;
        }

        // Save user in DB
        await memberService.register(data);

        // Redirection vers le login
        res.redirect('/member/login');
    },

}

module.exports = memberController;