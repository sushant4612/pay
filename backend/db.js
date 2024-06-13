const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sushantsp14:xlb3p80IleBWiZzy@cluster0.qmfrbty.mongodb.net/");

const userSchema = new mongoose.Schema(
    {
        userName : String,
        firstName : String,
        lastName : String,
        password : String
    }
)

const User = mongoose.model("User", userSchema);


module.exports = {
    User
}