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
                import React,{useState} from 'react';
                import "./style.css";


                const UseStateBasicsContent = () =>
                {
                    const addFunction = () =>
                    {
                        setCont(cont+1);
                    }
                
                    const [cont,setCont] = useState(0);
                    return(
                        <>
                            <h1>{cont}</h1>
                            <button className="reset-btn"  onClick={() => {setCont(0);}}>Reset</button>
                            <button className="counter-btn"  onClick={addFunction}>ADD</button>
                        </>
                    );
                }
                
                export default UseStateBasicsContent;
                `} 
            </CodeSegment>

            <h3>CSS</h3>
            <h6>style.css</h6>

            <CodeSegment language="css">
                {`
                 .counter-btn
                 {
                     border-radius:5px;
                     background-color:#518fe0;
                     box-shadow:5px 5px 30px black;
                     width:100px;
                     height:50px;
                     margin:20px 20px;
                     border:0px;
                     color:white;
                 }
                 
                 .counter-btn:hover
                 {
                     background-color:#2b62ab;
                 }
                 
                 .reset-btn
                 {
                     border-radius:5px;
                     background-color:#b4b5b8;
                     box-shadow:5px 5px 30px black;
                     width:100px;
                     height:50px;
                     margin:20px 20px;
                     border:0px;
                     color:black;
                 }
                 
                 .reset-btn:hover
                 {
                     background-color:#7c7d80;
                     color : white;
                 }
                `} 
            </CodeSegment>
        
        </p>
    );
};

export default Code;