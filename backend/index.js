const express = require("express")
const MOCK_data = require("./MOCK_DATA (2).json")
const PORT = 3001;
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/api/jokes",(req,res)=>{
    return res.json(MOCK_data)
})

 
app.listen(PORT,()=>console.log(`Server Started at PORT ${PORT}`))