import express from "express"

const app = express()
const PORT = 5000

app.use('/', (req,res,next) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`Server Running at port: ${PORT}`);
})