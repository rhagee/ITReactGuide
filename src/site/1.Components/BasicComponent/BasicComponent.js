import React from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";
import {withRouter} from "react-router-dom";


const BasicComponent = () => {
    
    let explain = <Ex title="COMPONENT"/>
    let code = <Code/>
    let page = <BasicComponentContent/>

    return (
    <>
        <StandardContent explain={explain} code={code} page={page} multiline={false}/>
    </>
    );
};


const BasicComponentContent = () =>
{
    return(
            <h1>Basic Component Text</h1>
    );
}


export default withRouter(BasicComponent); 