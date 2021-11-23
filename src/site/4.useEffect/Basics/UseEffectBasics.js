import React,{useState,useEffect} from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";
import {withRouter} from "react-router-dom";
import {FaRegThumbsUp,FaAngleRight} from "react-icons/fa";
import {IoReloadOutline} from "react-icons/io5";
import "./style.scss";

const UseEffectBasics = () => 
{
    let explain = <Ex title="useEffect BASICS"/>
    let code = <Code/>
    let page = <UseEffectBasicsContent/>

    return(
        <>
            <StandardContent explain={explain} code={code} page={page} multiline={false}/>
        </>
    );
};






const UseEffectBasicsContent = () =>
{
    const likeArrayDefault = 
    [
        0,
        0,
        0,
        0
    ];

    const texts = 
    [
        "Questo è il testo, magari caricato da un database esterno, o da qualche asset di dati non locale, di conseguenza è possibile che debba essere caricato e ci vada un po' di tempo.",
        "Quindi magari potremmo renderizzare tutta la pagina con dei 'placeholder' al posto dei dati da caricare, che verranno poi caricati da useEffect!",
        "In ogni caso però ci possono essere alcune variabili che utilizzano useState che non vogliamo 'triggerino' la funzione useEffect, quindi specifichiamo quelle che devono triggerare useEffect nei parametri",
        "In questo modo se viene ricaricata la pagina useEffect esegue 1 volta, mentre se viene modificata una variabile che non deve 'triggerare' useEffect questo non eseguirà"
    ];

    const [index,setIndex] = useState(0);
    const [text,setText] = useState("");
    const [likeArray,setLikeArray] = useState(likeArrayDefault);
    const [reload,setReload] = useState(true);

    useEffect(() => 
    {
        if(reload==true)
        {
            setIndex(0);
            setLikeArray(likeArrayDefault);
            setReload(false);
        }
      
        setText("");

        let timeout = setTimeout(function() 
        {
                setText(texts[index]);
        }, 1000);

    },[index,reload]);

    return(
        <>
            <button className="reload-btn" onClick={() => {setReload(true)}}><IoReloadOutline/></button>
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



export default withRouter(UseEffectBasics);