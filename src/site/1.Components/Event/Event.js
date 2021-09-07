import React from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from './../../Utils/StandardContent';
import {Card} from 'react-bootstrap';
import "./style.css";
import {withRouter} from "react-router-dom";

const Event = () => {
    let explain = <Ex title="EVENT"/>
    let code = <Code/>
    let page = <EventContent/>

    return (
    <>
        <StandardContent explain={explain} code={code} page={page}/>
    </>
    );
};


const onClickFunction = (value) =>
{
    alert(value);
}

const EventContent = () =>
{
     return(
            <>
                <Card style={{ width: '100%',marginBottom:"10px",marginTop:"10px"}}>
                    <Card.Body>
                        <Card.Title>Francesco Verdi</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">15 anni</Card.Subtitle>
                        <Card.Text>
                            Sono un ragazzo di 15 anni che studia alle superiori e fa sport.
                            Se premi sul bottone scoprirai che sport faccio!
                        </Card.Text>
                        <button className="view-button" onClick={() => onClickFunction("Calcio")}>Vedi Sport</button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '100%',marginBottom:"10px",marginTop:"10px"}}>
                    <Card.Body>
                        <Card.Title>Giovanni Rossi</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">20 anni</Card.Subtitle>
                        <Card.Text>
                            Sono un ragazzo di 20 anni che cucina in un ristorante.
                            Premi il bottone per scoprire in che ristorante lavoro!
                        </Card.Text>
                        <button className="view-button" onClick={() => onClickFunction("La Stella Molare")}>Vedi Ristorante</button>
                    </Card.Body>
                </Card>
            </>
        );
}


export default withRouter(Event);