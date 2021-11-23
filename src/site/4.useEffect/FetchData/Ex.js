import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';
import './../../style.css';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <h3>Fetch Data da Json</h3><br/>
        <p className="ex-font">
        Abbiamo visto che possiamo utilizzare <code>useEffect</code> per caricare i dati dopo il rendering della pagina.<br/><br/>

        A questo punto andiamo a vedere come richiedere dati dall'esterno e caricarli tramite <code>useEffect</code>.<br/>

        <CodeSegment language="javascript">
            {`    
                import React,{useEffect} from 'react';
                
                const getUsers = async() =>
                {
                    const response = await fetch(url);
                    const data = await response.json();
                }

            `}
        </CodeSegment><br/>

        In questo modo possiamo andare a richiedere in maniera ASINCRONA i dati dal link presente in <code>url</code> e memorizzarli sottoforma di "oggetto Json" in <code>data</code><br/><br/>

        Di seguito un esempio piu complesso, utilizzare la rotella di "ricarica pagina" per vedere effettivamente il momento del "caricamento",<br/>
        che sarà più veloce o più lento in base alla vostra attuale connessione.<br/>
        </p>
        </>
    );
};


const RedWord = (props) =>
{
    let {children} = props;
    return(
        <span style={{color:"red"}}>{children}</span>
    );
}



export default Ex;

