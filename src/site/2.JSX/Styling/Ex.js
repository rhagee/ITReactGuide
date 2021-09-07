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
        <h3>HTML Styling</h3>
        Di solito in HTML lo stile delle Componenti viene definito tramite il parametro <code>style</code> a cui si assegna una stringa contenente codice CSS.<br/>
        Oppure si utilizza il parametro <code>class</code> a cui si assegna, sempre tramite stringa, il nome della classe del file CSS importato.<br/><br/>
        
        Si ricorda che al parametro <code>class</code> si assegna una stringa con 1 o piu nomi di classi contenute nel file CSS separate da uno spazio<br/>
        per assegnare piu stili in contemporanea.<br/>

        <CodeSegment language="javascript">
            {`     
                <div style="border: 1px solid black;width:200px;heigth:200px">
                    <div class="sub-div bg-red">
                        <p>Lore Ipsum</p>
                    </div>
                </div>
            `}
        </CodeSegment><br/>

        <h3>React Styling</h3>

        Al contrario in React queste proprietà vengono gestite in maniera differente.<br/><br/>

        <h4>Style</h4>
      

        Il parametro <code>style</code> al posto di contenere una stringa, deve contenere un oggetto, inoltre in questo caso anche il nome degli attributi soliti di CSS cambiano.<br/><br/>

        Invece di usare il <strong>kebab-case</strong>, ovvero ad esempio <code>background-color</code>, si utilizza il <strong>camelCase</strong>, ovvero ad esempio <code>backgroundColor</code><br/><br/>

        Un esempio : <br/>

        <CodeSegment language="javascript">
            {` 
                const randomComponent = () =>
                {
                    return(

                    <div style={{border: "1px solid black",width:"200px",heigth:"200px",backgroundColor:"green"}}>
                            <p>Lore Ipsum</p>
                    </div>

                    );
                }
            `}
        </CodeSegment><br/>
        <center>Oppure</center><br/>
        <CodeSegment language="javascript">
            {`
               const divstyle = 
               {
                border: "1px solid black",
                width:"200px",
                heigth:"200px",
                backgroundColor:"green"
               }
            
               const randomComponent = () =>
                {
                    return(

                    <div style={divstyle}>
                            <p>Lore Ipsum</p>
                    </div>
                    
                    );
                }
            `}
        </CodeSegment><br/>

        Come appunto nell'esempio, la proprietà <code>style</code> viene impostata come un oggetto.<br/><br/>
        
        <h4>className</h4>

        Al post del parametro <code>class</code> si usa il parametro <code>className</code> che però funzionerà esattamente come il parametro <code>class</code> in HTML.<br/><br/>

        Un esempio : <br/>
        <CodeSegment language="javascript">
            {`
               const randomComponent = () =>
                {
                    return(

                    <div className="div-style div-border-style">
                            <p>Lore Ipsum</p>
                    </div>
                    
                    );
                }
            `}
        </CodeSegment><br/>

        Quindi nulla di particolarmente diverso dall'HTML.<br/><br/>
        
        Il tag <code>class</code> può essere utilizzato in React, ma verrano segnalati dei Warning in compilazione.<br/><br/>

        Di seguito un esempio.
        </p>
        </>
    );
};


export default Ex;

