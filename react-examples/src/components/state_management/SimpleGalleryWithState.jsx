import Picture from "./gallery/Picture";
import getPictures from "./ExternalAPI";
import { useState } from "react";

export default function SimpleGalleryWithState() {    
    
    let [ idx, setIdx ] = useState(0);
    const myPictures = getPictures()
    let currentPicture = myPictures[idx]

    return <>
        <code className="d-block mx-auto my-3 border rounded p-3 bg-secondary bg-opacity-10 w-50">
            idx = { idx } <br/>
            currentPicture = myPictures[{idx}]
        </code>
        <div className="d-flex flex-row gap-2 py-3 justify-content-center">
            <button onClick={() => { setIdx(idx - 1) }} disabled={idx - 1 < 0} className="btn btn-danger">Previous Slide</button>
            <button onClick={() => { setIdx(idx + 1) }} disabled={idx + 1 >= myPictures.length} className="btn btn-danger">Next Slide</button>
        </div>
        <Picture {...currentPicture}/>
    </>
}