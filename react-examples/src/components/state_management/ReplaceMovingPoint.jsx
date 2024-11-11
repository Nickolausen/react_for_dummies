import { useState } from "react";
import Dot from "./Dot";

export default function ReplaceMovingPoint() 
{
    const [ position, setPosition ] = useState({ x: 0, y: 0 })
    
    function handleOnPointerMove(e) {
        let newPosition = { 
            x: e.clientX - (window.innerWidth / 2),
            y: e.clientY - (window.innerHeight / 2)
        }

        setPosition(newPosition)
    }

    return <>
        <code className="text-center w-100 d-block pb-3 my-3 border rounded p-3 bg-secondary bg-opacity-10">
            let newPosition = {"{ ... }"} <br/>
            <span className="fw-bold">setPosition</span>(newPosition)
        </code>
        <div style={{ height: "300px" }} className="border border-1 position-relative" onPointerMove={handleOnPointerMove}>
            <Dot position={position}/>
        </div>
    </>
}