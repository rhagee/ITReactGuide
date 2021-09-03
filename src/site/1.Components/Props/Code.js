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

                //Component Primaria
                const ComponentPrimaria = () =>
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

                const Film = (props) => //Dichiariamo di ricevere come parametro delle "props" (Parola chiave obbligatoria)
                {
                    let {titolo,children} = props; //props destructuring
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

            `}
            </CodeSegment>
        </p>
    );
};

export default Code;