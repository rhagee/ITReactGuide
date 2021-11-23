import React from 'react';
import CodeSegment from './../../Utils/CodeSegment';

const Code = () => {
    return (
        <p>
            {/*<center><h1>Codice: </h1></center>
            <br/>*/}
             <h3>Javascript</h3>
             <CodeSegment language="javascript">
                {`
                import React,{useState,useEffect} from 'react';
                import {FaRegThumbsUp,FaAngleRight} from "react-icons/fa";
                import {IoReloadOutline} from "react-icons/io5";
                import "./style.scss";

                const UseEffectBasicsContent = () =>
                {
                    const likeArrayDefault = [
                        0,0,0,0
                    ];

                    const texts = [
                        "Questo è il testo, magari caricato da un database esterno, o da qualche asset di dati non locale, di conseguenza è possibile che debba essere caricato e ci vada un po' di tempo.",
                        "Quindi magari potremmo renderizzare tutta la pagina con dei 'placeholder' al posto dei dati da caricare, che verranno poi caricati da useEffect!",
                        "In ogni caso però ci possono essere alcune variabili che utilizzano useState che non vogliamo 'triggerino' la funzione useEffect, quindi specifichiamo quelle che devono triggerare useEffect nei parametri",
                        "In questo modo se viene ricaricata la pagina useEffect esegue 1 volta, mentre se viene modificata una variabile che non deve 'triggerare' useEffect questo non eseguirà"
                    ];

                    const [index,setIndex] = useState(0);
                    const [text,setText] = useState("");
                    const [likeArray,setLikeArray] = useState(likeArrayDefault);

                    useEffect(() => 
                    {
                        setText("");
                        
                        //Timer per simulare l'esecuzione di una query che impiega 2 secondi a dare la risposta
                        let timeout = setTimeout(function() 
                        {
                            setText(texts[index]);
                        }, 2000);
                        
                    },[index]);

                    return(
                        <>
                            <div className="content-page shadow-lg">
                                <h1>Testo n°{index+1}</h1>
                                <p style={{paddingLeft:"20px",paddingRight:"20px"}}>{text || <LoadingText/>}</p>
                                <span style={{fontSize:"25px"}}>{likeArray[index]} </span><FaRegThumbsUp style={{size : "30px",marginBottom:"10px"}}/>
                                <br/>
                                <button className="like-btn" onClick={() => {let arr = likeArray; arr[index]=arr[index]+1; setLikeArray([...arr]);}}><FaRegThumbsUp/></button>
                                <span><button className="next-btn" onClick={() => {setIndex((index+1)%4); setText("");}}><FaAngleRight/></button></span>    
                            </div>  
                        </>
                    );
                }

                const LoadingText = () =>
                {
                    return (
                    <>
                        <div className="text line"/>
                        <div className="text line"/>
                        <div className="text line"/>
                        <div className="text"/>
                    </>
                    );
                }

                
                export default UseEffectBasicsConent;
                `} 
            </CodeSegment>

            <h3>SCSS</h3>
            <h6>style.scss</h6>

            <CodeSegment language="css">
                {`

                .like-btn
                {
                    border-radius:5px;
                    background-color:#40ab2b;
                    box-shadow:5px 5px 30px black;
                    padding : 10px 20px;
                    margin:20px 20px;
                    border:0px;
                    color:white;
                }
                
                .like-btn:hover
                {
                    background-color:#9de051;
                    color : black;
                    
                }
                
                .next-btn
                {
                    
                    border-radius:5px;
                    background-color:#2b62ab;
                    box-shadow:2px 2px 10px black;
                    padding : 10px 20px;
                    margin:20px 20px;
                    border:0px;
                    color:white;
                }
                
                .next-btn:hover
                {
                    background-color:#518fe0;
                    color : black;
                }
                
                .content-page
                {
                    border: 1px;
                    border-radius:5px;
                    padding-top:100px;
                    padding-bottom:100px;
                }
                
                
                .text {
                    display: inline-block;
                    background-color: #444;
                    height: 12px;
                    border-radius: 100px;
                    margin: 5px 0;
                    min-width: 100px;
                    opacity: .1;
                    animation: fading 1.5s infinite;
                    
                    &:first-child {
                      margin-top: 0;
                    }
                    
                    &:last-child {
                      margin-bottom: 0;
                    }
                    
                    &.link {
                      background-color: var(--blue);
                      opacity: .4;
                    }
                    
                    &.line {
                      width: 100%;
                    }
                    
                    &.category {
                      width: 100px;
                      margin-bottom: 10px;
                    }
                  }
                
                  @keyframes fading {
                    0% {
                      opacity: .15;
                    }
                    
                    50% {
                      opacity: .3;
                    }
                    
                    100% {
                      opacity: .15;
                    }
                  }
                `} 
            </CodeSegment>
        
        </p>
    );
};

export default Code;