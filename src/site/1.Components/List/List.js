import React from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from './../../Utils/StandardContent';
import {Card} from 'react-bootstrap';

const List = () => {
    let explain = <Ex title="LIST"/>
    let code = <Code/>
    let page = <ListContent/>

    return (
    <>
        <StandardContent explain={explain} code={code} page={page}/>
    </>
    );
};

const ListContent = () =>
{
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
    return(
        <>
        <h1>Profiles</h1>
            {
                list.map((value)=>
                {
                    let {id,nome,cognome,eta,descrizione}=value;
                    return(
                        <Card key={id} style={{ width: '100%',marginBottom:"10px",marginTop:"10px"}}>
                        <Card.Body>
                          <Card.Title>{nome} {cognome}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{eta} anni</Card.Subtitle>
                          <Card.Text>
                            {descrizione}
                          </Card.Text>
                          <div className="d-none d-md-block">
                            <Card.Link style={{padding:"10px",backgroundColor:"#132733",borderRadius:"5px",textDecoration:"none",color:"white"}} href={`https://linkpaginaprofilo/id=${nome}.${cognome}`} target="_blank">Visita Profilo</Card.Link>
                            <Card.Link style={{padding:"10px",backgroundColor:"#111212",borderRadius:"5px",textDecoration:"none",color:"white"}} href={`https://linkpaginaprofile/id=${nome}.${cognome}/message`} target="_blank">Contatta</Card.Link>
                          </div>
                          <div className="d-block d-md-none">
                            <div className="row" style={{width:"90%",marginBottom:"20px"}}> 
                                <Card.Link style={{padding:"10px",backgroundColor:"#132733",borderRadius:"5px",textDecoration:"none",color:"white"}} href={`https://linkpaginaprofilo/id=${nome}.${cognome}`} target="_blank">Visita Profilo</Card.Link>
                            </div>
                            <div className="row" style={{width:"90%"}}> 
                                <Card.Link style={{padding:"10px",backgroundColor:"#111212",borderRadius:"5px",textDecoration:"none",color:"white"}} href={`https://linkpaginaprofile/id=${nome}.${cognome}/message`} target="_blank">Contatta</Card.Link>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    );
                })
            }
        </>
    ); 
}

export default List;