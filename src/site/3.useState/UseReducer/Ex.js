import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';
import './../../style.css';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <h3>useState e useReducer</h3>
        <p className="ex-font">
        Come si può intuire in questa pagina non andremo ad analizzare l'utilizzo di <code>useState</code> come nelle precedenti<br/>
        ma un suo stretto parente <code>useReducer</code> che funziona circa allo stesso modo.<br/><br/>

        La differenza sostanziale tra i due è che <code>useReducer</code> viene utilizzato principalmente quando si iniziano ad avere molte variabili <br/>
        che utilizzano <code>useState</code> ed il codice inizia a diventare confuso e complesso, oppure quando piu variabili che usano <code>useState</code> sono <br/>
        logicamente connesse tra loro, e quindi al variare di una variano anche le altre "collegate".<br/><br/>

        Iniziamo ad andare a vedere come si dichiara una variabile con <code>useReducer</code> e quali sono le parti che la compongono.<br/>
        </p>
        <CodeSegment language="javascript">
            {`     

                const obj = 
                {
                    par1 : "value",
                    par2 : 1,
                    par3 : true
                };

                const [state,dispatch] = useReducer(reducer,obj);
                
            `}
        </CodeSegment><br/>
        <p className="ex-font">     
                Come possiamo osservare abbiamo più parti da analizzare rispetto al solito <code>useState</code>.<br/><br/>

                <code>state</code><br/> 
                Rappresenta il nome della nostra "variabile", che in questo caso conterrà un oggetto.<br/><br/>

                <code>dispatch</code><br/> 
                E' la funzione che chiameremo quando vorremo modificare i valori all'interno di <code>state</code><br/>
                ma andremo ad analizzare meglio il suo utilizzo piu avanti, per ora immaginiamola come la funzione di <code>set</code> dello <code>useState</code>.<br/><br/>

                <code>reducer</code><br/>
                Può sembrare poco coerente con la programmazione, ma <code>reducer</code> è la funzione che verrà veramente eseguita quando si farà la chiamata a <code>dispatch</code>.<br/>
                Immaginiamo come se <code>dispatch</code> sia una funzione definita dalla libreria, mentre <code>reducer</code> è la nostra personale implementazione di <code>dispatch</code>.<br/>
                Piu avanti vedremo i parametri di <code>dispatch</code> e come li gestiremo nella nostra funzione DA IMPLEMENTARE <code>reducer</code>.<br/><br/>

                <code>obj</code><br/>
                Non è nient'altro che il valore INIZIALE del nostro <code>state</code>, un po come quando con <code>useState</code> usavamo una costante esterna <code>data</code><br/>
                per inizializzarlo.<br/><br/>
                </p>
                <h3>useReducer nello specifico</h3>
                <p className="ex-font"> 
                    Bene vista la dichiarazione andiamo ad analizzare come si gestisce il codice utilizzando <code>useReducer</code>.<br/><br/>

                    Vediamo come si dichiarano ed utilizzano le funzioni <code>dispatch</code> e <code>reducer</code>.<br/>
                </p>
                <CodeSegment language="javascript">
                {`     

                    const obj = 
                    {
                        titolo : "Titolo Pagina",
                        counter : 1,
                        visible : true
                    };

                    const randomComponent = () =>
                    {
                        const [state,dispatch] = useReducer(reducer,obj);


                        let {titolo,counter,visible} = state;
                        return(
                            <>
                                <h1>{titolo}</h1>
                                <div style={{}}>
                                </div>
                            </>
                        );
                    }
                
                `}
        </CodeSegment><br/>
                <p className="ex-font"> 
         </p>
        </>
    );
};


const RedWord = (props) =>
{
    let {children} = props;
    return(
        <x style={{color:"red"}}>{children}</x>
    );
}


export default Ex;

