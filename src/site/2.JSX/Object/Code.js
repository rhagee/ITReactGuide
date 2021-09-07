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
                     
                     const JSXObjectContent = () =>
                     {
                         let persona =
                         {
                             nome:"Francesco",
                             cognome:"Rossi",
                             eta : 35
                         }
                     
                         let {nome,cognome,eta} = persona;
                     
                         return (
                           <>
                             <h1>Profilo</h1>
                             <div style={{display:"inline-block",marginTop:"10px",border:"1px solid black",padding:"10px",borderRadius:"10px"}}>
                                 <h3>{nome}</h3>
                                 <h3>{cognome}</h3>
                                 <h6>{eta} anni</h6>
                             </div>
                           </>  
                         );
                     }
                     
                     export default JSXObjectContent;
                `} 
            </CodeSegment>
        </p>
    );
};

export default Code;