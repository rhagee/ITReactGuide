import React from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";


const BasicComponent = () => {
    
    let explain = <Ex title="Component"/>
    let code = <Code/>
    let page = <BasicComponentContent/>

    return (
    <>
        <StandardContent explain={explain} code={code} page={page}/>
    </>
    );
};


const BasicComponentContent = () =>
{
    return(
            <h1>Basic Component Text</h1>
    );
}


export default BasicComponent; 