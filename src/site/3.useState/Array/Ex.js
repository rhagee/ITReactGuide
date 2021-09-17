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
        <h3>Array e useState</h3>
        Come per le variabili normali, è possibile utilizzare anche gli Array attraverso lo <code>useState</code>. <br/><br/>

        Andiamo a vedere come dichiarare un Array vuoto <br/>
        <CodeSegment language="javascript">
            {`     
                const [array,setArray] = useState([]);
            `}
        </CodeSegment><br/>
        <center>Oppure uno pieno</center><br/>
        <CodeSegment language="javascript">
            {`     
                const [array,setArray] = useState(['value1','value2','value3']);
            `}
        </CodeSegment><br/>
        <center>Oppure un array di oggetti</center><br/>
        <CodeSegment language="javascript">
            {`     
                const [array,setArray] = useState(
                [
                    {
                        id : 1,
                        var1 : "val1",
                        var2 : 2
                    },
                    {
                        id: 2,
                        var1 : "val1",
                        var2 : 4
                    }
                ]);
            `}
        </CodeSegment><br/>
        E' logico che in questi casi i dati sono possibili "input esterni" ad esempio presi dalla schermata/file/Database, di conseguenza è logico vedere anche questa soluzione : <br/>
        <CodeSegment language="javascript">
            {`     
                let data = 
                [
                    {
                        id : 1,
                        var1 : "val1",
                        var2 : 2
                    },
                    {
                        id: 2,
                        var1 : "val1",
                        var2 : 4
                    }
                ];

                const [array,setArray] = useState(data);
            `}
        </CodeSegment><br/>

        La "best-practice" per la modifica degli array è la creazione di un array temporaneo che non sia in modalità <code>useState</code> <br/>
        che verrà modificato e riassegnato all'array in modalità <code>useState</code> tramite la funzione di <code>set</code>.<br/><br/>

        Nell'esempio di codice sottostante si possono vedere tutte le funzioni più utili degli array applicate su array in modalità <code>useState</code>.
        </p>
        </>
    );
};


const RedWord = (props) =>
{
    let {children} = props;
    return(
        <span style={{color:"red"}}>{children}</span>
    );
}



export default Ex;

