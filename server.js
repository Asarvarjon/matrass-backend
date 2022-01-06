require("dotenv").config();

const express = require("express");
const cors = require("cors")

// server created
const app = express();
const PORT = process.env.PORT || 8080;

// server function
async function server() {
    try { 
        app.listen(PORT, () => {
            console.log(`Server is ready at ${PORT}`);
        })

        // important middlewares
        app.use(cors())
        app.use(express.json())

        app.use(express.urlencoded({
            extended: true
        }));
        
    } catch (error) {
        console.log(`SERVER ERROR ${error.message}`);
    }
}


server()


