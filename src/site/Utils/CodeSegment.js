import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {stackoverflowDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Button} from 'react-bootstrap';
import {MdContentCopy} from "react-icons/md";

const CodeSegment = (props) =>
{
    let {children,language} = props;
    return (
            <>
            <br/>
            <div style={{zIndex:"1",position:"absolute",display:"inline-block",paddingTop:"10px",paddingLeft:"10px"}}>
                <Button variant="outline-light" onClick={() => { navigator.clipboard.writeText(children) }}><MdContentCopy/>
                </Button>
            </div>
            <SyntaxHighlighter language={language} style={stackoverflowDark}>
                {children}
            </SyntaxHighlighter>
            <br/>
            </>
    );
}

export default CodeSegment;