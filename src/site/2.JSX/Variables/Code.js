import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Code = () => {
    return (
        <p>
            {/*<center><h1>Codice: </h1></center>
            <br/>*/}
             <CodeSegment language="javascript">
                {`
                import React from 'react';
                import "./style.css";


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
                
                export default JSXVariablesContent;
                `} 
            </CodeSegment>
        </p>
    );
};

export default Code;