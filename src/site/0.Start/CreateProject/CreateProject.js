import React from 'react';
import Ex from './Ex';
import StandardContent from "../../Utils/StandardContent";
import {withRouter} from "react-router-dom";


const CreateProject = () => {
    
    let explain = <Ex title="CreateProject"/>

    return (
    <>
        <StandardContent explain={explain} code={null} page={null} multiline={false}/>
    </>
    );
};


export default withRouter(CreateProject); 