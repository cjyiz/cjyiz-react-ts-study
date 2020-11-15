import React,{useEffect, useState} from 'react'
const Count:React.FC=()=>{
    const [obj,setObj]=useState({like:0,on:true})
    useEffect(()=>{
        console.log('点击执行')
        document.title=`点击了${obj.like}次`
    },[obj.like])
    return <div>
        <button onClick={()=>{
            setObj({like:obj.like+1,on:obj.on})
        }}>{obj.like}👍</button>
         <button onClick={()=>{
            setObj({like:obj.like+1,on:!obj.on})
        }}>{obj.on?'on':"off"}👍</button>
    </div>
}
export default Count