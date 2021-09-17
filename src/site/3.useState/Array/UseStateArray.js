import React,{useState} from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";
import {withRouter} from "react-router-dom";
import {Card} from 'react-bootstrap';
import "./style.css";

const UseStateArray = () => {
    let explain = <Ex title="useState ARRAY"/>
    let code = <Code/>
    let page = <UseStateArrayContent/>

    return(
        <>
            <StandardContent explain={explain} code={code} page={page} multiline={false}/>
        </>
    );
};



let data =
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

const UseStateArrayContent = () =>
{
    
    const [profiles,setProfiles] = useState(data);
    const [deleted,setDeleted] = useState([]);

    const deleteProfile = (key) =>
    {
        
        let toDelete = profiles.find(profile => profile.id == key);
        const filteredProf = profiles.filter(profile =>  profile.id != key); 
        const filteredDeleted = [...deleted, toDelete];

        setDeleted(filteredDeleted);
        setProfiles(filteredProf);
    }

    const Retake = () =>
    {
            let filteredDeleted = deleted; 
            let toretake = filteredDeleted.pop();
            
            const filteredProf = [...profiles, toretake];

            setDeleted(filteredDeleted);
            setProfiles(filteredProf);
    }



    return(
        <>
        <h1>Profiles</h1>
            {
                profiles.map((profile)=>
                {
                    let {id,nome,cognome,eta,descrizione}=profile;
                    return(
                        <Card key={id} style={{ width: '100%',marginBottom:"10px",marginTop:"10px"}}>
                        <Card.Body>
                          <Card.Title>{nome} {cognome}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">{eta} anni</Card.Subtitle>
                          <Card.Text>
                            {descrizione}
                          </Card.Text>
                            <button id={id} className="delete-btn" onClick={(event)=>{deleteProfile(event.target.id)}} >Elimina</button>
                        </Card.Body>
                      </Card>
                    );

                    
                })
            }
            <button className="recupera-btn" onClick={Retake} disabled={deleted.length==0 ?  true : false }>Recupera</button>
        </>
    );
}




export default withRouter(UseStateArray);