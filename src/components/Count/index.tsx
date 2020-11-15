import React,{useEffect, useState} from 'react'
import useMousePosition from '../../hooks/useMousePosition'
import useUrlLoader from '../../hooks/useUrlLoader'
interface IShowResult{
    message:string;
    status:string;
}
const Count:React.FC=()=>{
    const [obj,setObj]=useState({like:0,on:true})
    const ss=useMousePosition()
    const [data,loading]=useUrlLoader('https://dog.ceo/api/breeds/image/random')
    const dogUrl=data as IShowResult
    useEffect(()=>{
        console.log('点击执行')
        document.title=`点击了${obj.like}次`
    },[obj.like])
    return <div>
        <button onClick={()=>{
            setObj({like:obj.like+1,on:obj.on})
        }}>{obj.like}👍</button>
        <p>{ss.x}</p>
        {loading?<p>购过读取中</p>:<img src={dogUrl&&dogUrl.message} />}
         <button onClick={()=>{
            setObj({like:obj.like+1,on:!obj.on})
        }}>{obj.on?'on':"off"}👍</button>
    </div>
}
export default Count