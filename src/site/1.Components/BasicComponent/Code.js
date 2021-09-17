import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Code = () => {
    return (
        <>
            {/*<center><h1>Codice: </h1></center>
            <br/>*/}
             <CodeSegment language="javascript">
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
            </CodeSegment>
        </>
    );
};

export default Code;