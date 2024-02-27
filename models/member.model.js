const mongooose = require('mongoose');

const memberSchema = mongooose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        trim: true
    },
    firstname: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    collection: 'Member',
    timestamps: true
});

const Member = mongooose.model('Member', memberSchema);
module.exports = Member;
