const passport = require ('passport');
const LocalStrategy = require ('./localStrategy');
const User = require('../models/user')

//called login, saves the id to session 
passport.serializeUser((user,done)=>{
    console.log(user);
    done(null, {_id:user._id})
})

//user object attaches to the request as req.user
passport.deserializeUser((id, done) => {
    User.findOne(
        {_id:id},
        'username',
        (err,user)=>{
            console.log(user)
            done(null,user)
        }
    )
})

//Use Strategies
passport.use(LocalStrategy)

module.exports = passport