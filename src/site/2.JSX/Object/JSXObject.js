import React from 'react';

import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";
import {withRouter} from "react-router-dom";

const JSXObject = () => {
    let explain = <Ex title="OGGETTI"/>
    let code = <Code/>
    let page = <JSXObjectContent/>
    
    return(
        <>
            <StandardContent explain={explain} code={code} page={page} multiline={false}/>
        </>
    );
};

const JSXObjectContent = () =>
{
    let persona =
    {
        nome:"Francesco",
        cognome:"Rossi",
        eta : 35
    }

    let {nome,cognome,eta} = persona;

    return (
      <>
        <h1>Profilo</h1>
        <div style={{display:"inline-block",marginTop:"10px",border:"1px solid black",padding:"10px",borderRadius:"10px"}}>
            <h3>{nome}</h3>
            <h3>{cognome}</h3>
            <h6>{eta} anni</h6>
        </div>
      </>  
    );
}

export default withRouter(JSXObject);