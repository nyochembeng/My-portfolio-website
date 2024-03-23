const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
const PORT = 5000
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://nyochembengn:itz4life@myportfoliocluster.yalu2zg.mongodb.net/PortfolioDB?retryWrites=true&w=majority&appName=MyPortfolioCluster"

async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to Mongodb");
    }
    catch(error){
        console.error(error);
    }
}

//connecting to db
connect();

//routes
app.use(require('./routes/Servicesroute'))
app.use(require('./routes/Portfolioroute'))
app.use(require('./routes/Experienceroute'))
app.use(require('./routes/Testimonialroute'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})