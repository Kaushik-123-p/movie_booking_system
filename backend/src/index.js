import dotenv from "dotenv"
import connetDB from "./database/index.js"
import {app} from  "./app.js"

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 5000

connetDB()
.then( () => {
    app.listen(PORT, () =>{
        console.log(`Server is Running at port : ${PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection Error : ", error);
})