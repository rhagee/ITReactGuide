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
        <h3>Oggetti e useState</h3>
        Come le variabili normali, è possibile anche che degli oggetti debbano essere modificati e ri-renderizzati.<br/>
        Andiamo a vedere come funziona quindi l'update con <code>useEffect</code> per gli oggetti.<br/><br/>

        Di base il funzionamento è lo stesso delle variabili normali, cambia però che la funzione di <code>set</code> dello <code>useState</code><br/>
        va a riassegnare l'oggetto completamente, quindi dobbiamo usare dei piccoli accorgimenti durante l'update dell'oggetto stesso.<br/><br/>

        <CodeSegment language="javascript">
            {`     
                const basicComponent = () =>
                {
                    const [obj,setObj] = useState({n1:0,n2:0});

                    return(
                        <>
                        <h1>numero 1 : {obj.n1}</h1>
                        <button onClick={() => {setObj({...obj,n1:n1+1});}}>Incrementa</button>

                        <h1>numero 2 : {obj.n2}</h1>
                        <button onClick={() => {setObj({...obj,n2:n2+1});}}>Incrementa</button>
                        </>
                    );
                }
                
            `}
        </CodeSegment><br/>

        Come vediamo nell'esempio, la funzione <code>setObj</code> va a modificare completamente <code>obj</code> assegnandogli un nuovo oggetto.<br/>
        Sfruttando la notazione <code>...nomeoggetto</code>, andiamo a specificare che il nuovo oggetto sarà <code>obj</code> precedente, con un determinato valore modificato<br/>
        <code>n1</code> nel primo caso, <code>n2</code> nel secondo.<br/><br/>

        <h3>Modifica dipendente</h3>
        Inoltre c'è un metodo piu semplice e veloce per definire una funzione che modifichi solamente gli attributi interessati dell'oggetto.<br/>

        <CodeSegment language="javascript">
            {`     
                const basicComponent = () =>
                {
                    const editObj(event)
                    {
                        setObj({...obj,[event.target.id]:[event.target.id]+1});
                    }

                    const [obj,setObj] = useState({n1:0,n2:0});

                    return(
                        <>
                        <h1>numero 1 : {obj.n1}</h1>
                        <button id="n1" onClick={(event) => {editObj(event)}>Change</button>

                        <h1>numero 2 : {obj.n2}</h1>
                        <button id="n2" onClick={(event) => {editObj(event)}>Change</button>
                        </>
                    );
                }
                
            `}
        </CodeSegment><br/>

        Attraverso il parametro <code>event</code> risuciamo a risalire ai dati della Component che ha triggerato la funzione.<br/>
        Di conseguenza possiamo sfruttare le proprietà della Component per capire quale attributo si vuole modificare.<br/><br/>
        
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

