import React from 'react';
import StandardContent from "../../Utils/StandardContent";

import Ex from './Ex';
import Code from './Code';

const MultiComponent = () => 
{
    let explain = <Ex title="MultiComponent"/>;
    let code = <Code/>;
    let page = <MultiComponentContent/>;
    return (
       <>
       <StandardContent explain={explain} code={code} page={page} multiline={true} />
       </>
    );
};

const MultiComponentContent = () => 
{
    return(
            <div>
                <h1>Lista film</h1>
                <div className="row" style={{marginTop:"5%"}}>
                    <div className="col">
                        <Film/>
                    </div>
                    <div className="col">
                        <Film/>
                    </div>
                    <div className="width-100"></div>
                    <div className="col">
                        <Film/>
                    </div>
                    <div className="col">
                        <Film/>
                    </div>
                </div>
            </div>
    );
}

const Film = () => 
{
    return(
            <div>
                <h2>
                    Titolo film
                </h2>
                <p>
                    Spiegazione film
                </p>
            </div>
    );
}

export default MultiComponent;