const yup = require('yup');

const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\d\s]).{8,}$/;

const memberRegisterValidator = yup.object().shape({

    username: yup.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    firstname: yup.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    lastname: yup.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    password: yup.string()
        .trim()
        .matches(pwdRegex)
        .required(),

    confirm: yup.string()
        .oneOf([yup.ref('password')])
        .required()

});

module.exports = {
    memberRegisterValidator
};