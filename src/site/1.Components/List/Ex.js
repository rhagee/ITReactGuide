import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Ex = (props) => {
    let {title} = props;
    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <p className="ex-font">
            <br/>
            <Warn>
                <p>In questa spiegaizone sono presenti elementi da conoscere spiegati in <strong>JSX</strong>,<br/>
                se ci si trova in difficoltà con alcune parti del codice<br/>
                è conveniente prima consultare quella sezione!
                </p>
            </Warn><br/><br/>
            
            <h3>Creazione Lista</h3><br/>
            Per renderizzare una lista in React è necessario andare ad inserire del codice Javascript all'interno del <strong>return</strong> della Component.<br/><br/>
            Si utilizza la funzione di <code>map</code> per renderizzare una lista a video.<br/>
            Andiamo a vedere nello specifico, supponendo di avere una lista di Stringhe, come andrà scritto il codice : <br/>
            <CodeSegment language="javascript">
            {`
                    const ListRendering = () =>
                    {
                        let list=
                        [
                           "Title1","Title2","Title3","Title4"
                        ];
                        return(
                            <>
                            {
                                list.map((value)=>
                                {
                                    return(
                                        <h1>{value}</h1>
                                    );
                                })
                            }
                            </>
                        );
                    }
                `}     
            </CodeSegment><br/>
            In questo caso la funzione <code>map</code> applicata alla lista <code>list</code> andrà a prendere come parametro una funzione<br/>
            quest'ultima prende come parametro una variabile che sarà quella contenente ogni <strong>SINGOLO</strong> elemento della lista.<br/><br/>

            Un po' come se la funzione <code>map</code> andasse ad effettuare un <code>for each</code>, dove il singolo elemento si chiama come il parametro<br/>
            passato alla funzione.<br/><br/>

            Vediamo ad esempio che in questo caso la funzione prende come parametro <code>value</code>.<br/>
            Quindi ad ogni "iterazione" del <code>map</code> sulla lista <code>list</code> il parametro <code>value</code> conterrà una stringa della lista.<br/><br/>

            A questo punto non ci resta che riempire la funzione passata come parametro a <code>map</code>. Questa funzione dovrà semplicemente decidere con che tipo di<br/>
            Fragment andrà a ritornare ogni elemento della lista.<br/><br/>

            Quindi andiamo ad effettuare un <code>return</code> di un <strong>Fragment</strong> che dovrà in qualche modo contenere il <code>value</code> che vogliamo mostrare,
            ricordandoci che per ogni elemento della lista verrà ritornato un <strong>Fragment</strong> di questo tipo.<br/><br/>

            Possiamo quindi andare ad effettuare operazioni piu complesse, sfruttando <strong>liste di oggetti</strong>, <strong>destrutturandole</strong>, e riportandole nella schermata.<br/><br/>
            
            In questo caso però abbiamo delle "complicazioni", nel caso in cui volessimo destrutturare un oggetto di una lista attraverso il <code>map</code> saremo "obbligati" ad aggiungere<br/>
            un <code>id</code> univoco per ogni oggetto della lista, ed associarlo ad un attributo <code>key</code> nel Fragment che conterrà il nostro oggetto.<br/><br/>
            Esempio:<br/>

            <CodeSegment language="javascript">
            {`
                    const ListRendering = () =>
                    {
                        let list=
                        [
                           {
                                id:0,
                                prodotto:"Latte",
                                quantita:50
                           },
                           {
                                id:1,
                                prodotto:"Acqua",
                                quantita:300
                           },
                           {
                                id:2,
                                prodotto:"Pasta",
                                quantita:100
                           }
                        ];
                        return(
                            <>
                            {
                                list.map((value)=>
                                {
                                    let {id,prodotto,quantita} = value;
                                    return(
                                       <div className="row" key={id}>
                                            <h1>{prodotto}</h1>
                                            <h6>{quantita}</h6>
                                        </div>
                                       </>
                                    );
                                })
                            }
                            </>
                        );
                    }
                `}     
            </CodeSegment><br/>

            Questa <code>key</code> sarà utile nel momento in cui decideremo di effettuare delle operazioni sulla lista, quali rimozione o aggiunta di elementi (Argomenti che tratteremo piu avanti).<br/><br/>
            
            Di seguito troviamo un esempio.
            
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