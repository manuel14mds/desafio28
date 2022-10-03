import express from 'express'
import {fork} from 'child_process'

const app = express()
app.listen(8080, ()=>console.log('listen on 8080 port'))
let visitas = 0

function suma(){
    let resultado = 0
    for(let i=0;i<5e9;i++){
        resultado+=i
    }
    return resultado
}

app.get('/', async (req,res)=>{
    res.send('Estamos')
})  
app.get('/info', async (req,res)=>{
    let info={
        argumentosEntrada:process.argv,
        plataforma: process.platform,
        versionNode: process.version,
        memoriaReservada: process.memoryUsage ,
        pathEjecucion: process.title,
        pid: process.pid,
        carpetaProyecto: process.cwd()
    }
    res.send(info)
})  

app.get('/visitas',(req,res)=>{
    res.send(`Visitado ${++visitas} veces`)
})

app.get('/randoms',(req,res)=>{
    try {
        let cantidad = 100000000
        if(req.query.cant){
            cantidad = parseInt(req.query.cant)
        }
        const child = fork(`./index.js` )
        child.send(cantidad)
        child.on('message', val=>{
            res.send(val)
        })
    } catch (error) {
        res.status(500).send({status:'error', message:'Server error'})
    }
})