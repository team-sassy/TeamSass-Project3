const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();
const session = require("express-session");
const passport = require("./passport")
const dbConnetion = require("./mongooseConnect") 
const MongoStore = require("connect-mongo")(session)

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//sessions
app.use(
  session({
    secret: 'oompa-lumpia', //random string to make the hash that is generatef secure
    store: new MongoStore({mongooseConnection: dbConnetion}),
    resave: false, // required
    saveUninitialized: false, //required
  })
)

app.use((req, res, next) => {
  console.log(req.session);
  next()
})

//Passport
app.use(passport.initialize())
app.use(passport.session()) //calls the serialize and deserializeUser

// Define API routes here
app.use(routes)


//Connet to mongoose
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/travelorganizers", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
