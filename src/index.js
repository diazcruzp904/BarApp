import express from 'express'
import menuRouter from './routes/menu.js' // we imported from the menu file 
import db from './utils/db.js' //from the db file

//creating the instance of the server that is in object app for express
const app = express()

//adding the capability to read json to the app this important to happen before any route
app.use(express.json())

// this tell express when you recieve a request then go to menu  through this router 
app.use("/menu", menuRouter)

app.get("/", (req, res) => {

res.json("All GOOD")

})

db.authenticate()//this connects the DB in the index

//this is the connection that creates the server this should be the last line in the index
app.listen(3001, () => console.log("connected"))
//after this we can test by calling node src/index.js in terminal to see if we connected
// after we found connectiion it is easy to install nodemon at terminal to have it make it easier to make changhes that are in the code base withoput restrting server
// it recieves change then does it auyto stop server by ctrl c  call nodemon in terminal nodemon src/index.js // we then added a dev line to the json pack and ran it in terminal when we make changes as npm run dev and that will call the script we wrote

