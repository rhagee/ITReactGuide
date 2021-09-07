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
        <h3>Oggetti in Javascript</h3>
        Come abbiamo gia detto precedentemente in Javascript non c'è bisogno di dichiarare le variabili con una tipologia definita<br/>
        di conseguenza anche gli oggetti sono dinamici.<br/><br/>

        Ma cosa significa che gli oggetti sono dinamici?<br/>
        Semplicemente, in Javascript, gli oggetti vengono gestiti come nei file <strong>json</strong>, e la loro definizione è pressochè identica.<br/>

        <CodeSegment language="javascript">
            {`     
                function objFunction()
                {
                    let obj = 
                    {
                        x:"value",
                        n:5,
                        test:true
                    }
                }
            `}
        </CodeSegment><br/>

        Di fatto non ha quasi niente di diverso dagli oggetti definiti in <strong>json</strong>.<br/><br/>
        
        <h3>Destrutturazione</h3>
        A parte la definizione dell'oggetto, andiamo a vedere come questo possa essere destrutturato andando ad accedere ai suoi valori.<br/><br/>

        Di base accediamo ai valori in questo modo : <br/>

        <CodeSegment language="javascript">
            {`     
                function objFunction()
                {
                    let obj = 
                    {
                        x:"value",
                        n:5,
                        test:true
                    }

                    console.log(obj.x);
                    console.log(obj.n);
                    console.log(obj.test);
                }
            `}
        </CodeSegment><br/>

        Ovvero come di norma con <code>nome_obj.nome_attributo</code>. In Javascript abbiamo però la possibilità di creare delle variabili che lo contengano autodestrutturandolo.<br/><br/>
        
        Funziona esattamente come la destrutturazione del <strong>props</strong>, dato che anch'esso è un oggetto : <br/>

        <CodeSegment language="javascript">
            {`     
                function objFunction()
                {
                    //Dichiarazione
                    let obj = 
                    {
                        x:"value",
                        n:5,
                        test:true
                    }
                    
                    //Destrutturazione
                    let {x,n,test} = obj;

                    //Utilizzo
                    console.log(x);
                    console.log(n);
                    console.log(test);
                }
            `}
        </CodeSegment><br/>

        Ovviamente le variabili <code>x</code>, <code>n</code> e <code>test</code> non puntano direttamente all'oggetto, quindi se dobbiamo effettuare modifiche su di esso<br/>
        saremo costretti a riferirci a lui come segue :<br/>

        <CodeSegment language="javascript">
            {`     
                function objFunction()
                {
                    //Dichiarazione
                    let obj = 
                    {
                        x:"value",
                        n:5,
                        test:true
                    }
                    
                    //Destrutturazione
                    let {x,n,test} = obj;

                    //Utilizzo
                    console.log(x);
                    console.log(n);
                    console.log(test);

                    //Modifica
                    obj.x = "newvalue";

                    //Riassegnazione
                    x = obj.x;
                    
                    //Utilizzo
                    console.log(x);
                }
            `}
        </CodeSegment><br/>
        
        <h3>Copia o Modifica</h3>

        Supponiamo ora di voler copiare il nostro oggetto in un altro, ma di voler modificare una singola informazione<br/>
        oppure di voler modificare la composizione dell'oggetto all'interno del codice, il metodo per ottenere questo risultato è utilizzare <code>...nome_oggetto</code>.<br/><br/>

        Ad esempio : <br/>

        <CodeSegment language="javascript">
            {`     
                function objFunction()
                {
                    //Dichiarazione
                    let obj = 
                    {
                        x:"value",
                        n:5,
                        test:true
                    }
                    
                    let copyobj = {...obj,n:2};
                    /* 
                    Equivale a : 
                    let copyobj = 
                    {
                        x:"value", //Da obj
                        n:2, //Dalla modifica
                        test:true //Da obj
                    }
                    */

                    obj = {...obj,val:8};
                    /*
                    Equivale a : 
                    obj = 
                    {
                        x:"value", //Da obj vecchio
                        n:5, //Da obj vecchio
                        test:true, //Da obj vecchio
                        val:8 //Dalla modifica
                    }
                    */

                }
            `}
        </CodeSegment><br/>
            Ora come ora la pratica di "copia" attraverso l'utilizzo di <code>...nome_oggetto</code> sembra poco utile, e poco comoda, ma scopriremo più avanti<br/>
            (Nella sezione useEffect) quanto in realtà ci sarà utile questa funzionalità fornita da Javascript.<br/><br/>
            
            Di seguito un esempio di creazione oggetto, destrutturazione e rendering.
        </p>
        </>
    );
};


export default Ex;

