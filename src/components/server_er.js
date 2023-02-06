import React from "react";
import { Alert } from "react-bootstrap";
import { MdOutlineEmail } from "react-icons/md"
import { BsAt } from "react-icons/bs"
const ServerError = (prop) => {

    return (
        <Alert show={true} variant="danger w-75 m-auto mb-5" dismissible onClose={() => { prop.close(true) }}>
            <Alert.Heading>Ojej!</Alert.Heading>
            <span className="fs-4">Wystąpił błąd po stronie serwera,<br/> lub serwer został wyłączony z powodu braku środków na dalsze działanie aplikacji :(</span><br />
            <hr />
            <span>Jeżeli problem będzie się powtarzał, skontaktuj się ze mną:</span><br />
            <a className="fs-4" href="mailto:lukaszkepa03@gmail.com" style={{ textDecoration: "none" }}><MdOutlineEmail /> Lukaszkepa03<BsAt />gmail.com</a>

        </Alert>
    )
}
export default ServerError