import express from 'express';
import router from './routers/formRouter.js'
const app = express();
const port = process.env.PORT || 8080



app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))
app.use('/', router)



app.listen(port, (err, res) => {
    if (err) return console.error({err: err.message})
    console.log('The app is listening on port: ' + port);
})