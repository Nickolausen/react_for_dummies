import { useState } from "react";
import ChatRoom from "./ChatRoom";

export default function Synchronization() 
{
    const [ roomId, setRoomId ] = useState("General")
    const [ mountComponent, setMountComponent ] = useState(false)

    return <section className="container-fluid">
        <div className="row">
            <h2 className="text-center display-4"><span className="fw-bold">Sincronizzazione</span> di un componente</h2>
        </div>
        <div className="row w-100 px-5">
            <div className="col-12 d-flex justify-content-center">
                <button className="btn btn-primary my-5" onClick={() => { setMountComponent(!mountComponent) }}>
                   { mountComponent ? "Nascondi" : "Mostra" } Componente
                </button>
            </div>
            <div className="col-12">
                <div className="d-flex justify-content-center pb-4">
                    <select style={{ height: 30 + "px", minWidth: 200 + "px"}} value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                        <option value={"General"}>General</option>
                        <option value={"F.A.Q."}>F.A.Q.</option>
                        <option value={"Gaming"}>Gaming</option>
                    </select>
                </div>
                <div className="row">
                    { mountComponent && <ChatRoom roomId={roomId}/> }
                </div>
            </div>
        </div>
    </section>
}