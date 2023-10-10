const express = require ("express")
const app = express()
PORT = 4000
const ejs = require ("ejs")


app.set("view engine", "ejs")
app.use(express.urlencoded ({ extended: true}))

app.get("/signup", (req, res)=> {
    res.render("signup")
})

app.get("/", (req, res)=> {
res.render("index")
})

app.get("/signin", (req, res)=> {
     res.render("signin")
})
app.post("/signin", (req, res) => {
     console.log(req.body);
     console.log("am here");
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