import React from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";
import './style.css';
import {withRouter} from "react-router-dom";

const JSXVariables = () => {
    let explain = <Ex title="VARIABILI"/>
    let code = <Code/>
    let page = <JSXVariablesContent/>

    return(
        <>
            <StandardContent explain={explain} code={code} page={page} multiline={false}/>
        </>
    );
};

const JSXVariablesContent = () =>
{
    const titolo = 
    <>
        <h1>Profili</h1>
        <h3>Persona</h3>
    </>;

    let nome = "Luca";
    let cognome = "Verdi";
    let eta = 20;
    let id = "x23A";

    return(
        <>
            {titolo}
            <div style={{padding:"20px",border:"1px solid black", display:"inline-block"}}>
                <h6>{nome} {cognome}</h6>
                <p>Età : {eta}</p>
                <button className="view-button" onClick={() => alert("Vuoi andare alla pagina "+id) }>Go To Profile</button>
            </div>
        </>
    );
}

export default withRouter(JSXVariables);