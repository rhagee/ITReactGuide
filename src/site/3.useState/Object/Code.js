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


                const externalprofile = {
                    nome:"Francesco",
                    cognome:"Verdi",
                    eta: 21,
                    descrizione: "Studente"
                };
                
                const UseStateObjectContent = () =>
                {
                    const [profile,setProfile] = useState(externalprofile);
                
                    let {nome,cognome,eta,descrizione} = profile;
                    return(
                        <>
                             <h1>Profilo</h1>
                             <div style={{display:"inline-block",marginTop:"10px",border:"1px solid black",padding:"10px",borderRadius:"10px"}}>
                                <label style={{width:"100px",marginBottom:"15px"}}>Nome</label><input defaultValue={nome} type="text" onChange={(event) => {profile.nome = event.target.value;}}></input><br/>
                                <label style={{width:"100px",marginBottom:"15px"}}>Cognome</label><input defaultValue={cognome} type="text" onChange={(event) => {profile.cognome = event.target.value;}}></input><br/>
                                <label style={{width:"100px",marginBottom:"15px"}}>Eta</label><input defaultValue={eta} type="text" onChange={(event) => {profile.eta = event.target.value;}}></input><br/>
                                <label style={{width:"100px",marginBottom:"15px"}}>Descrizione</label><input defaultValue={descrizione} type="text" onChange={(event) => {profile.descrizione = event.target.value;}}></input><br/>
                                <button className="edit-btn"  onClick={() => {setProfile({...profile});}}>Edit</button>
                            </div>
                            
                            <div style={{display:"inline-block",marginTop:"10px",border:"1px solid black",padding:"10px",borderRadius:"10px"}}>
                                <h3>{nome}</h3>
                                <h3>{cognome}</h3>
                                <h6>{eta} anni</h6>
                                <p>Descrizione : {descrizione}</p>
                                
                            </div>
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
                 .counter-btn
                 {
                     border-radius:5px;
                     background-color:#518fe0;
                     box-shadow:5px 5px 30px black;
                     width:100px;
                     height:50px;
                     margin:20px 20px;
                     border:0px;
                     color:white;
                 }
                 
                 .counter-btn:hover
                 {
                     background-color:#2b62ab;
                 }
                 
                 .reset-btn
                 {
                     border-radius:5px;
                     background-color:#b4b5b8;
                     box-shadow:5px 5px 30px black;
                     width:100px;
                     height:50px;
                     margin:20px 20px;
                     border:0px;
                     color:black;
                 }
                 
                 .reset-btn:hover
                 {
                     background-color:#7c7d80;
                     color : white;
                 }
                `} 
            </CodeSegment>
        
        </p>
    );
};

export default Code;