import React,{useState} from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";
import {withRouter} from "react-router-dom";
import "./style.css";

const UseStateBasics = () => {
    let explain = <Ex title="useState BASICS"/>
    let code = <Code/>
    let page = <UseStateBasicsContent/>

    return(
        <>
            <StandardContent explain={explain} code={code} page={page} multiline={false}/>
        </>
    );
};






const UseStateBasicsContent = () =>
{
    const addFunction = () =>
    {
        setCont(cont+1);
    }

    const [cont,setCont] = useState(0);
    return(
        <>
            <h1>{cont}</h1>
            <button className="reset-btn"  onClick={() => {setCont(0);}}>Reset</button>
            <button className="counter-btn"  onClick={addFunction}>ADD</button>
        </>
    );
}




export default withRouter(UseStateBasics);