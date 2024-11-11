import { useState } from "react"

export default function MyButtonV3({ classNames, message }) 
{
    const [ showMessage, setShowMessage ] = useState(false)

    return <div className={classNames + " d-flex flex-column gap-2 align-items-center"}>
        <code style={{ width: "fit-content" }} className="d-block mx-auto my-3 border rounded p-3 bg-secondary bg-opacity-10">
            {" <button onClick={() => { ... }}></button>"}
        </code>
        <button className="fs-4 btn btn-primary" onClick={() => {
            setShowMessage(!showMessage)
        }}>
            Show message <span className="fst-italic">w/lambda_function</span>
        </button>
        <p className="fw-bold fs-2"> {showMessage && message} </p>
    </div>
}