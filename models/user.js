const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

//Define userSchema
const userSchema = new Schema({
  username: {type: String, unique:false},
  password: {type: String, unique:false},
  
});

//Define Schema methods
userSchema.methods = {
    checkPassword: inputPassword => {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}
//Define pre hooks for the save method
userSchema.pre("save", next => {
    if (!this.password) {
        console.log("No password provided")
    } else {
        console.log("hashPassword is pre save");
        this.password = this.hashPassword(this.password);
        next()
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;