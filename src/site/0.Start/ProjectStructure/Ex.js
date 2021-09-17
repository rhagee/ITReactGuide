import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <h3>Progetto "Blank"</h3><br/>
        <p className="ex-font">
           Andiamo a vedere come è strutturato il progetto che viene creato all'esecuzione del comando :<br/><br/>

           <i>npx create-react-app {`nome_app`}</i><br/><br/>

           Il progetto che verrà creato sarà blank è la struttura delle cartelle avrà : <br/><br/>

           - <strong>node_modules</strong> : In cui saranno presenti tutti gli import di librerie installate per il progetto<br/>
           - <strong>public</strong> : In cui sono presenti il manifest e un'index.html<br/>
           - <strong>index.js</strong> : L'effettivo file che viene "aperto" all'apertura del nostro sito (al suo interno ha un riferimento ad App.js)<br/>
           - <strong>App.js</strong> : L'effettiva "Applicazione",  sarà questo il file da andare a modificare per iniziare a creare la nostra Web App<br/>
           - <strong>Altro</strong> : Altri file di secondaria importanza, utili solo in alcune circostanze.

           <br/>

           Ricordiamoci quindi che, di solito, non andremo a toccare <strong>Niente</strong> se non il file <strong>App.js</strong>.<br/><br/>
           
           Nell'albero del File System, allo stesso livello di <strong>App.js</strong> possiamo andare a creare file javascript e directory a piacimento<br/>
           per iniziare a strutturare il progetto.<br/>
        </p>
        </>
    );
};




export default Ex;

