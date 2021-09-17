import React,{useState} from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";
import {withRouter} from "react-router-dom";
import "./style.css";

const UseStateObject = () => {
    let explain = <Ex title="useState OGGETTI"/>
    let code = <Code/>
    let page = <UseStateObjectContent/>

    return(
        <>
            <StandardContent explain={explain} code={code} page={page} multiline={false}/>
        </>
    );
};




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
             <h1>Profilo EDIT</h1>
             <div style={{display:"inline-block",marginTop:"10px",border:"1px solid black",padding:"10px",borderRadius:"10px",marginBottom:"20px"}}>
                <label style={{width:"100px",marginBottom:"15px"}}>Nome</label><input defaultValue={nome} type="text" onChange={(event) => {profile.nome = event.target.value;}}></input><br/>
                <label style={{width:"100px",marginBottom:"15px"}}>Cognome</label><input defaultValue={cognome} type="text" onChange={(event) => {profile.cognome = event.target.value;}}></input><br/>
                <label style={{width:"100px",marginBottom:"15px"}}>Eta</label><input defaultValue={eta} type="text" onChange={(event) => {profile.eta = event.target.value;}}></input><br/>
                <label style={{width:"100px",marginBottom:"15px"}}>Descrizione</label><input defaultValue={descrizione} type="text" onChange={(event) => {profile.descrizione = event.target.value;}}></input><br/>
                <button className="edit-btn"  onClick={() => {setProfile({...profile});}}>Edit</button>
            </div>
            <h1>Profilo</h1>
            <div style={{display:"inline-block",marginTop:"10px",border:"1px solid black",padding:"10px",borderRadius:"10px"}}>
                <h3>{nome}</h3>
                <h3>{cognome}</h3>
                <h6>{eta} anni</h6>
                <p>Descrizione : {descrizione}</p>
                
            </div>
        </>
    );
}




export default withRouter(UseStateObject);