import React from 'react';
import Ex from './Ex';
import StandardContent from "../../Utils/StandardContent";
import {withRouter} from "react-router-dom";


const Install = () => {
    
    let explain = <Ex title="Install"/>

    return (
    <>
        <StandardContent explain={explain} code={null} page={null} multiline={false}/>
    </>
    );
};


export default withRouter(Install); 