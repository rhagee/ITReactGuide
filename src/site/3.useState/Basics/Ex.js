import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';
import './../../style.css';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <p className="ex-font">
        <h3>Introduzione</h3>
        La funzione <code>useState</code> è un tipo di funzione utilizzata per l'aggiornamento grafico delle variabili visualizzate in React.<br/><br/>

        Fa parte della libreria standard <code>'react'</code> ed è uno degli <code>export</code> non default.<br/>
        Cio significa che per importare tale funzione bisogna scrivere :<br/>
        <CodeSegment language="javascript">
            {`     
                import React,{useState} from 'react';
                
            `}
        </CodeSegment><br/>

        Fatto questo potremo sfruttare <code>useState</code> nel nostro codice.<br/><br/>

        La funzione <code>useState</code> fa parte dei React Hooks, insieme ad altre funzioni che vedremo.<br/>
        La funzione si utilizza per fare in modo di aggiornare sulla pagina le variabili renderizzate che cambiano valore.<br/><br/>

        Esempio: <br/>
        <CodeSegment language="javascript">
            {`     
                const [x,setX] = useState(0);
            `}
        </CodeSegment><br/>
        
        <h3>Funzionamento</h3>
        Con il codice sopra in pratica stiamo creando una variabile <code>x</code> che potremo usare nel codice come una normalissima variabile,<br/>
        inoltre stiamo specificando che la funzione <code>setX</code> sarà la funzione che modifica <code>x</code>, inoltre scrivendo <code>useState(0)</code><br/>
        stiamo dicendo che il valore iniziale di <code>x</code> è 0<br/>
        
        <CodeSegment language="javascript">
            {`     
                const basicComponent = () =>
                {
                    const [x,setX] = useState(0);

                    return(
                        <>
                        <h1>{x}</h1>
                        <button onClick={() => setX(x+1);}>Incrementa</button>
                        </>
                        );
                }
            `}
        </CodeSegment><br/>

        Scrivendo nel codice <code>setX(x+1)</code> la funzione effettuerà <code>x=x+1</code> e si occuperà di aggiornare il valore di <code>x</code> mostrato sulla pagina,<br/>
        o per meglio dire effettuerà il "re-rendering" di <code>x</code>.<br/><br/>

        ATTENZIONE : Non si può associare direttamente ad <code>onClick</code> la funzione di "set" della variabile, quindi sarebbe un <RedWord>ERRORE</RedWord> scrivere :<br/>

        <CodeSegment language="javascript">
            {`     
                const basicComponent = () =>
                {
                    const [x,setX] = useState(0);

                    return(
                        <>
                        <h1>{x}</h1>
                        <button onClick={setX(x+1)}>Incrementa</button>
                        </>
                        );
                }
            `}
        </CodeSegment><br/>

        Come abbiamo visto nella lezione sugli Eventi, andando ad assegnare la funzione in questo modo, quest'ultima verrebbe chiamata anche durante il rendering!<br/><br/>
        Di seguito un esempio di contatore su pagina creato con l'utilizzo di <code>useState</code>.
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

