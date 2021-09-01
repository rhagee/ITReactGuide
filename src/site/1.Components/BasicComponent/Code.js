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
                
                //Funzione con return Frammento
                const BasicComponentContent = () =>
                {

                    /* 
                    Qui è possibile inserire codice
                    prima del return.
                    Ad esempio : creare e gestire variabili o funzioni.
                    */

                    return(
                        <h1>Basic Component Text</h1>
                    ); //Frammento returnato
                }

                export default BasicComponentContent; 
                `} 
            </SyntaxHighlighter>
        </p>
    );
};

export default Code;