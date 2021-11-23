import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';
import './../../style.css';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <h3>Introduzione</h3><br/>
        <p className="ex-font">
        La funzione <code>useEffect</code> è un tipo di funzione utilizzata per effettuare modifiche al codice subito dopo che la pagina è stata renderizzata.<br/><br/>

        Questo significa che la funzione <code>useEffect</code> verrà triggerata almeno 1 volta al caricamento della pagina, subito dopo il rendering della Component.<br/><br/>

        Inoltre ricordiamo che OGNI VOLTA che viene modificata una variabile che utilizza <code>useState</code> allora anche la pagina viene ri-renderizzata.<br/><br/>

        Andiamo quindi a vedere nello specifico come importare e definire una funzione <code>useEffect</code> : <br/>

        <CodeSegment language="javascript">
            {`    
                import React,{useEffect} from 'react';
                
                const basicComponent = () =>
                {
                    
                    useEffect(() => 
                    {
                        console.log("useEffect");
                    });
                    
                    console.log("rendering");
                    return(
                        <>
                            <h1>Basic Component</h1>
                        </>
                        );
                }
            `}
        </CodeSegment><br/>
        
        Eseguendo il codice sopra nella console verrà visualizzata prima : <code>rendering</code> , poi <code>useEffect</code>.<br/><br/>
        </p>
        <h3>Chiamata Condizionata</h3><br/>
        <p className="ex-font">
        Quindi come abbiamo detto la funzione <code>useEffect</code> viene utilizzata per effettuare delle operazioni post-rendering, e nel caso, ri-renderizzare.<br/>
        Ma ricordiamo che appena viene modificata una variabile che sfrutta <code>useState</code> avviene il re-rendering della pagina,<br/>
        e questo "triggera" di nuovo la nostra funzione <code>useEffect</code>.<br/><br/>

        Questo ci porta a dover studiare come condizionare l'esecuzione della funzione <code>useEffect</code>. <br/><br/>
        </p>
        <h3>Dipendente da ALCUNE variabili</h3>
        <p className="ex-font">
        Come possiamo osservare <code>useEffect</code> non è nient'altro che una funzione che prende come input un'altra funzione (quella che verrà eseguita), ma questo non è l'unico parametro<br/>
        infatti volendo possiamo andare a passare, come secondo parametro, un array che dovrà essere l'array delle variabili che, in caso di modifica, devono triggerare la nostra funzione <code>useEffect</code>.<br/><br/>

        Ad esempio : <br/>

        <CodeSegment language="javascript">
            {`    
                import React,{useEffect,useState} from 'react';
                
                const basicComponent = () =>
                {
                    const [x,setX] = useState(0);

                    useEffect(() => 
                    {
                        console.log(useEffect);
                    },[x]);
                    
                    return(
                        <>
                            <h1>{x}</h1>
                            <button onClick={() => setX(x+1)}>ADD</button>
                        </>
                        );
                }
            `}
        </CodeSegment><br/>
        
        Al caricamento della pagina verrà mostrato in console : <code>useEffect</code>,<br/>
        inoltre ogni volta che andremo a premere il botton <code>ADD</code> che va a modificare la variabile <code>x</code> allora avremo altrettante stampe di <code>useEffect</code>.<br/><br/>

        Questo vuol dire che passando come parametro <code>[x]</code> alla funzione <code>useEffect</code> abbiamo imposto alla stessa che : <br/><br/>

        "<strong>ESEGUI</strong> subito dopo il rendering, ed ogni volta che il rendering avviene a causa della modifica di <code>x</code>."<br/><br/>
        </p>
        <h3>Dipendente da TUTTE le variabili</h3><br/>
        <p className="ex-font">
        A questo punto possiamo definire un'array lunghissimo contenente ogni variabile per cui vogliamo che venga eseguita <code>useEffect</code><br/>
        Ma se supponiamo che le variabili siano tutte?<br/><br/>

        Basterà scrivere : <br/>

        <CodeSegment language="javascript">
            {`    
                import React,{useEffect,useState} from 'react';
                
                const basicComponent = () =>
                {
                    const [x,setX] = useState(0);
                    const [y,setY] = useState(0);
                    useEffect(() => 
                    {
                        console.log(useEffect);
                    });
                    
                    return(
                        <>
                            <h1>{x}</h1>
                            <button onClick={() => setX(x+1)}>ADD</button>
                            <h1>{y}</h1>
                            <button onClick={() => setY(y+1)}>ADD</button>
                        </>
                        );
                }
            `}
        </CodeSegment><br/>

        Se non passiamo alcun <code>Array</code> la funzione <code>useEffect</code> verrà eseguita dopo ogni re-rendering, a prescindere dalla variabile che l'ha scatenato.<br/><br/>
        </p>
        <h3>Indipendente</h3><br/>
        <p className="ex-font">
        E se invece volessimo che la funzione <code>useEffect</code> venga eseguita solamente dopo il caricamento della pagina e MAI quando una variabile cambia? <br/><br/>

        Bene in questo caso basterà scrivere : <br/>
        <CodeSegment language="javascript">
            {`    
                import React,{useEffect,useState} from 'react';
                
                const basicComponent = () =>
                {
                    const [x,setX] = useState(0);
                    const [y,setY] = useState(0);
                    useEffect(() => 
                    {
                        console.log(useEffect);
                    },[]);
                    
                    return(
                        <>
                            <h1>{x}</h1>
                            <button onClick={() => setX(x+1)}>ADD</button>
                            <h1>{y}</h1>
                            <button onClick={() => setY(y+1)}>ADD</button>
                        </>
                        );
                }
            `}
        </CodeSegment><br/>
        
        Ovvero passando l'array VUOTO come parametro, la funzione <code>useEffect</code> verrà eseguito solo dopo il PRIMO rendering della pagina.<br/><br/>

        Di seguito un esempio che sfrutta <code>useEffect</code>, <code>useState</code> in contemporanea, e tutti gli argomenti che abbiamo affrontato fin'ora,<br/>
        inoltre nell'esempio sotto secondo le nostre competenze la funziona che verrà usata <code>setTimer</code> avrà dei piccoli problemi di performance, che andremo ad aggiustare<br/>
        quando parleremo di <strong>Clean Up Function</strong> nella prossima sezione.<br/><br/>

        <strong>PS.</strong> Il problema è che se premiamo troppe volte sulla freccia (per cambiare pagina), a volte non viene effettuato il timeout di 1000ms (1s), ma dura molto meno.       
        </p>
        </>
    );
};




export default Ex;

