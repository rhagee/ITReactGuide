import BasicComponent from '../1.Components/BasicComponent/BasicComponent';
import MultiComponent from '../1.Components/MultiComponent/MultiComponent';
import Props from '../1.Components/Props/Props';
import List from '../1.Components/List/List';
import Event from '../1.Components/Event/Event';

import JSXVariables from '../2.JSX/Variables/JSXVariables';
import JSXArray from '../2.JSX/Array/JSXArray';
import JSXObject from '../2.JSX/Object/JSXObject';
import JSXStyling from '../2.JSX/Styling/JSXStyling';


import UseStateBasics from '../3.useState/Basics/UseStateBasics';
import UseStateArray from '../3.useState/Array/UseStateArray';
import UseStateObject from '../3.useState/Object/UseStateObject';
import MultipleStateValue from '../3.useState/MultipleStateValue/MultipleStateValue';

export const MenuRoutes = 
{
    components:
    [
        {
            path:"/Components/BasicComponent",
            comp:<BasicComponent/>
        },
        {
            path:"/Components/MultiComponent",
            comp:<MultiComponent/>
        },
        {
            path:"/Components/Props",
            comp:<Props/>
        },
        {
            path:"/Components/List",
            comp:<List/>
        },
        {
            path:"/Components/Event",
            comp:<Event/>
        },
    ],
    jsx:
    [
        {
            path:"/JSX/Variables",
            comp:<JSXVariables/>
        },
        {
            path: "/JSX/Object",
            comp: <JSXObject/>
        },
        {
            path:"/JSX/Array",
            comp: <JSXArray/>
        },
        {
            path: "/JSX/Styling",
            comp: <JSXStyling/>
        }
    ],
    UseState:
    [
        {
            path:"/useState/Basics",
            comp:<UseStateBasics/>
        },
        {
            path: "/useState/Object",
            comp: <UseStateObject/>
        },
        {
            path:"/useState/Array",
            comp: <UseStateArray/>
        },
        {
            path: "/useState/MultipleStateValue",
            comp: <MultipleStateValue/>
        }
    ]
   
};
