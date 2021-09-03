import React from 'react';

import CodeSegment from './../../Utils/CodeSegment';

const Code = () => {
    return (
        <p>
            <h3>Javascript</h3>
             <CodeSegment language="javascript">
            {`
                import React from 'react';
                import {Card} from 'react-bootstrap';
                import "./style.css";
                
                //Funzione che gestische il Click
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
            `}
            </CodeSegment>
            <h3>CSS</h3>
            <h6>style.css</h6>
             <CodeSegment language="css">
            {`
              .view-button {
                padding: 10px 20px 10px 20px;
                border-radius: 10px;
                border: none;
                box-shadow: 5px 7px 18px #1d1d2b;
                background-color: #b9b9f0;
              }
              
              .view-button:hover {
                background-color: #0f0f29;
                box-shadow: 5px 7px 18px #b9b9f0;
                color: white;
              }
            `}
            </CodeSegment>
        </p>
    );
};

export default Code;