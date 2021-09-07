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
                    import React from 'react';
                    import './style.css';

                    const JSXStylingContent = () =>
                    {
                        const rightSubDiv = 
                        {
                            margin:"0px",
                            backgroundColor:"pink",
                            height:"100px",
                            borderRadius:"10px",
                            paddingRight:"5px",
                            paddingLeft:"5px"
                        };

                        return(
                            <>
                                <div className="container">
                                    <div className="left-part">
                                        <div style={{margin:"0px",backgroundColor:"lightblue",height:"100px",borderRadius:"10px", paddingRight:"5px",paddingLeft:"5px"}}>
                                            <h1>Sinistra</h1>
                                        </div>
                                    </div>
                                    <div className="right-part">
                                        <div style={rightSubDiv}>
                                            <h1>Destra</h1>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    }
                    
                    export default JSXStylingContent;
                `} 
            </CodeSegment>

            <h3>CSS</h3>
            <h6>style.css</h6>
             <CodeSegment language="css">
                {`
                    .container
                    {
                        display:inline-block;
                        width:100%;
                    }
                    
                    .left-part
                    {
                        border-radius:10px;
                        border: 1px solid blue;
                        float:left;
                    }
                    
                    .right-part
                    {
                        border-radius:10px;
                        border: 1px solid red;
                        float:right;
                    }
                `} 
            </CodeSegment>
        </p>
    );
};

export default Code;