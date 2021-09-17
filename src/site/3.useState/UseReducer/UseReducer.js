

import React,{useState,useReducer} from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";
import {withRouter} from "react-router-dom";
import "./style.css";

const UseReducer = () => {
    let explain = <Ex title="useReducer"/>
    let code = <Code/>
    let page = <UseReducerContent/>

    return(
        <>
            <StandardContent explain={explain} code={code} page={page} multiline={true}/>
        </>
    );
};




const externalprofile = {
    id:0,
    nome:"Francesco",
    cognome:"Verdi",
    eta: 21,
    descrizione: "Studente",
    color : "#d16060"
};

const stateDefaultValue = 
{
    profiles : [externalprofile],
    colorPos : 0,
    counter : 1,
    isError : false,
}

const profile = {};

const colors =  ["#d16060","#62d160","#60b7d1","#c6d160"];

const reducer = (state,action) =>
{
    let {type,payload} = action;
    let {profiles,colorPos,isError,counter} = state;
    switch(type)
    {
        case 'AddPerson' : 
        {
            console.log(profile);
            if(!profile.nome || !profile.cognome || !profile.eta || !profile.descrizione)
            {
                isError=true;
            }
            else
            {
                isError=false;
                let id=counter;
                counter++;
                profiles = [...profiles,{...profile,id:id,color:colors.at(colorPos)}];
            }
        }
        break;

        case 'DeletePerson':
        {
            profiles = profiles.filter((obj) =>  obj.id!=payload);
        }
        break;
        case 'NextColor' :
        {
            colorPos<3 ? colorPos++ : colorPos=0;
        }
        break;

        default : 
        break;
    }
   
    return {...state,
        profiles:profiles,
        isError:isError,
        counter:counter,
        colorPos:colorPos
        };
}

const UseReducerContent = () =>
{
    const [state,dispatch] = useReducer(reducer,stateDefaultValue);

    return(
        <>
           { state.isError ? <p style={{color:"white",backgroundColor:"#b31919",padding:"10px",borderRadius:"5px"}}><strong>ERRORE</strong> : Non hai riempito alcuni campi!</p> : null }
             <h1>Aggiungi Profilo</h1>
             <div className="profile-container" style={{backgroundColor:colors.at(state.colorPos)}}>
                <label>Nome</label><input  type="text" onChange={(event) => {profile.nome = event.target.value; console.log(profile.nome);}}></input><br/>
                <label>Cognome</label><input  type="text" onChange={(event) => {profile.cognome = event.target.value;}}></input><br/>
                <label>Eta</label><input type="text" onChange={(event) => {profile.eta = event.target.value;}}></input><br/>
                <label>Descrizione</label><input type="text" onChange={(event) => {profile.descrizione = event.target.value;}}></input><br/>
                <div className="row">
                    <div className="col">
                        <button className="edit-btn"  onClick={() => {dispatch({type:'AddPerson'});}}>Aggiungi</button>
                    </div>
                    <div className="col">
                        <button className="edit-btn"  onClick={() => {dispatch({type:'NextColor'});}}>Cambia Sfondo</button>
                    </div>
                </div>
                
            </div>
            <h1>Profili</h1>
            <div className="row">
            {
                state.profiles.map((obj) => 
                {
                    let {id,nome,cognome,eta,descrizione,color} = obj;
                    return(
                    <div key={id}>
                    <div className="profile-container" style={{backgroundColor:color}}>
                        <h3>{nome}</h3>
                        <h3>{cognome}</h3>
                        <h6>{eta} anni</h6>
                        <p>Descrizione : {descrizione}</p>
                        <button className="delete-btn" id={id} onClick={(event) => {dispatch({type:"DeletePerson",payload:event.target.id})}}>Delete</button>
                    </div>
                    <div className="width-100" />
                    </div>
                    );
                } )
            }
            </div>
        </>
    );
}


export default withRouter(UseReducer);
