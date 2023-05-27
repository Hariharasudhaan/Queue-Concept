//Queue
let  inboundMSgQueue = [{name : 'John',Age : 23},{name : 'Karen',Age : 20},{name : 'Hanna',Age : 25}]

//Timeouts
const PROCESS_TIMEOUT_MS = 1000

//Function to Process the Queue
const processInboundQueue = ()=>{
    if(inboundMSgQueue.length > 0){
        let data = inboundMSgQueue.shift()
        console.log(data)
    } else{
        console.log("No process in the Queue")
    }
    inboundQueueTimer = setTimeout(processInboundQueue,inboundMSgQueue.length > 0 ? 0 : PROCESS_TIMEOUT_MS)
}

processInboundQueue()