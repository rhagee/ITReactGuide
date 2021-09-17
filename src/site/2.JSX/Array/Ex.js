import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';
import './../../style.css';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <Warn>
                <p>In questa spiegaizone sono presenti elementi da conoscere spiegati in <strong>Component</strong>,<br/>
                se ci si trova in difficoltà con alcune parti del codice<br/>
                è conveniente prima consultare quella sezione!
                </p>
        </Warn><br/><br/>
        <p className="ex-font">
        <h3>Array in Javascript</h3>
        A differenza degli altri linguaggi di programmazione, in Javascript, non è necessario dichiarare una variabile contenente un Array come tale.<br/><br/>
        Basterà creare una semplice variabile, ed assegnarle un Array, ad esempio : <br/>
        <CodeSegment language="javascript">
            {`     
                function arrFunction() 
                { 
                    let numbers = [1,2,3,4,5];
                    let strings = ["Gino","Paolo","Franco","Giulio"];
                    //Dopodichè si puo utilizzare l'array come si desidera
                }
            `}
        </CodeSegment><br/>
        Inoltre se si volesse riempire un array in maniera dinamica, quindi senza inizializzarlo con dei valori prestabiliti, si può fare in questo modo : <br/>
        <CodeSegment language="javascript">
            {`     
                function arrFunction() 
                { 
                    let x = [];
                    for(let i=0;i<10;i++)
                        x[i] = i;                
                    
                }
            `}
        </CodeSegment><br/>
        Quindi andiamo a definire <code>{`let x = []`}</code> per indicare che stiamo dichiarando un array, che ora è vuoto (di grandezza indefinita).<br/>
        Dopodichè andiamo a riempirlo come desideriamo.<br/><br/>
        
        <h3>Array di Oggetti</h3>
        Ovviamente in Javascript si possono anche creare Array di Oggetti, probabilmente si è visto un esempio di questo nella sezione <strong>Component</strong>.<br/>

        <CodeSegment language="javascript">
            {`     
                function arrFunction() 
                { 
                    let objlist = [
                        {
                            att1 = "x",
                            att2 = 5,
                            att3 = true
                        },
                        {
                            att1 = "y",
                            att2 = 4,
                            att3 = false
                        },
                        {
                            att1 = "z",
                            att2 = 7,
                            att3 = true
                        }
                    ];           
                    
                }
            `}
        </CodeSegment><br/>

        Si consiglia nel caso in cui l'array di oggetti debba essere renderizzato, quindi mostrato poi in HTML mediante la funzione <code>map</code>, di avere per ogni oggetto <br/>
        almeno un attributo <code>id</code> che identifichi univocamente ogni oggetti all'interno dell'array.<br/>
        Logicamente è possibile utilizzare una <code>index</code> esterna, ma questo a volte crea disordine/errori all'interno del codice.<br/><br/>

        
        <h3>Alcune funzioni sugli Array</h3>
        A questo punto dobbiamo solo andare a vedere come avviene la modifica dell'array nel caso dello <code>useState</code>, a questo proposito ci torna utile<br/>
        conoscere alcune funzioni di base sugli Array di Javascript quali : <br/><br/>

        <code>{`filter( () => {return <...test...>)`}</code>:<br/>
        Prende come parametro una funzione, <br/>
        il cui return è il "filtro" o test che verrà applicato ad <strong>OGNI</strong> elemento dell'array.<br/>
        Se il return per l'elemento corrente risulta <code>true</code> allora l'elemento verrà "mantenuto", in caso contrario l'elemento non verrà mantenuto.<br/>
        La funzione <code>filter</code> ritorna il nuovo array "filtrato".<br/><br/>
        
        <code>{`find( () => {return <...test...>)`}</code>:<br/>
        Prende come parametro una funzione, <br/>
        il cui return è il "filtro" o test che verrà applicato ad <strong>OGNI</strong> elemento dell'array.<br/>
        Se il return per l'elemento corrente risulta <code>true</code> allora verrà RITORNATO l'elemento corrente, e la funzione terminerà.<br/>
        Di conseguenza questa funzione serve a ritornare il primo elemento dell'array che soddisfa un certo test.<br/>
        Il return della funzione è l'elemento singolo dell'array, questo ovviamente NON viene eliminato dall'array principale<br/><br/>


        <code>pop()</code>:<br/>
        Non ha parametri, elimina dall'array su cui viene applicato l'ultimo elemento e lo restituisce.<br/><br/>

        <h3>Esempi di utilizzo</h3>
        Da ora utilizzeremo come riferimento il seguente Array per evitare di ripeterlo in ogni codice : <br/>
        <CodeSegment language="javascript">
            {`
            let array = 
            [
                {
                    id : 1,
                    var1 : "val1",
                    var2 : 2
                },
                {
                    id: 2,
                    var1 : "val2",
                    var2 : 4
                },
                {
                    id: 3,
                    var1 : "val3",
                    var2 : 6
                },
                {
                    id: 4,
                    var1 : "val4",
                    var2 : 8
                }
            ];
            `}
        </CodeSegment>

        Andiamo quindi a vedere degli esempi di utilizzo : <br/><br/>
        
        <code>filter</code><br/>
        <CodeSegment language="javascript">
            {`
                const randomFunction = () => 
                {
                    let newarray = array.filter(obj => obj.id!=1)
                }
            `}
        </CodeSegment><br/>
        In questo caso la funzione assegnata a <code>filter</code> prende come parametro <code>obj</code><br/>
        che non è nient'altro che il singolo elemento dell'array (essendo un array di oggetti)<br/>
        dopodichè va a ritornare (lambda-function) il test <code>obj.id!=1</code>, di conseguenza verrà ritornato<br/>
        un array con tutti gli elementi che <strong>NON</strong> hanno id=1. (Stiamo eliminando l'oggetto con id = 1 dall'array).<br/><br/>

        <code>find</code><br/>
        <CodeSegment language="javascript">
            {`
                const randomFunction = () => 
                {
                    let object = array.find(obj => obj.id==1)
                }
            `}
        </CodeSegment><br/>
        In questo caso la funzione assegnata a <code>find</code> prende come parametro <code>obj</code><br/>
        che non è nient'altro che il singolo elemento dell'array (essendo un array di oggetti)<br/>
        dopodichè va a ritornare (lambda-function) il test <code>obj.id==1</code>, di conseguenza verrà ritornato<br/>
        solo il primo elemento che verrà incontrato che ha id=1. (Cerchiamo e returniamo l'oggetto con l'id che ci interessa).<br/><br/>

        <code>pop</code><br/>
        <CodeSegment language="javascript">
            {`
                const randomFunction = () => 
                {
                    let last = array.pop();
                }
            `}
        </CodeSegment><br/>
        In questo caso stiamo andando a prendere l'ultimo elemento di <code>array</code> (nel nostro caso l'oggetto con id=4) <br/>
        e lo assegnamo alla variabile <code>last</code>, eliminando contemporaneamente l'elemento dall'array <code>array</code>.<br/><br/>
    
        <h3>Copia o Aggiunta elementi</h3>
        Abbiamo visto come eliminare, cercare e returnare elementi di un array, <br/>
        ma ora vediamo come copiare o aggiungere elementi in un Array.<br/><br/>

        A questo scopo è possibile sfruttare <code>...nome_array</code> in questo modo<br/>
        <CodeSegment language="javascript">
            {`     
                function arrFunction() 
                { 
                    let objlist = [
                        {
                            att1 = "x",
                            att2 = 5,
                            att3 = true
                        },
                        {
                            att1 = "y",
                            att2 = 4,
                            att3 = false
                        },
                        {
                            att1 = "z",
                            att2 = 7,
                            att3 = true
                        }
                    ];           
                    
                    //Aggiunta elemento
                    objlist = [...objlist,
                        {
                            att1 = "p",
                            att2 = 2,
                            att3 = false
                        }];
                    
                    //Copia lista
                    let newobjlist = [...objlist];
                }
            `}
        </CodeSegment><br/>

        Di seguito un esempio della creazione di un Array di Oggetti e rendering video tramite la funzione di <code>map</code>.
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

