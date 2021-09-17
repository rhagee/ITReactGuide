import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <h3>Import</h3><br/>
        <p className="ex-font">
          Come per ogni linguaggio e framework, qui in React abbiamo un modo specifico per importare tipi diversi di file,<br/>
          in linea di massima abbiamo 3 tipi di Import:<br/><br/>
          
          <strong>1</strong> - Libreria<br/>
          <strong>2</strong> - File System<br/>
          <strong>3</strong> - Stylesheet<br/><br/>
        </p>
        <h6>Import di Libreria</h6><br/>
        <p className="ex-font">
          Partiamo dagli import di <strong>Libreria</strong>, innanzitutto questo genere di import va fatto dopo aver "Installato" la libreria nelle dipendenze del proprio progetto.<br/>
          Quando abbiamo bisogno di una libreria, basterà posizionarsi da <strong>Console</strong> all'interno della cartella dell'intero progetto, e poi scrivere il comando : <br/><br/>

          <i>npm install {`<nome_libreria>`};</i><br/><br/>

          Fatto questo possiamo andare ad importare le componenti della libreria ovunque.<br/><br/>

          Per quanto riguarda gli <strong>Default Export</strong> possiamo andare ad importare in questo modo : <br/><br/>

          <i><code>import</code> {`<NomeComponent>`} <code>from</code> '{`<nome_libreria>`};</i><br/><br/>
          </p>
          <h6>Import da File System</h6><br/>
          <p className="ex-font">
          Mentre per quanto riguarda gli <strong>Export</strong> normali e le variabili usiamo : <br/><br/>

          <i><code>import</code> {`{NomeVar1,NomeVar2,NomeComp1}`} <code>from</code> '{`<nome_libreria>`};</i><br/><br/>
        
        La parte "iniziale" dell'import fino a <code>from</code> funziona così anche negli import da <strong>File System</strong>, la differenza sostanizale sta che<br/>
        dopo il <code>from</code> bisogna andare ad inserire : <i>"./path/al/file/da/importare"</i><br/>
        Quindi ad esempio : <br/><br/>

        <i><code>import</code>  {`NomeComponent,{NomeVar1,NomeVar2}`}  <code>from</code> "./path/al/file/da/importare";</i><br/><br/>
        </p> 
        <h6>Import di Stylesheet</h6>
        <p className="ex-font">
        Mentre per quanto riguarda gli import di <strong>Stylesheet</strong> basterà scrivere : <br/><br/>

        <i><code>import</code>  "./path/allo/stylesheet.css";</i><br/><br/>
        </p> 
        <h3>Export</h3>
        <p className="ex-font">
            Come accennato precedentemente esistono 2 tipi di Export:<br/><br/>

            <strong>1</strong> - Export <br/>
            <strong>2</strong> - Default Export<br/><br/>
        </p>
        <h6>Export</h6>
        <p className="ex-font">
        Per fare in modo di poter <strong>importare</strong> una qualsiasi Component/Variabile da un file Javascript ad un altro<br/>
        è obbligatorio fare in modo che questa sia Esportata, quindi ad esempio : <br/>

        <CodeSegment language="javascript">
            {`     
                export const randomComponent = () =>
                {
                    return(
                        <>
                            <h1>Titolo</h1>
                            <p> Lore Ipsum Lore Ipsum Lore Ipsum </p>
                        </>
                    )
                }

                export let var=
                {
                    nome : "Valentino",
                    cognome : "Rossi"
                }
            `}
        </CodeSegment><br/>

        In questo modo sia la Component che la Variabile potranno essere <strong>importate</strong> dall'esterno, tramite la notazione descritta sopra per gli <strong>Export</strong> normali.<br/><br/>
        </p>
        <h6>Default Export</h6>
        <p className="ex-font">
        Invece per quanto riguarda il <strong>Default Export</strong>, se ne può avere 1 solo per File.<br/> 
        Di conseguenza andiamo a definirlo come segue : <br/>

        <CodeSegment language="javascript">
            {`   
            
                const BigComponent = () =>
                {
                    return(
                        <>
                                <h1>Persona</h1>
                                {var.nome}<br/>
                                {var.cognome}<br/>
                                <RandomComponent/>
                        </>
                    )
                }
                const RandomComponent = () =>
                {
                    return(
                        <>
                            <h1>Titolo</h1>
                            <p> Lore Ipsum Lore Ipsum Lore Ipsum </p>
                        </>
                    )
                }

                let var=
                {
                    nome : "Valentino",
                    cognome : "Rossi"
                }

                default export BigComponent;
            `}
        </CodeSegment><br/>

        In questo modo possiamo andare ad <strong>importare</strong> come definito sopra per quanto riguarda il <strong>Default Export</strong>.<br/>
        </p>
        </>
    );
};




export default Ex;

