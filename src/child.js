import {exec} from 'child_process'

/* exec('ls', (error,stdout,stderror)=>{
    if(error){
        console.log('error: ', error.message)
    }
    if(stderror){
        console.log('stderror: ', error.message)
    }else{
        console.log('stdout', stdout)
    }
}) */
exec('node index.js', (error,stdout,stderror)=>{
    if(error){
        console.log('error: ', error.message)
    }
    if(stderror){
        console.log('stderror: ', error.message)
    }else{
        console.log('stdout', stdout)
    }
})