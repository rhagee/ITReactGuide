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
        <h3>Variabili in Javascript</h3>
        Per la dichiarazioni di variabili in Javascript non è necessario specificare il tipo di variabile che si sta andando a creare.<br/><br/>
        
        Bisogna però specificare lo scopo della variabile, e con scopo si intende, il modo in cui verrà gestita, esistono in questo caso 3 tipi di dichiarazioni di variabile :<br/><br/>

        <code>var</code><br/>
        <code>let</code><br/>
        <code>const</code><br/><br/>

        Andiamo di seguito a spiegarle una ad una : <br/><br/>

        <h3>VAR</h3>
        Una variabile dichiarata come <code>var</code> è una variabile generica, cioè può contenere qualunque dato (int,string,obj,function ecc...), inoltre la dichiarazione con <code>var</code>
        permette di ridichiarare una variabile quante volte si vuole.<br/><br/>
        Esempio:<br/>
        <CodeSegment language="javascript">
            {`     
                function xFunction() {
                  var x = 5;
                  x = x + 6;
                  var x = 12 + 2;
                  alert(x);
                }
            `}
        </CodeSegment><br/>

        Nel caso venisse eseguita la funzione <code>xFunction</code>, non avremmo nessun tipo di errore, nonostante la ridefinizione di <code>x</code><br/>
        di conseguenza in questo modo abbiamo la possibilità di ridichiarare variabili all'infinito senza incorrere in errori.<br/><br/>
        
        L'utilizzo di <code>var</code> ormai è obsoleto, e non si utilizza più a meno di particolari casi in cui è necessario l'utilizzo di questa meccanica di ridefinzione.<br/><br/>

        <h3>LET</h3>
        Una variabile dichiarata come <code>let</code> è una variabile generica, cioè può contenere qualunque dato (int,string,obj,function ecc...), inoltre la dichiarazione con <code>let</code>
        NON permette di ridichiarare una variabile quante volte si vuole, al contrario di <code>var</code>, quindi molto più simile alla classica dichiarazione in altri linguaggi di programmazione.<br/><br/>

        Ad esempio sarebbe un <RedWord>ERRORE</RedWord> scrivere:<br/>
 
        <CodeSegment language="javascript">
            {`     
                function xFunction() {
                  let x = 5;
                  x = x + 6;
                  let x = 12 + 2;
                  alert(x);
                }
            `}
        </CodeSegment><br/>
        In questo caso il compilatore darebbe un errore in esecuzione, dato che abbiamo ri-dichiarato la variabile <code>x</code> che avevamo già dichiarato in precedenza.<br/>
        Di base, per la dichiarazione di normali variabili si consiglia di utilizzare <code>let</code> invece che <code>var</code>.<br/><br/>
        
        <h3>CONST</h3>
        Una variabile dichiarata come <code>const</code> è una variabile generica, cioè può contenere qualunque dato (int,string,obj,function ecc...), inoltre la dichiarazione con <code>const</code>
        NON permette di ri-assegnare un valore differente da quello iniziale, a parte casi particolari che vedremo, dato che la nostra variabile è una COSTANTE.<br/><br/>

        Ad esempio sarebbe un <RedWord>ERRORE</RedWord> scrivere : <br/>
        <CodeSegment language="javascript">
            {`     
                function xFunction() {
                  const x = 5;
                  x = x + 6;
                  alert(x);
                }
            `}
        </CodeSegment><br/>
        In questo caso il compilatore darebbe un errore di esecuzione, dato che abbiamo ri-assegnato la costante <code>x</code> che aveva già un valore.<br/><br/>
                
        Si ricorda che le <code>Component</code> stesse che abbiamo utilizzato fin'ora, non sono nient'altro che <code>const</code> a cui viene assegnata una funzione.<br/><br/>
        
        <h3>Variabili e React</h3>
        Come possiamo sfruttare le nostre variabili all'interno di REACT? <br/><br/>
        Il loro utilizzo è molto semplice, ricordiamoci che tutti i tipi di dichiarazioni sopracitati possono contenere indifferentemente : <br/><br/>
        <strong>Numeri</strong><br/>
        <strong>Stringhe</strong><br/>
        <strong>Oggetti</strong><br/>
        <strong>Funzioni</strong><br/>
        <strong>FRAGMENTS</strong><br/><br/>
        Quello che possiamo fare di queste variabili è "Stamparle" all'interno del codice HTML returnato, andando a "mostrarle" sul display.<br/><br/>
        
        Per mostrare una variabile all'interno della parte grafica (return), basta scrivere <code>{`{NomeVariabile}`}.</code><br/><br/>

        Ad esempio : <br/>

        <CodeSegment language="javascript">
            {`     
                const basicComponent = () => {
                  let prod1 = "Pane";
                  let q1 = 5;
                  const prod2 = "Focaccia";
                  const q2 = 6;
                  return(
                      <>
                        <h1> Prodotti </h1>
                        <h3>{prod1}</h3>
                        <p>Quantità : {q1}</p>
                        <h3>{prod2}</h3>
                        <p>Quantità : {q2}</p>
                      </>
                  );
                }
            `}
        </CodeSegment><br/>
        Di conseguenza, ogni variabile che introduciamo nel codice verrà rimpiazzata dal suo contenuto.<br/><br/>
        Di seguito un esempio più complesso.
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

