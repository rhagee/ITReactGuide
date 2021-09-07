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
        
        <h3>Copia o Aggiunta elementi</h3>
        Per copiare o aggiungere elementi in un Array è possibile sfruttare <code>...nome_array</code> in questo modo<br/>

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

        Per rimuovere invece un oggetto dalla lista si utilizza <code>filter</code> con l'assegnazione in questo modo : <br/>

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
                    
                     objlist = objlist.filter((obj) => {return obj.att1 != "x"});

                     //oppure 
                     
                     objlist = objlist.filter((obj => obj.att != "x");

                     /*
                     Risulta la lista : 

                        objlist = [
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
                     */

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

