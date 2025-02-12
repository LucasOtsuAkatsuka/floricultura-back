const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
        select: false,
    },
    name: {
        type: String,
    },
    cel: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
    },
}, {
    timestamps: true,
});


//Hashing the password
UserSchema.pre("save", async function(next){
    const user = this;

    if(user.isModified("password")){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);

        user.password = hash;
    }
})

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;