let express = require('express');
let user = require('./user');
let app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
let port = process.env.PORT || 7777;

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.get('/',function(req,res){
    res.send("<h1>Hello Node.js</h1>");
});
app.get("/user", cors(corsOptions),(req,res) => {
    const allUser = user.findAll();
    res.json(allUser).status(200);
});
app.post("/login", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const users = user.login(username, password);
    res.json(users); 
});
app.get('/index',function(req,res){
    res.send("<h1>this is index page</h1>");
});
app.listen(port,function(){
    console.log("Starting node.js on port"+port);
});