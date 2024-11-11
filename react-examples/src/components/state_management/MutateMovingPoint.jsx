import { useState } from "react";
import Dot from "./Dot";

export default function MutateMovingPoint() 
{
    const [ position, setPosition ] = useState({ x: 0, y: 0 })
    
    function handleOnPointerMove(e) {
        position.x = e.clientX - (window.innerWidth / 3)
        position.y = e.clientY - (window.innerHeight / 3)
    }

    return <>
        <code className="text-center w-100 d-block pb-3 my-3 border rounded p-3 bg-secondary bg-opacity-10">
            position.x = e.clientX - (window.innerWidth / 3)
            position.y = e.clientY - (window.innerHeight / 3)
        </code>
        <div className="border border-1 w-100" style={{ height: "300px" }} onPointerMove={handleOnPointerMove}>
            <Dot position={position}/>
        </div>
    </>
}