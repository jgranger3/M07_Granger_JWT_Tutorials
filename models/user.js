const mongoose = require('mongoose');
const { isEmail} = require('validator');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate:[(val) => { }, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter an password'],
        minlength: [6, 'Minimum password length is 6 character'],
    },
})

//fire a function after doc save to db
userSchema.post('save', function (doc, next) {
    console.log('new user was created & saved', doc);
    next();
});

//fire a function before doc save to db
userSchema.pre('save', function(next){
    console.log('user about to be created & save', this);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;