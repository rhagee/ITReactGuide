import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';


const Ex = (props) => {
    let {title} = props;
    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <section id="top"></section>
        <p className="ex-font">
            <br/> 
            <h3>Cos'è un Evento</h3><br/>
            Un evento non è nient'altro che <strong>un'interazione</strong> dell'utente con i nostri Componenti, ad esempio il "click" su un bottone.<br/>
            Esistono anche altri tipo di eventi, per esempio la modifica di un campo di testo, andare sopra ad un immagine con la freccia, ecc.. ecc.. <br/><br/>
            
            Per semplicità andiamo ad analizzare il metodo <code>onClick</code> di un <code>button</code> per capire come vengono gestiti gli eventi in React.<br/><br/>

            Esempio :<br/>
            <CodeSegment language="javascript">
            {`
                    const onClickFunction = () =>
                    {
                        alert("Bottone Premuto!");
                    }

                    const SimpleComponent = () =>
                    {
                        return(
                            <>
                                <button onClick={onClickFunction}>Test</button>
                            </>
                        );
                    }
                `}     
            </CodeSegment><br/>
            <center>Oppure</center>
            <br/>
            <CodeSegment language="javascript">
            {`
                    function onClickFunction()
                    {
                        alert("Bottone Premuto!");
                    }

                    const SimpleComponent = () =>
                    {
                        return(
                            <>
                                <button onClick={onClickFunction}>Test</button>
                            </>
                        );
                    }
                `}     
            </CodeSegment><br/>
            Come si può notare andiamo a creare una costante/funzione che verrà <strong>assegnata</strong> al parametro <code>onClick</code> del <code>button</code>.<br/><br/>
            Inoltre è possibile persino andare a definire una funzione <strong>in-line</strong> (Lambda) nel caso in cui non fossero necessarie troppe righe di codice : <br/>
            <CodeSegment language="javascript">
            {`
                    const SimpleComponent = () =>
                    {
                        return(
                            <>
                                <button onClick={() => {alert("Bottone Premuto!")}}>Test</button>
                            </>
                        );
                    }
                `}     
            </CodeSegment><br/>
            L'utilizzo della Lambda Function è necessario nel caso in cui si volessero passare dei parametri di qualunque tipo alla funzione che gestirà il click.<br/><br/>

            Di seguito un esempio <RedWord><strong>ERRATO</strong></RedWord> di passaggio di parametri dalla funzione <code>onClick</code> alla funzione che gestisce il Click.<br/>
            <CodeSegment language="javascript">
            {`
                    function onClickFunction(par)
                    {
                        alert(par);
                    }

                    const SimpleComponent = () =>
                    {
                        return(
                            <>
                                <button onClick={onClickFunction("valore")}>Test</button>
                            </>
                        );
                    }
                `}     
            </CodeSegment><br/>
            In questo caso l'errore starebbe nel modo in cui viene assegnata la funzione <code>onClickFunction</code> al parametro <code>onClick</code>.<br/>
            Nel caso in cui venisse eseguito il codice sopra, subito dopo il caricamento della pagina apparirà un <strong>Alert</strong> con la scritta "valore",
            nonostante non sia stato premuto alcun bottone.<br/><br/>

            Capita poichè React interpreta quello che abbiamo scritto come una chiamata a funzione effettuata in mezzo al <code>return</code>, di conseguenza andrà ad effettuare
            immediatamente la chiamata a funzione appena caricherà il bottone a video. <br/> 
            Ovviamente in ogni caso, ogni volta che premeremo il bottone verrà effettuata la chiamata a funzione, ma non è questo quello che vogliamo.<br/>
            Il modo corretto di effettuare un passaggio di parametri è il seguente<br/>
            <CodeSegment language="javascript">
            {`
                    function onClickFunction(par)
                    {
                        alert(par);
                    }

                    const SimpleComponent = () =>
                    {
                        return(
                            <>
                                <button onClick={() => {onClickFunction("Hai premuto il bottone!")}}>Test</button>
                            </>
                        );
                    }
                `}     
            </CodeSegment><br/>
            In questo caso sfruttiamo la Lambda-Function per fare in modo di non eseguire la funzione <code>onClickFunction</code> al caricamento del bottone, ma come prima,<br/>
            solo nel momento in cui andremo a premere il bottone, partirà la Lambda-Function che chiamerà al suo interno la funzione <code>onClickFunction</code> che verrà eseguita.<br/>
            In questo modo la funzione sarà eseguita solo dopo aver premuto il bottone, e non ogni volta che viene caricata la pagina.
            <br/><br/>

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