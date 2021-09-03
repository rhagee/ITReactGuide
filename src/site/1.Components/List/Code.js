import React from 'react';

import CodeSegment from './../../Utils/CodeSegment';

const Code = () => {
    return (
        <p>
             <CodeSegment language="javascript">
            {`
                import React from 'react';
                import {Card} from 'react-bootstrap'; //Import Card Component da bootstrap
                
                //La nostra component
                const ListContent = () =>
                {
                    //Creazione della lista di oggetti con ID univoco
                    let list=
                                [
                                   {
                                        id:0,
                                        nome: "Alessandro",
                                        cognome: "Verdi",
                                        eta: 25,
                                        descrizione: "Lavoro part-time e studio"
                                   },
                                   {
                                       id:1,
                                       nome: "Francesco",
                                       cognome:"Rossi",
                                       eta: 22,
                                       descrizione: "Lavoro full time"
                                   },
                                   {
                                       id:2,
                                       nome:"Giovanni",
                                       cognome:"Serino",
                                       eta: 27,
                                       descrizione: "Studio full time"
                                   },
                                   {
                                       id:3,
                                       nome:"Alessio",
                                       cognome:"Mareni",
                                       eta: 19,
                                       descrizione: "Disoccupato in cerca di lavoro"
                                   }
                                ];
                    //Render
                    return(
                        <>
                        <h1>Profiles</h1>
                            {
                                list.map((value)=>
                                {
                                    let {id,nome,cognome,eta,descrizione}=value;
                                    return(
                                        <Card key={id} style={{ width: '18rem',marginBottom:"10px",marginTop:"10px"}}>
                                        <Card.Body>
                                          <Card.Title>{nome} {cognome}</Card.Title>
                                          <Card.Subtitle className="mb-2 text-muted">{eta} anni</Card.Subtitle>
                                          <Card.Text>
                                            {descrizione}
                                          </Card.Text>
                                          <Card.Link style={{padding:"10px",backgroundColor:"#132733",borderRadius:"5px",textDecoration:"none",color:"white"}} href={\`https://linkpaginaprofilo/\${nome}.\${cognome}\`} target="_blank">Visita Profilo</Card.Link>
                                          <Card.Link style={{padding:"10px",backgroundColor:"#111212",borderRadius:"5px",textDecoration:"none",color:"white"}} href={\`https://linkpaginaprofilo/\${nome}.\${cognome}/message\`} target="_blank">Contatta</Card.Link>
                                        </Card.Body>
                                      </Card>
                                    );

                                    /*Si ricorda che ovviamente i "link" in react sono gestiti diversamente,
                                    quindi attendere di arrivare alla sezione "Router" per vedere come dovrebbero
                                    essere gestiti.*/
                                })
                            }
                        </>
                    ); 
                }

            `}
            </CodeSegment>
        </p>
    );
};

export default Code;