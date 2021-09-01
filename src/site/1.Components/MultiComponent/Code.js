import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Code = () => {
    return (
        <p>
            {/*<center><h1>Codice: </h1></center>
            <br/>*/}
            <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
                {`
                import React from 'react';
                
                //Componente Primaria (Quella che viene chiamata)
                const MultiComponentContent = () => 
                {
                    return(
                            <div>
                                <h1>Lista film</h1>
                                <div className="row" style={{marginTop:"5%"}}>
                                    <div className="col">
                                        <Film/> //Chiamata alla componente secondaria
                                    </div>
                                    <div className="col">
                                        <Film/> //Chiamata alla componente secondaria
                                    </div>
                                    <div className="width-100"></div>
                                    <div className="col">
                                        <Film/> //Chiamata alla componente secondaria
                                    </div>
                                    <div className="col">
                                        <Film/> //Chiamata alla componente secondaria
                                    </div>
                                </div>
                            </div>
                    );
                }
                
                //Componente Secondaria (Chiamata dalla primaria)
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

                export default MultiComponentContent; //Verrà importata dall'esterno solo la MultiComponentContent e non la component Film
                `} 
            </SyntaxHighlighter>
        </p>
    );
};

export default Code;