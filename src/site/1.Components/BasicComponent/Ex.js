import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';
import './../../style.css';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <h3>Definizione e Return</h3><br/>
        <p className="ex-font">
            Una <code>Component</code> non è nient'altro che una <strong>funzione</strong> contenuta all'interno di un file Javascript.<br/>
            <strong>ATTENZIONE</strong> : il file Javascript e i nomi delle Components devono avere obbligatoriamente la prima lettera in Uppercase!<br/><br/>
            
            In questo caso la Component è una costante che contiene una funzione : <br/><br/>
        </p>
        <CodeSegment language="javascript">
        {`
            const ComponentName = () => {

            }
        `}
        </CodeSegment>
        <p className="ex-font">
            <br/>
            <br/>
            Questa funzione ha come return (ritorno della funzione) un <code>React.Fragment</code> <br/>(li chiameremo <strong>"Frammenti"</strong> per semplicità).
            <br/>
            <br/>
            Che può essere definito in 3 diversi modi :
            <br/>
            <br/>
        </p>
        <CodeSegment language="html">
        {`
            <React.Fragment>
                <!-- Altri Frammenti -->
            </React.Fragment>
        `}
        </CodeSegment>
        <center>
            <p className="ex-font">
                oppure
            </p>
        </center>
        <br/>
        <CodeSegment language="html">
        {`
            <>
                <!-- Altri Frammenti -->
            </>
        `}
        </CodeSegment>
        <center>
            <p className="ex-font">
                oppure
            </p>
        </center>
        <CodeSegment language="html">
        {`
            <div>
                <!-- Altri Frammenti -->
            </div>
        `}
        </CodeSegment>
        <p className="ex-font">
            <br/>
            inoltre è possibile effettuare anche :
            <br/>
            <br/>
        </p>
        <CodeSegment language="html">
        {`
            <QualunqueTag>
                <!-- Altri Frammenti -->
            </QualunqueTag>
        `}
        </CodeSegment>
        <h3>Fragment</h3><br/>
        <p className="ex-font">
            L'importante è che il <code>return</code> ritorni come elemento <strong>1 solo elemento</strong>, darebbe errore in caso contrario, esempio :
            <br/>
            <br/>
        </p>
        <CodeSegment language="javascript">
            {`
            const ComponentName = () => 
            {
                return(
                    <h1>Ciao</h1><!-- Frammento 1 -->
                    <h2>CiccioFrizzo</h2><!-- Frammento 2 -->
                );
            }
            `}
        </CodeSegment>
        <p className="ex-font">
            Poichè stiamo ritornando 2 Frammenti e non uno solo, in questo caso la versione corretta sarebbe (ad esempio) :
            <br/>
            <br/>
        </p>
        <CodeSegment language="javascript">
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
        </CodeSegment>
        <center>
            <p className="ex-font">
                oppure
            </p>
        </center>
        
        <CodeSegment language="javascript">
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
        </CodeSegment>
        <p className="ex-font">
            La cosa importante è appunto che il Return contenga come "Oggetto ritornato" 1 Frammento, che però può contenerne INFINITI altri.<br/><br/>
        </p>
        <h3>Import/Export</h3><br/>
        <p className="ex-font">
            Ora che abbiamo la nostra <code>const</code> creata all'interno del nostro file (ad esempio) <code>ComponentName.js</code> dobbiamo solo andarla ad esportare come default<br/>
            ed importarla dove necessario.<br/>

            Per esportare come default una <code>const</code> all'interno del file Javascript basterà andare a scrivere al fondo del file Javascript : <br/><br/>
        </p>
        <CodeSegment language="javascript">
            {`
                /*"ComponentName" è il nome della 
                costante/funzione che vogliamo 
                esportare come Default.
                */

                export default ComponentName; 
            `}   
        </CodeSegment>
        <p className="ex-font">
            Dopodichè per importarla nel nostro file di partenza, che abbiamo detto essere <code>App.js</code>, che viene creato direttamente alla creazione del progetto,
            basterà aggiungere agli <code>import</code> di <code>App.js</code>, quindi all'inizio del file, la nostra Component :<br/><br/>
        </p>
        <CodeSegment language="javascript">
            {`
                import ComponentName from './Path/Della/Component/ComponentName';
            `}   
        </CodeSegment>
        <p className="ex-font">
            Dove il <code>./</code> è obbligatorio per indicare che si sta scrivendo un Path e non ci si sta riferendo a delle librerie installate tramite <code>npm</code>.<br/>
            ed al posto di <code>"Path/DellaComponent/ComponentName"</code> ci va appunto il percorso per arrivare alla component, e poi il nome del file Javascript che continene la Component.<br/><br/>
            Nel caso in cui si trovassero nella stessa cartella basterà scrivere :<br/><br/>
        </p>
        <CodeSegment language="javascript">
            {`
                import ComponentName from './ComponentName';
            `}   
        </CodeSegment>
        <p className="ex-font">
            Fatto questo potremo utilizzare all'interno di <code>App.js</code> la nostra Component, come fosse un file HTML :<br/><br/>
        </p>
        <CodeSegment language="javascript">
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
        </CodeSegment>
        <p className="ex-font">
            E quest'ultima verrà mostrata sulla pagina principale.<br/><br/>
            Sotto è riportato l'esempio di codice di una <strong>Component</strong> molto semplice, nel momento in cui verrà chiamata sottoforma di <strong>Tag</strong> all'interno di <code>App.js</code>.
        </p>
        </>
    );
};




export default Ex;

