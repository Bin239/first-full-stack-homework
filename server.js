const express = require("express");
const app = express();
require("./db/db");
const bodyParser = require("body-parser");
const avengersController = require("./controllers/avengers");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: false}));
app.use("/avengers", avengersController)



app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.listen(3000, () => {
    console.log("Listening on 3000")
})