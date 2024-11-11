import { useState } from "react"

export default function MyButtonV1({ classNames, message }) 
{
    const [ showMessage, setShowMessage ] = useState(false)

    function handleOnClick() {
        setShowMessage(!showMessage)
    }

    return <>
        <div className={classNames + " d-flex flex-column gap-2 align-items-center"}>
            <code style={{ width: "fit-content" }} className="d-block mx-auto my-3 border rounded p-3 bg-secondary bg-opacity-10">
                function <span className="fw-bold">handleOnClick</span>() {"{  }"} <br/>
                ... <br/>
                {" <button onClick={handleOnClick} ...></button>"}
            </code>
            <button className="fs-4 btn btn-primary" onClick={handleOnClick}>
                Show message <span className="fst-italic">w/declared_function</span>
            </button>
            <p className="fw-bold fs-2"> {showMessage && message} </p>
        </div>
    </>
}