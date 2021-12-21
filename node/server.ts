import express from 'express'
import serviceRoute from './src/routes/service.routes';
import userRouter from './src/routes/user.routes'

const app = express()
const port = 3000;
app.use(express.json());
app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
})
app.use('/users', userRouter)
app.use('/services', serviceRoute)

app.listen(port , () =>{
    console.log(`Servidor executado na porta ${port}`)
})