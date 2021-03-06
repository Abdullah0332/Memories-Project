const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv")

const postRoutes = require("./routes/posts")

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

app.use(cors());

app.use("/posts", postRoutes);

app.use('/', (req, res, next) => {
    res.send("Hello to Memories API");
})

const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URI, 
    { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
    }).then(() => {
        app.listen(PORT, 
            () => {
                console.log(`PORT is Running on PORT ${PORT}`)
            })
    }).catch(error => {
        console.log("MongoDB Connection ERROR :", error)
    })

mongoose.set("useFindAndModify", false);
