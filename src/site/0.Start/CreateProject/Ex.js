import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <h3>Creare un'App React</h3><br/>
        <p className="ex-font">
           E' arrivato il momento di creare la nostra prima <strong>React App</strong>.<br/><br/>

           Per prima cosa creiamo una directory in cui vorremmo tenere tutti i nostri progetti in <strong>React</strong><br/>
           dopodichè apriamo <strong>Visual Studio Code</strong> e apriamo la directory precedentemente creata facendo :<br/><br/>
           
           <i>{`File->Open Folder`}</i><br/><br/>
           
            E selezionando la directory per i progetti React creata in precedenza.<br/><br/>

           Ora nella barra dei menù dell'editor andiamo su : <br/><br/>
           <i>{`Terminal -> New Terminal`}</i><br/><br/>

           A questo punto in basso avremo una console che avrà come directory la directory selezionata, qui andiamo a digitare : <br/><br/>
           
           <i>-     npx create-react-app {`<AppName>`}</i><br/><br/>

           ed al posto di <strong>{`<AppName>`}</strong> scrivere il nome che si vuole dare alla nostra App.<br/><br/>
        </p>
        <h3>Eseguire l'App</h3><br/>
        <p className="ex-font">
           Fatto questo attendere la creazione dell'App.<br/>
           Una volta terminata scrivere : <br/><br/>

           <i>-     cd {`<AppName>`}</i><br/>
           <i>-     npm start</i><br/><br/>

           A questo punto si aprirà una finestra browser di <strong>Google Chrome</strong> e avremo la nostra pagina di <strong>Default</strong> di React.<br/>
           L'indirizzo base dell'App mentre è in modalità "Run" nella console di <strong>Visual Studio Code</strong> è : <i>localhost:3000</i><br/><br/>
           
           A questo punto se si intende operare ancora da console conviene aprire un nuovo terminale, dato che questo sarà impegnato nell'esecuzione dell'App.<br/>

        </p>
        </>
    );
};




export default Ex;

