import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Ex = (props) => {
    let {title} = props;
    return (
        <>
        <center><h1>{title} </h1></center>
        <br/>
        <p>
            <br/>
            <Warn>
                <p>In questa spiegaizone sono presenti elementi da conoscere spiegati in <strong>JSX</strong>,<br/>
                se ci si trova in difficoltà con alcune parti del codice<br/>
                è conveniente prima consultare quella sezione!
                </p>
            </Warn><br/><br/>
            
            <h3>Props in HTML</h3><br/>
            Le <strong>Props</strong> non sono nient'altro che le "Proprietà" passibili ad una Component,<br/>
            immaginiamo nel linguaggio <code>html</code> un codice di questo tipo : 
            <br/>
            <CodeSegment language="html">
                {`
                    <button type="submit" style="background-color:green" onClick="onClickFunction()"> INVIA </button>
                `}
            </CodeSegment>
            <br/>
            <code>button</code>, che non è nient'altro che una Component base dell'HTML (già presente infatti in React DOM).
            <br/><br/>
            In questo caso le <strong>Props</strong> della <strong>Component</strong>
            sono : <br/>
            <code>type</code><br/>
            <code>style</code><br/>
            <code>onClick</code><br/><br/> 
            
            ovvero sono tutte "Proprietà" a cui viene assegnato un valore, 
            accenniamo che anche la scritta <code>INVIA</code> contenuta nel tag HTML, 
            è una "Proprietà" contenuta nelle <strong>Props</strong>, ma ci arriveremo a breve.<br/><br/>

            La Component <code>button</code> in questo caso, andrà ad elaborare i dati contenuti nelle sue variabili <code>type</code>, <code>style</code> ed <code>onClick</code> 
            che noi abbiamo "riempito" con dei valori/funzioni. <br/><br/>

            <h2>Props in React</h2><br/>
            Ma quindi che cosa sono le <strong>props</strong>?<br/><br/>

            Beh, semplicemente <strong>props</strong> non è nient'altro che un <strong>oggetto</strong> STANDARD di React, che se inserito come Parametro
            di una qualsiasi <strong>Component</strong>, andrà a contenere come "Attributi dell'oggetto", la combinazione <code>nome:valore</code> delle props passate dentro la Component.<br/><br/>
            Osserviamo ora come una Component dichiara di volere ottenere in input delle <strong>props</strong> :
            <br/>
           <CodeSegment>
           {`

                const SimpleComponent = (props) =>
                {
                    return(
                            <h1>Sono una Simple Component</h1>
                    );
                }        
            `} 
           </CodeSegment><br/>
           
           Fatto questo possiamo andare ad accedere alle props all'interno della funzione in questo modo : <br/>

           <CodeSegment>
           {`

                const SimpleComponent = (props) =>
                {
                    let par1 = props.par1;
                    let par2 = props.par2;
                    return(
                            <h1>Sono una Simple Component</h1>
                    );
                }        
            `} 
           </CodeSegment><br/>
            
            Dove <code>par1</code> e <code>par2</code> sono parametri passati in Input alla chiamata di <code>SimpleComponent</code>.<br/><br/>

           Ed ora vediamo come un'altra <strong>Component</strong> deve effettuare la chiamata a <code>SimpleComponent</code> passando i dati :<br/>

           <CodeSegment>
           {`
                import SimpleComponent from './SimpleComponent';

                const CallerComponent = () =>
                {
                    return(
                            <SimpleComponent par1="Stringa1" par2="Stringa2"/>
                    );
                }        
            `} 
           </CodeSegment><br/>
           Fatto questo, la <code>SimpleComponent</code> che verrà creata avrà preso come parametri <br/><br/>

           <code>par1</code>  che conterrà <code>"Stringa1"</code> <br/>
           <code>par2</code>  che conterrà <code>"Stringa2"</code> <br/><br/>

           In questo modo le due variabili potranno essere manipolate a piacimento all'interno della <code>SimpleComponent</code>.<br/><br/>

           <h2>Children in HTML</h2><br/>
           Ora però è venuto il momento di capire che cosa sono invece i <strong>children</strong>!<br/><br/>
           Nel caso del paragone all'HTML i <strong>children</strong> non sono nient'altro che i "figli" per l'appunto<br/>
           della <strong>Component</strong>, ovvero tutto ciò che è contenuto all'interno del tag.<br/><br/>
           Esempio:<br/>
           <CodeSegment language="html">
           {`
                <div>
                    <h1>Titolo</h1>
                    <p>Qualche cosa da scrivere</p>
                </div>
            `}     
           </CodeSegment><br/>
           In questo esempio <code>h1</code> e <code>p</code> sono entrambi <strong>children</strong> di <code>div</code> .<br/><br/>

           <h2>Children in React</h2><br/>

           A questo punto non ci resta che capire come sfruttare <strong>children</strong> anche all'interno di React.<br/><br/>
           
           Andiamo quindi a vedere come una Component può accedere ai suoi <strong>children</strong>:<br/>
           <CodeSegment language="javascript">
           {`
                const TitleAddComponent = (props) =>
                {
                    let children = props.children;
                    return(
                        <>
                            <h1>Titolo</h1>
                            <div className="contenuto-titolo">
                                {children}
                            <div/>
                            <h3>Fine</h3>
                        </>
                    );
                }
            `}     
           </CodeSegment><br/>

           Quindi possiamo ora andare a chiamare la Component <code>TitleAddComponent</code> inserendo all'interno dei Tag qualunque <strong>children</strong>.<br/><br/>

           Esempio : <br/>

           <CodeSegment language="javascript">
           {`
                import TitleAddComponent from './TitleAddComponent';

                const MainComponent = () =>
                {
                    return(
                        <>
                            <TitleComponent>
                                <p>Questo è il testo che finirà sotto al Titolo!</p>
                            </TitleComponent>
                        </>
                    );
                }
            `}     
           </CodeSegment><br/>

            In questo caso all'interno di <code>children</code> sarà contenuto il <code>p</code> (paragrafo) per intero,<br/>
            e quando andremo ad inserire <code>children</code> all'interno del <code>return</code> della Component <code>TitleAddComponent</code> verrà 
            stampato <code>p</code> ed il suo contenuto.<br/><br/>

            <h2>Props Destructuring</h2><br/>

            Come ultima cosa andiamo a vedere come lavorare sulle <strong>props</strong> in maniera semplice e veloce.<br/><br/>

            Abbiamo visto che possiamo usare <code>props.nomeattributo</code> per accedere ai valori di <strong>props</strong><br/>
            e possiamo persino andare ad assegnarli a variabili locali create.<br/>
            Ma supponiamo di avere "MOLTI" attributi all'interno di <strong>props</strong>, o semplicemente di non voler creare ogni singola variabile ed assegnarla.<br/><br/>

            Bene in questo caso possiamo sfruttare il <strong>Destructuring</strong>, attraverso il quale l'oggetto andrà a dividersi "in automatico" all'interno delle variabili.<br/><br/>

            Ecco come funziona supponendo di avere <code>par1</code>, <code>par2</code> ed i <code>children</code> passati dal "chiamante" : <br/>

            <CodeSegment language="javascript">
           {`
                const SimpleComponent = (props) =>
                {
                    let {par1,par2,children} = props;
                    return(
                        <>
                            <h1>{par1}</h1>
                            <h3>{par2}</h3>
                            
                            {children}
                        </>
                    );
                }
            `}     
           </CodeSegment><br/>

           In questo modo abbiamo semplificato la scrittura e lo "split" dell'oggetto <code>props</code> in maniera semplice.<br/><br/>
           Un ulteriore possibile modo di <strong>destrutturare</strong> l'oggetto <code>props</code> è :<br/>

            <CodeSegment language="javascript">
            {`
                    const SimpleComponent = ({par1,par2,children}) =>
                    {
                        return(
                            <>
                                <h1>{par1}</h1>
                                <h3>{par2}</h3>
                                
                                {children}
                            </>
                        );
                    }
                `}     
            </CodeSegment><br/>

            Praticamente <strong>destrutturandolo</strong> subito durante il passaggio di parametri alla Component.<br/><br/>
            Di seguito un esempio di codice funzionante con gli argomenti trattati fin'ora.<br/>


        </p>
        </>
    );
};

const Warn = (props) =>
{
    let {children} = props;
    return(
        <div style={{backgroundColor:"#b86c6c",color:"white",padding:"10px 30px 10px 30px",borderRadius:"10px"}}>
        <center><h2>WARN : </h2></center>
            <center>{children}</center>
        </div>
        
    );
}

export default Ex;