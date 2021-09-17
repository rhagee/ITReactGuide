import React,{useContext} from 'react';
import CenterShadowBox from './CenterShadowBox';

const ParamContext = React.createContext();

const StandardContent = (props) => {

    let {explain,code,page,multiline} = props;

    if(!multiline)
    {
        return (
        <div className="sub-container">
            <div className="d-none d-lg-flex row" style={{width:"75%"}}>
                <CenterShadowBox>
                    {explain}
                </CenterShadowBox> 
            </div>
            <div className="d-flex d-lg-none row" style={{width:"100%"}}>
                <CenterShadowBox>
                    {explain}
                </CenterShadowBox> 
            </div>

            {explain && code ? 
           <ParamContext.Provider value={{page,code}}>

            {/*Monitor XL size*/}
            <div className="row d-none d-xl-flex" style={{width:"75%"}}>
                <InInLine/>
            </div>
            
            {/*Monitor L,M,S,XS size*/}
            <div className="row d-flex d-xl-none" style={{width:"100%"}}>
                <InNewLine/>
            </div>
            
            </ParamContext.Provider>
            : 
            null}
            
        </div>
        );
    }
    else
    {
        return (
        <div className="sub-container">
            <div className="d-none d-lg-flex row" style={{width:"75%"}}>
                <CenterShadowBox>
                    {explain}
                </CenterShadowBox> 
            </div>
            <div className="d-flex d-lg-nonerow" style={{width:"100%"}}>
                <CenterShadowBox>
                    {explain}
                </CenterShadowBox> 
            </div>
            {explain && code ? 
             <ParamContext.Provider value={{page,code}}>
                <InNewLine/>
            </ParamContext.Provider>
            : null}
        </div>
        );
    }
};

const InInLine = () =>
{
    const {code,page} = useContext(ParamContext);
    return(
        <>
        
                <div className="col"><center><h1>Codice</h1></center></div>
                <div className="col"><center><h1>Pagina</h1></center></div>
                    <div className="w-100"></div>
                <CenterShadowBox>
                    {code}
                </CenterShadowBox>
                <CenterShadowBox>
                    <center>
                        {page}
                    </center>
                </CenterShadowBox>
            </>
    );
}
const InNewLine = () => 
{
    const {code,page} = useContext(ParamContext);
    return(
        <>
            
            <div className="col"><center><h1>Codice</h1></center></div>
            <div className="w-100"></div>
            <CenterShadowBox>
                {code}
            </CenterShadowBox>
            <div className="w-100"></div>
            <div className="col"><center><h1>Pagina</h1></center></div>
            <div className="w-100"></div>
            <CenterShadowBox>
                <center>
                    {page}
                </center>
            </CenterShadowBox>
    </>
    );
}

export default StandardContent;