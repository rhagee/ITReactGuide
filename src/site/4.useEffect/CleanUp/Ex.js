import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';
import './../../style.css';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <h3>Clean Up Function</h3><br/>
        <p className="ex-font">
        Abbiamo visto come sfruttare la funzione <code>useEffect</code>, ma abbiamo anche notato come in alcuni casi possano sorgere dei problemi (esempio della lezione passata).<br/><br/>

        A questo punto andiamo ad introdurre un concetto nuovo per quanto riguarda la funzione <code>useEffect</code>, ovvero la <strong>Clean Up Function</strong>.<br/><br/>

        Questa non è nient'altro che il <code>return</code> della nostra funzione passata come parametro a <code>useEffect</code>.<br/>
        Il <code>return</code> di <code>useEffect</code> deve essere quindi anch'esso una <strong>funzione</strong>.<br/><br/>

        Ad esempio : <br/>
        <CodeSegment language="javascript">
            {`    
                import React,{useEffect} from 'react';
                
                const basicComponent = () =>
                {
                    
                    useEffect(() => 
                    {
                        console.log("useEffect");

                        return(
                            console.log("CleanUp");
                        )
                    });
                    
                    console.log("Rendering");
                    return(
                        <>
                            <h1>Basic Component</h1>
                        </>
                        );
                }
            `}
        </CodeSegment><br/>

        In questo caso, ogni volta che verrà triggerato <code>useEffect</code> verrà eseguita la funzione di <code>CleanUp</code>, ovvero la funzione del <code>return</code>.<br/><br/>

        Quindi in questo caso le stampe in console dopo il caricamento della pagina saranno : <br/><br/>

        - <i>Rendering</i><br/>
        - <i>useEffect</i><br/><br/>

        Come mai non c'è la stampa di <i>CleanUp</i>?<br/>
        Beh semplicemente la funzione di <code>CleanUp</code> è stata ritornata dall'attuale funzione <code>useEffect</code> che ha stampato, e verrà eseguita subito prima del prossimo <code>useEffect</code><br/><br/>

        Quindi nel caso andassimo a ri-renderizzare per qualche motivo la pagina vedremmo : <br/><br/>

        - <i>Rendering</i><br/>
        - <i>CleanUp</i><br/>
        - <i>useEffect</i><br/><br/>
        
        In questo caso, la stampa <i>CleanUp</i> è quella <strong>ritornata</strong> dallo scorso <code>useEffect</code>.<br/>
        Ovviamente per testare tutto ciò potete provare ad aggiungere alla stampa un contatore che sfrutti <code>useEffect</code><br/>
        e vi accorgerete che il contatore varrà sempre <strong>x</strong> per la stampa di <code>useEffect</code><br/>
        mentre varrà sempre <strong>x-1</strong> per la stampa di <code>CleanUp</code>.<br/><br/>

        Di seguito andiamo a vedere in che maniera utile possiamo sfruttare la funzione di <code>CleanUp</code> per risolvere il problema di performance che avevamo nell'esempio della scorsa lezione.
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

