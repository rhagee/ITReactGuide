import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Ex = (props) => {
    let {title} = props;
    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <p className="ex-font">
            <h3>Nested Component</h3><br/>
            In <strong>React</strong> si possono sviluppare applicazioni web che sfruttano le <strong>Nested Components</strong>.<br/>
            Questo è uno dei punti chiave, nonchè vantaggio che da <strong>React</strong> durante lo sviluppo.<br/><br/>

            Poter utilizzare le <strong>Nested Components</strong> ci permette di <strong>modularizzare</strong> il lavoro, potendo sfruttare
            piu volte il codice.<br/><br/>

            Cosa significa però <strong>Nested Component</strong> nello specifico?<br/><br/>

            Di base è una pratica che effettuiamo fin dal primo momento, in cui in <code>App.js</code> andiamo a chiamare la nostra <code>Component</code>.<br/>
            Ovvero all'interno del file <code>App.js</code> andiamo a scrivere :<br/><br/>

            <CodeSegment language="html">
                {`
                    <Component>
                    </Component>
                `}
            </CodeSegment>
            <center>oppure</center><br/>
            <CodeSegment language="html">
                {`
                    <Component/>
                `}
            </CodeSegment>

            Ovvero possiamo creare dei veri e propri <strong>Tag</strong> HTML attraverso le nostre Component sviluppate in Javascript.<br/>
            Ma è possibile solo farlo su file diversi come nel caso di <code>App.js</code> e <code>Component.js</code> ?<br/><br/>

            Ovviamente no, possiamo andare a creare <strong>PIU Component</strong> all'interno di <strong>1 solo File</strong> e sfruttarle all'interno del File stesso.<br/><br/>

            <h3>Definizione ed Utilizzo</h3><br/>
            Supponiamo di avere il nostro file Javascript <code>ComponentPrimaria.js</code> scritto come di base : <br/><br/>

            <CodeSegment language="javascript">
                {`
                    /*Import ecc..*/

                    const ComponentPrimaria = () =>
                    {
                        return(
                            <div>

                            <h1>Titolo</h1>

                            <h2>Sottotitolo</h2>
                            <p>Paragrafo</p>

                            <h2>Sottotitolo</h2>
                            <p>Paragrafo</p>

                            </div>
                        );
                    }

                    /*Export ecc..*/
                `}
            </CodeSegment>

            Ora supponiamo di voler modularizzare la parte dopo il titolo,<br/>
            e supponiamo anche che questa modularizzazione sia utile solo all'interno di questa <strong>Component</strong> e non nel progetto intero.<br/><br/>

            Bene in questo caso non siamo obbligati ad andare a creare un nuovo file di nome (ad esempio) <code>ComponentSecondaria.js</code> o <code>Subtitle.js</code>,<br/>
            ma possiamo semplicemente andare a creare un'altra <code>const</code> all'interno del file stesso, e senza nessun tipo di <code>import</code><br/>
            utilizzare la <code>const</code> stessa all'interno della nostra <strong>Component</strong>.<br/><br/>

            <center>Esempio</center><br/>

            <CodeSegment language="javascript">
                {`
                    /*Import ecc..*/
                    
                    //Component che ha lo stesso nome del file (Non è obbligatorio, ma è buona norma), oppure Default Export 
                    const ComponentPrimaria = () =>
                    {
                        return(
                            <div>

                            <h1>Titolo</h1> //HTML Base

                            <ComponentSecondaria/> //Chiamata a Component Secondaria

                            <ComponentSecondaria/> //Chiamata a Component Secondaria

                            </div>
                        );
                    }

                    //Component Secondaria utile alla primaria (verrà chiamata e ritornerà il codice HTML in return)
                    const ComponentSecondaria = () =>
                    {
                        //Ricordiamoci che siamo obbligati a racchiudere tutto in 1 solo Frammento (per questo <> e </> ad inizio e fine)
                        return(
                            <> 
                                <h2>Sottotitolo</h2> //HTML che la component ritorna
                                <p>Paragrafo</p>    //alla component primaria
                            </>
                        );
                    }

                    /*Export ecc..*/
                `}
            </CodeSegment>

            In questo modo possiamo scrivere due volte <code>ComponentSecondaria</code> e questa si occuperà di fornire il codice HTML in <code>return</code> alla <code>ComponentPrimaria</code>che la chiama.<br/>
            Così quando verrà chiamata la <code>ComponentPrimaria</code> da qualche parte, questa andrà a chiamare la <code>ComponentSecondaria</code> dove necessario.<br/><br/>

            <strong>N.B.</strong> Tutte le component/funzioni/const appartenenti allo stesso file, possono sfruttare/chiamare le altre appartenenti allo stesso file.<br/><br/>
            <strong>N.B.</strong> Solo la Component che viene passata a <code>export default</code> sarà visibile all'esterno quando il file sarà importato da altri!<br/><br/>
            Sotto è riportato l'esempio di una <strong>Nested Component</strong> molto semplice.
                    
        </p>
        </>
    );
};

export default Ex;