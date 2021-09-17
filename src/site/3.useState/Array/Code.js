import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Code = () => {
    return (
        <p>
            {/*<center><h1>Codice: </h1></center>
            <br/>*/}
             <h3>Javascript</h3>
             <CodeSegment language="javascript">
                {`
                import React,{useState} from 'react';
                import "./style.css";

                const externalprofile = 
                {
                    nome:"Francesco",
                    cognome:"Verdi",
                    eta: 21,
                    descrizione: "Studente"
                };
                
                const UseStateArrayContent = () =>
                {
                    const [profiles,setProfiles] = useState(data);
                    const [deleted,setDeleted] = useState([]);
                
                    const deleteProfile = (key) =>
                    { 
                        let toDelete = profiles.find(profile => profile.id == key); //Prendo l'oggetto da cancellare
                        const filteredProf = profiles.filter(profile =>  profile.id != key); //Filtro cancellando l'oggetto da cancellare, ritornando all'array temporaneo
                        const filteredDeleted = [...deleted, toDelete]; //L'array temporaneo per deleted è deleted PIU l'oggetto eliminato dai profili
                
                        setDeleted(filteredDeleted); //set di Deleted
                        setProfiles(filteredProf); //set di Profiles
                    }
                
                    const Retake = () =>
                    {
                            let filteredDeleted = deleted; //Copio deleted in un array temporaneo
                            let toretake = filteredDeleted.pop(); //Elimino l'ultimo elemento, memorizzandolo (poichè è da rimettere in profiles)
                            
                            const filteredProf = [...profiles, toretake]; //L'array di profili temporaneo è uguale ai profili attuali PIU l'elemento da ripristinare
        
                            setDeleted(filteredDeleted); //set di Deleted
                            setProfiles(filteredProf); //set di Profiles
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
                
                export default UseStateObjectContent;
                `} 
            </CodeSegment>

            <h3>CSS</h3>
            <h6>style.css</h6>

            <CodeSegment language="css">
                {`
                 .edit-btn
                 {
                     border-radius:5px;
                     background-color:#518fe0;
                     box-shadow:1px 1px 10px black;
                     width:100px;
                     height:50px;
                     margin:20px 20px;
                     border:0px;
                     color:white;
                 }
                 
                 .edit-btn:hover
                 {
                     background-color:#2b62ab;
                 }
                 
                 .recupera-btn
                 {
                     padding:10px;
                     background-color:#2967ec;
                     border-radius:5px;
                     textDecoration:none;
                     color:white;
                 }
                 
                 .recupera-btn:disabled
                 {
                     background-color:#465570;
                 }
                 
                 .recupera-btn:hover:enabled
                 {
                     background-color:#043ca5; 
                 }
                 
                 .delete-btn
                 {
                     padding:10px;
                     background-color:#c23c3c;
                     border-radius:5px;
                     textDecoration:none;
                     color:white;
                 }
                 
                 .delete-btn:hover
                 {
                     background-color:#4b1c1c;  
                 }
                 
                `} 
            </CodeSegment>
        
        </p>
    );
};

export default Code;