import React from 'react';
import StandardContent from "./Utils/StandardContent";
import {withRouter} from "react-router-dom";


const GetStarted = () => {
    
    let explain = <Ex title="GET STARTED"/>

    return (
    <>
        <StandardContent explain={explain} code={null} page={null} multiline={false}/>
    </>
    );
};

const Ex = (props) => {
    let {title} = props;

    return (
        <>
        <center><h1 className="ex-font">{title} </h1></center>
        <br/>
        <h3>BENVENUTI</h3><br/>
        <p className="ex-font">
         Benvenuti sul primo sito guida per <strong>React</strong> completamente in Italiano, creato tramite <strong>React</strong>.<br/><br/> 
         
         Il sito è strutturato come una guida passo passo per imparare ad utilizzare il FrameWork.<br/>
         Toccheremo ogni argomento di interesse per la creazione di App semplici e Complesse in <strong>ReactJS</strong>.<br/><br/>

         Si consiglia, per i novizi, di utilizzare il sito seguendo l'ordine disposto nel menu sopra, senza balzare tra gli arogmenti.<br/><br/>

         Gli argomenti sono disposti in ordine di "lezione" da sinistra verso destra, quindi si consiglia, per chi completamente a digiuno<br/>
         da <strong>React</strong> e <strong>Javascript</strong>, di seguire in ordine le varie voci.<br/><br/>

         Speriamo di poter implementare un Forum in cui discutere degli argomenti ed in cui consigliarne di nuovi da aggiungere alla guida in italiano.<br/><br/>

         Si spera inoltre un giorno di riuscire ad integrare ogni guida con una video lezione riguardante ogni singolo argomento.<br/><br/>


        </p>

        <center><h1>BUON CODING!</h1></center>
        </>
    );
};


export default withRouter(GetStarted); 