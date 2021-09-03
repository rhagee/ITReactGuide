import React from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";

const Props = () => 
{
    let explain = <Ex title="PROPS AND CHILDREN"/>
    let code = <Code/>
    let page = <PropsContent/>

    return (
    <>
        <StandardContent explain={explain} code={code} page={page}/>
    </>
    );
};

const PropsContent = () =>
{
    return(
        <>
            <h1>Lista Film</h1>
            <div className="row" style={{marginTop:"5%"}}>
                <Film titolo="Film 1">
                    <p>Il Film1 è un film d'avventura</p>
                </Film>
                <Film titolo="Film 2">
                    <p>Il Film2 è un film horror</p>
                </Film>
                <Film titolo="Film 3">
                    <p>Il Film3 è un film giallo</p>
                </Film>
                <Film titolo="Film 4">
                    <p>Il Film4 è un film d'azione</p>
                </Film>
            </div>
        </>
    );
}

const Film = (props) => 
{
    let {titolo,children} = props;
    return(
        <div className="col-6">
            <h2>
                {titolo} 
            </h2>
            <p>
                {children}
            </p>
        </div>
    );
}

export default Props;