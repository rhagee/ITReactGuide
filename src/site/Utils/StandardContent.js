import React from 'react';
import CenterShadowBox from './CenterShadowBox';

const StandardContent = (props) => {

    let {explain,code,page,multiline} = props;

    if(!multiline)
    {
        return (
            <div className="sub-container">
            <div className="row" style={{width:"75%"}}>
        <CenterShadowBox>
            {explain}
        </CenterShadowBox> 
        </div>
        <div className="row" style={{width:"75%"}}>
            <div className="col"><center><h1>Codice:</h1></center></div>
            <div className="col"><center><h1>Pagina:</h1></center></div>
        <div class="w-100"></div>
            <CenterShadowBox>
                    {code}
            </CenterShadowBox>
            <CenterShadowBox>
                <center>
                    {page}
                </center>
            </CenterShadowBox>
        </div>
    </div>
        );
    }
    else
    {
        return (
            <div className="sub-container">
            <div className="row" style={{width:"75%"}}>
        <CenterShadowBox>
            {explain}
        </CenterShadowBox> 
        </div>
        <div className="row" style={{width:"75%"}}>
            <div className="col"><center><h1>Codice:</h1></center></div>
            <div className="width-100"/>
            <CenterShadowBox>
                    {code}
            </CenterShadowBox>
            <div className="width-100"/>
            <div className="col"><center><h1>Pagina:</h1></center></div>
            <div className="width-100"/>
            <CenterShadowBox>
                <center>
                    {page}
                </center>
            </CenterShadowBox>
        </div>
    </div>
        );
    }
};

export default StandardContent;