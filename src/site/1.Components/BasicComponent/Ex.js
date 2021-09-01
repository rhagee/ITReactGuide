import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Ex = (props) => {
    let {title} = props;
    return (
        <>
        <center><h1>{title} </h1></center>
        <br/>
        <p>
        Una <code>Component</code> non è nient'altro che una <strong>funzione</strong> contenuta all'interno di un file Javascript, in questo caso una costante che contiene una funzione : <br/><br/>
        <SyntaxHighlighter language="html" style={stackoverflowDark}>
        {`
            const ComponentName = () => {

            }
        `}
        </SyntaxHighlighter>
        <br/>
        <br/>
        Questa funzione ha come return (ritorno della funzione) un <code>React.Fragment</code> <br/>(li chiameremo <strong>"Frammenti"</strong> per semplicità).
        <br/>
        <br/>
        Che può essere definito in 3 diversi modi :
        <br/>
        <br/>
        <SyntaxHighlighter language="html" style={stackoverflowDark}>
        {`
            <React.Fragment>
                <!-- Altri Frammenti -->
            </React.Fragment>
        `}
        </SyntaxHighlighter>

        <center>oppure</center>
        <br/>
       
        <SyntaxHighlighter language="html" style={stackoverflowDark}>
        {`
            <>
                <!-- Altri Frammenti -->
            </>
        `}
        </SyntaxHighlighter>
       
        <center>oppure</center>
       
        <br/>
        <SyntaxHighlighter language="html" style={stackoverflowDark}>
        {`
            <div>
                <!-- Altri Frammenti -->
            </div>
        `}
        </SyntaxHighlighter>
        <br/>
        inoltre è possibile effettuare anche :
        <br/>
        <br/>
        <SyntaxHighlighter language="html" style={stackoverflowDark}>
        {`
            <QualunqueTag>
                <!-- Altri Frammenti -->
            </QualunqueTag>
        `}
        </SyntaxHighlighter>

        L'importante è che il <code>return</code> ritorni come elemento <strong>1 solo elemento</strong>, darebbe errore in caso contrario, esempio :
        <br/>
        <br/>
        <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
            {`
            const ComponentName = () => 
            {
                return(
                    <h1>Ciao</h1><!-- Frammento 1 -->
                    <h2>CiccioFrizzo</h2><!-- Frammento 2 -->
                );
            }
            `}
        </SyntaxHighlighter>
        
        Poichè stiamo ritornando 2 Frammenti e non uno solo, in questo caso la versione corretta sarebbe (ad esempio) :
        <br/>
        <br/>
        <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
        {`
         const ComponentName = () => 
         {
            return(
                <> <!-- Frammento Contenitore -->
                    <h1>Ciao</h1> <!-- Sottoframmento 1 -->
                    <h2>CiccioFrizzo</h2> <!-- Sottoframmento 2 -->
                </>
            );
        }
        `}
        </SyntaxHighlighter>

        <center>oppure</center>
        <br/>

        <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
            {`
            const ComponentName = () => 
            {
                return(
                    <div> <!-- Frammento Contenitore -->
                        <h1>Ciao</h1> <!-- Sottoframmento 1 -->
                        <h2>CiccioFrizzo</h2> <!-- Sottoframmento 2 -->
                    </div>
                );
            }
            `}   
        </SyntaxHighlighter>
        La cosa importante è appunto che il Return contenga come "Oggetto ritornato" 1 Frammento, che però può contenerne INFINITI altri.<br/><br/>

        Ora che abbiamo la nostra <code>const</code> creata all'interno del nostro file (ad esempio) <code>ComponentName.js</code> dobbiamo solo andarla ad esportare come default<br/>
        ed importarla dove necessario.<br/>

        Per esportare come default una <code>const</code> all'interno del file Javascript basterà andare a scrivere al fondo del file Javascript : <br/><br/>
        <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
            {`
                export default ComponentName; //dove "ComponentName" è il nome della costante/funzione che vogliamo esportare come Default.
            `}   
        </SyntaxHighlighter>

        Dopodichè per importarla nel nostro file di partenza, che abbiamo detto essere <code>App.js</code>, che viene creato direttamente alla creazione del progetto,
        basterà aggiungere agli <code>import</code> di <code>App.js</code>, quindi all'inizio del file, la nostra Component :<br/><br/>

        <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
            {`
                import ComponentName from './Path/Della/Component/ComponentName';
            `}   
        </SyntaxHighlighter>
        
        Dove il <code>./</code> è obbligatorio per indicare che si sta scrivendo un Path e non ci si sta riferendo a delle librerie installate tramite <code>npm</code>.<br/>
        ed al posto di <code>"Path/DellaComponent/ComponentName"</code> ci va appunto il percorso per arrivare alla component, e poi il nome del file Javascript che continene la Component.<br/><br/>
        Nel caso in cui si trovassero nella stessa cartella basterà scrivere :<br/><br/>
        <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
            {`
                import ComponentName from './ComponentName';
            `}   
        </SyntaxHighlighter>
        Fatto questo potremo utilizzare all'interno di <code>App.js</code> la nostra Component, come fosse un file HTML :<br/><br/>

        <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
            {`
                import './App.css';
                import ComponentName from "./ComponentName";
                
                function App() {
                  return (
                      <ComponentName/>
                  );
                }
                
                export default App;
            `}   
        </SyntaxHighlighter>
        E quest'ultima verrà mostrata sulla pagina principale.<br/><br/>
        Sotto è riportato l'esempio di codice di una <strong>Component</strong> molto semplice, nel momento in cui verrà chiamata sottoforma di <strong>Tag</strong> all'interno di <code>App.js</code>.
        </p>
        </>
    );
};

export default Ex;