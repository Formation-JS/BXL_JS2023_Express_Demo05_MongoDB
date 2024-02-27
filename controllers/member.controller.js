const memberController = {

    login: async (req, res) => {
        res.render('member/login');
    },
    
    login_POST: async (req, res) => {
        res.sendStatus(501);
    },
    
    register: async (req, res) => {
        res.render('member/register');
    },
    
    register_POST: async (req, res) => {
        res.sendStatus(501);
    },

}

module.exports = memberController;