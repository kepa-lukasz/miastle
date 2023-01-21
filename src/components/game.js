import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'
import { Spinner, Button, Alert, Container } from "react-bootstrap"
//icons
import {
    BsArrowDownLeftSquareFill,
    BsArrowDownSquareFill,
    BsArrowDownRightSquareFill,

    BsArrowLeftSquareFill,
    BsArrowRightSquareFill,

    BsArrowUpLeftSquareFill,
    BsArrowUpRightSquareFill,
    BsArrowUpSquareFill,
    BsHeartFill
} from "react-icons/bs"



const Game = () => {
    const spinner = <Spinner animation="border" role="status" />
    const [RenderedItem, setRenderedItem] = useState(spinner);
    const [city, setCity] = useState("")
    const [attempts, setAttempts] = useState([]);
    let [gameOn, setGameOn] = useState(true)
    let counter = 0
    let attemptsList = [];
    let miasto = ""
    let wojewodztwo = ""

    //get city
    const newCity = () => {
        Axios.get("https://wbhiy9wgrg.execute-api.us-east-2.amazonaws.com/get/randomcity")
            .then((res) => {
                let newCity = res.data.city;
                setCity(newCity);
                miasto = newCity
            })

    }
    const changeData = (ev) => {
        wojewodztwo = ev.target.value
    }
    useEffect(() => {
        if (city === "") newCity()

        //get options list 
        Axios.get("https://wbhiy9wgrg.execute-api.us-east-2.amazonaws.com/get/wojewodztwa")
            .then((res) => {
                const list = res.data.wojewodztwa
                const options = list.map((el) => { return (<option key={el}>{el}</option>) })
                const RenderedInput =
                    <div className="mt-2 d-flex">
                        <div className="w-75 pe-2 m-0 mt-1">
                            <input list="data" placeholder="zacznij pisać..." className="w-100 py-1" onInput={(changeData)} />
                        </div>
                        <datalist id="data">
                            {options}
                        </datalist>
                        <Button disabled={!gameOn} onClick={check} className="p-0 py-2 w-25" variant="success">Sprawdź</Button>
                    </div>
                setRenderedItem(RenderedInput)
            })
        //change input value
        

    }, [gameOn, wojewodztwo])
    const check = () => {
        //check if wojewodztwo is good, returns directions if no
        Axios.post("https://wbhiy9wgrg.execute-api.us-east-2.amazonaws.com/post/guess", { 'attempt': wojewodztwo, 'city': miasto })
            .then((res) => {
                let listElement;
                counter = counter + 1;
                switch (res.data.result) {
                    case "+ +":
                        setGameOn(false);
                        listElement = <Alert variant="success text-center" key={counter}>
                            <BsHeartFill size={40} /> Gratulacje! <BsHeartFill size={40} /><br />
                            Liczba prób: {counter}<br />
                            <Button onClick={() => { window.location.reload() }} variant="success">Zagraj ponownie!</Button>
                        </Alert>
                        break;
                    case "left bottom":
                        listElement = <Alert variant="info text-center" key={counter}>{wojewodztwo}: <BsArrowDownLeftSquareFill size={50} /></Alert>
                        break;
                    case "right bottom":
                        listElement = <Alert variant="info text-center" key={counter}>{wojewodztwo}: <BsArrowDownRightSquareFill size={50} /></Alert>
                        break;
                    case "+ bottom":
                        listElement = <Alert variant="info text-center" key={counter}>{wojewodztwo}: <BsArrowDownSquareFill size={50} /></Alert>
                        break;
                    case "left top":
                        listElement = <Alert variant="info text-center" key={counter}>{wojewodztwo}: <BsArrowUpLeftSquareFill size={50} /></Alert>
                        break;
                    case "right top":
                        listElement = <Alert variant="info text-center" key={counter}>{wojewodztwo}: <BsArrowUpRightSquareFill size={50} /></Alert>
                        break;
                    case "+ top":
                        listElement = <Alert variant="info text-center" key={counter}>{wojewodztwo}: <BsArrowUpSquareFill size={50} /></Alert>
                        break;
                    case "left +":
                        listElement = <Alert variant="info text-center" key={counter}>{wojewodztwo}: <BsArrowLeftSquareFill size={50} /></Alert>
                        break;
                    case "right +":
                        listElement = <Alert variant="info text-center" key={counter}>{wojewodztwo}: <BsArrowRightSquareFill size={50} /></Alert>
                        break;
                    case "doesn't exist":
                        listElement = <Alert variant="danger" key={counter}>{wojewodztwo} : chyba nie ma takiego województwa, wybierz jedno z listy! </Alert>
                        break;
                    default:
                        listElement = <Alert variant="warning" key={counter}>Wystąpił błąd po stronie serwera :( </Alert>

                }
                //add hints to list
                attemptsList.unshift(listElement);
                setAttempts([...attemptsList])

            })
            .catch(() => {
                setAttempts([<Alert variant="warning" key={counter}>Wystąpił błąd po stronie klienta :( </Alert>])
            })
    }
    return (
        <div className="w-75 m-auto">
            <Alert variant={(city === "") ? "danger" : "warning"} className="d-flex justify-content-between p-0 w-100 m-0">
                <h3 className="m-1">{city}</h3>
                <Button onClick={() => { window.location.reload() }} variant="danger">Odśwież</Button>
            </Alert>
            <Container className="my-2">
                {RenderedItem}
            </Container>
            {attempts}


        </div>
    )
}
export default Game
