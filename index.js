const express = require ("express")
const app = express()
PORT = 4000
const ejs = require ("ejs")
let URI = "mongodb+srv://pelumi:pelumi123@cluster0.qiildcr.mongodb.net/October23_db?retryWrites=true&w=majority"
const mongoose = require("mongoose")
app.use(express.urlencoded ({ extended: true}))
app.set("view engine", "ejs")


mongoose.connect(URI).then(() => {
    console.log("Database connected successfully");
})
    .catch((err) => {
        console.log(err);
    })

    let userSchema = mongoose.Schema({
        fullName:String,
        email: { type: String, unique: true, required: true },
        password:String,
        confirmPassword:String,
    })

    let userModel = mongoose.model("users", userSchema)


app.get("/", (req, res)=> {
res.render("index")
})

app.get("/signin", (req, res)=> {
     res.render("signin")
})
app.get("/signup", (req, res)=> {
    res.render("signup")
})
app.post("/signup", (req, res) => {
     console.log(req.body);
    console.log("am here");
    let user = new userModel(req.body)
    user.save()
})

app.get("/index", (req, res) =>{
    res.send([{
        FullName: "Oluwa",
        Email: "oluwa16@gmail.com",
        Password: "1234",
        ConfirmPassword: "1234"
    },{
        FullName: "Pelumi",
        Email: "pelumi16@gmail.com",
        Password: "2341",
        ConfirmPassword: "2341"
    },{
        FullName: "Victor",
        Email: "victor16@gmail.com",
        Password: "3412",
        ConfirmPassword: "3412"
    },{
        FullName: "Oluwapelumi",
        Email: "oluwapelumi16@gmail.com",
        Password: "4123",
        ConfirmPassword: "4123"
    }
])
})
app.listen(PORT, () => {
    console.log("serve is running on PORT 4000")
})