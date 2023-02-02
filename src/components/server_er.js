import React from "react";
import { Alert } from "react-bootstrap";
import {MdOutlineEmail} from "react-icons/md"
import {BsAt} from "react-icons/bs"
const ServerError = (prop) =>{

    return(
        <Alert show={true} variant="danger"  dismissible onClose={()=>{prop.close(true)}}>
        <Alert.Heading>Ojej!</Alert.Heading>
        <span>Wystąpił błąd po stronie serwera :(</span><br />
        <hr />
        <span>Jeżeli problem będzie się powtarzał, skontaktuj się ze mną:</span><br />
        <a className="fs-4" href="mailto:lukaszkepa03@gmail.com" style={{ textDecoration: "none" }}><MdOutlineEmail /> Lukaszkepa03<BsAt />gmail.com</a>

    </Alert>
    )
}
export default ServerError