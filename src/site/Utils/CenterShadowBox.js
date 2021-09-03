import React from 'react';

const CenterShadowBox = (props) => {
    let {children,col} = props;

    if(col==null || col==="")
    {
        col = "col";
    }

    let cls = "explain-container rounded shadow-lg "+col;
    
    return (
        <div className={cls}>
            {children}
        </div>
    );
};

export default CenterShadowBox;