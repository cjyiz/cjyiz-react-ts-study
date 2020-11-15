import React ,{useState,useEffect} from 'react'
 const Mouse:React.FC=()=>{
    const [position,setPosition]=useState({x:0,y:0})
    useEffect(()=>{
        console.log('add Effect',position.x)
        const updateMouse=(e:MouseEvent)=>{
            setPosition({x:e.clientX,y:e.clientY})
        }
        document.addEventListener('click',updateMouse)
        return ()=>{
            console.log('remove Effect',position.x)
            // document.removeEventListener('click',updateMouse)
        }
    },[])
return <div>
    <p>x:{position.x},Y:{position.y}</p>
</div>
 }
export default Mouse