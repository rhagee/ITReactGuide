import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <h3>Node.js</h3><br/>
        <p className="ex-font">
           Per utilizzare <strong>React</strong> è necessario disporre di <strong>Node.js</strong> sul PC, quindi per prima cosa dobbiamo installare <strong>Node.js</strong><br/><br/>

           <a href="https://nodejs.org/it/download/" target="_blank">Download Node.js</a><br/><br/>

           Sulla pagina si consiglia di installare la <strong>LTS</strong> della tipologia preferita.<br/>
           Per gli utenti <strong>Windows</strong> si consiglia di usare la versione <code>x64</code> con estensione <code>msi</code>.

           Se si è installata la versione <code>msi</code> basterà eseguire il programma, che tramite un Setup Wizard andrà ad installare <strong>Node.js</strong> sul PC.<br/><br/>
        </p>
        <h3>Editor</h3>
        <p className="ex-font">
            A questo punto installiamo l'editor che andremo da utilizzare, io consiglio di installare <strong>Visual Studio Code</strong>.<br/><br/>

            <a href="https://code.visualstudio.com/download" target="_blank">Download Visual Studio Code</a><br/><br/>

            Qui scaricare la propria versione di Visual Studio.
        </p>
       <h3>Visual Studio Extensions</h3>
       <p className="ex-font">
            Per comodità andremo ad installare alcune extensions di <strong>Visual Studio</strong> comodi per lo sviluppo in <strong>React</strong>.<br/><br/>

            Per installare un'extension, dopo aver aperto <strong>Visual Studio</strong>, premere sull'icona "Extensions" nella barra verticale sinistra.<br/>

            Fatto questo si potrà ricercare una Extension.<br/>
            Inserire : <code>Reactjs code snippets</code> , troverete varie Extension, io personalmente utilizzo quella di <code>charalampos karypidis</code> e la consiglio.<br/><br/>

            <strong>ATTENZIONE : </strong> L'estensione non è NECESSARIA allo sviluppo, ma è molto comoda in quanto con alcune parole chiave si può creare codice/effettuare import e tanto altro<br/>
            in maniera rapida e pulita.<br/><br/>
        </p>
        </>
    );
};




export default Ex;

