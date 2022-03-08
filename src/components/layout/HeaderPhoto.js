import React from 'react';
import "../headerphoto.css"
import imgheader from "../../images/visual.png";
function Headerphoto() {
    return (
        <>
        <div className="img">
            <img src={imgheader} />
        </div>
        <div className="link">
            Home / Designers / Gucci
        </div>
        </>
    )
}

export default Headerphoto
