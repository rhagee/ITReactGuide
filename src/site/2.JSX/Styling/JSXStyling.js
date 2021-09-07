import React from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";
import './style.css';
import {withRouter} from "react-router-dom";

const JSXStyling = () => {
    let explain = <Ex title="STYLING"/>
    let code = <Code/>
    let page = <JSXStylingContent/>

    return(
        <>
            <StandardContent explain={explain} code={code} page={page} multiline={true}/>
        </>
    );
};

const JSXStylingContent = () =>
{
    const rightSubDiv = 
    {
        margin:"0px",
        backgroundColor:"pink",
        height:"100px",
        borderRadius:"10px",
        paddingRight:"5px",
        paddingLeft:"5px"
    };

    return(
        <>
            <div className="container">
                <div className="left-part">
                    <div style={{margin:"0px",backgroundColor:"lightblue",height:"100px",borderRadius:"10px", paddingRight:"5px",paddingLeft:"5px"}}>
                        <h1>Sinistra</h1>
                    </div>
                </div>
                <div className="right-part">
                    <div style={rightSubDiv}>
                        <h1>Destra</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(JSXStyling);