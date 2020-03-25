const express = require("express"); 
const bodyPars = require("body-parser"); // to parse post request body
const cors = require("cors"const express = require("express"); 
const bodyPars = require("body-parser"); // to parse post request body
const cors = require("cors"); // accept cross client request
let schema = require("./schema"); // 
let {nstore} = schema;
const app = express();
// using middle ware for parse and cross request
app.use(bodyPars());
// only allowing cros fom my site
app.use( cors({
    }));
app.post("/pfb",(req,res)=>{
    const body = req.body;  // copying request body
    let val = new nstore({      // fitting request to menu schema
        brand:body.brand
    });
    nstore.find({"brand":val.brand},{"product":1,"_id":0},(err,val)=>{ //request all data from menu collection
        res.send(val)  
    })
});
app.get("/bl",(req,res)=>{
    nstore.find({},{"brand":1,"_id":0},(err,val)=>{ //request all data from menu collection
        res.send(val)  
    })
});
app.post("/peefb",(req,res)=>{
    
    val.save().then(doc=>{   // saving new item to  mongoose
        //console.log(doc)
        res.write("sucess");
        res.end();
    }) 
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("server started lisening in port 3000.....");
})); // accept cross client request
let schema = require("./schema"); // 
let {nstore} = schema;
const app = express();
// using middle ware for parse and cross request
app.use(bodyPars());
// only allowing cros fom my site
app.use( cors({
    }));
app.get("/pfb",(req,res)=>{
    nstore.find({"brand":"colgte"},{"product":1,"_id":0},(err,val)=>{ //request all data from menu collection
        res.send(val)  
    })
});
app.get("/bl",(req,res)=>{
    nstore.find({},{"brand":1,"_id":0},(err,val)=>{ //request all data from menu collection
        res.send(val)  
    })
});
app.post("/insert",(req,res)=>{
    const body = req.body;  // copying request body
    let val = new Menu({      // fitting request to menu schema
        Name:body.Name,
        Price: body.Price,
        din:body.din,
        lun:body.lun,
        bre:body.bre

    });
    val.save().then(doc=>{   // saving new item to  mongoose
        //console.log(doc)
        res.write("sucess");
        res.end();
    }) 
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("server started lisening in port 3000.....");
})
