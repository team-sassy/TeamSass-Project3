const router = require("express").Router();
const User = require("../../models/user")
const passport = require ("../../passport")

router.post("/", (req, res) => {
    console.log("user signup");
    const { username, password } = req.body;
    //Add validation
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log("the err is" + err);
        } else if (user) {
            res.json({
                 error: `${username} has already been used` 
            })
        } else {
            const newUser = new User({
                username: username,
                password: password,
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err);
                res.json(savedUser)
            })
        }
    })
})

router.post("/login", passport.authenticate('local'), (req, res) => {
        // console.log("logged in", req.user);
        let userInfo = {
            username: req.user.username,
            id: req.user._id
        };
        res.send(userInfo);
    }
)

router.get('/', (req,res,next) => {
    if(req.user){
        res.json({user: req.user})
    }else{
        res.json ({user: null})
    }
})

router.post('/logout', (req,res) => {
    if(req.user){
        req.logout();
        res.send({msg: "log out"})
    } else{
        res.send({msg: "nothing to log out"})
    }
})

module.exports = router;