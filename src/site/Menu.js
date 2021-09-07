import React from 'react';
import logo from './assets/ReactLogo.png';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import { MdArrowDropDown, MdMenu} from "react-icons/md";
import './style.css';

//Imported object that contains the voice content from MenuVoices
import {MenuVoices} from "./data/MenuVoices";
//Imported Every Components in the MenuRoutes file that provides an Object containing all the Routes.
import {MenuRoutes} from "./data/MenuRoutes";

import ScrollToTop from "./Utils/ScrollToTop";

const Menu = () =>
{
    let {basiccomponents_subvoices,jsx_subvoices,useState_subvoices} = MenuVoices;
    return(
        <Router>
            <MenuHeader>
                    <Logo/>
                    <DropDownVoice name="Component" voices={basiccomponents_subvoices}/>
                    <DropDownVoice name="JSX" voices={jsx_subvoices}/>
                    <DropDownVoice name="useState" voices={useState_subvoices}/>
                    <MenuVoice to="/BasicComponent" name="END"/>
            </MenuHeader>
            <Content/>
        </Router>
    );
}

const Content = () => 
{
    let {components,jsx,UseState} = MenuRoutes;

    return (
                <>
                <ScrollToTop />
                        <div className="container">
                        
                            <Switch>
                                {
                                    //COMPONENTS PART OF MENU
                                    components.map((single)=>
                                    {
                                       let {path,comp} = single;
                                        return(
                                                <Route path={path}>
                                                    {comp}
                                                </Route>
                                        );
                                    })
                                }
                                 {
                                    //COMPONENTS PART OF MENU
                                    jsx.map((single)=>
                                    {
                                       let {path,comp} = single;
                                        return(
                                                <Route path={path}>
                                                    {comp}
                                                </Route>
                                        );
                                    })
                                }
                                {
                                      //COMPONENTS PART OF MENU
                                      UseState.map((single)=>
                                      {
                                         let {path,comp} = single;
                                          return(
                                                  <Route path={path}>
                                                      {comp}
                                                  </Route>
                                          );
                                      })
                                }
                            </Switch>
                        </div>
                </>
    );
};


const MenuHeader = (props) =>
{
    let {children} = props;
    return(
        <>
            <div className="d-none d-lg-block menu sticky-top">  
                <ul className="menu-ul">
                    {children}
                </ul>
            </div>
            <div className="d-block d-lg-none phone-menu">
                <MdMenu style={{width:"50px",height:"70px",color:"white",marginLeft:"20px",marginTop:"5px"}}/>
            </div>
        </>
    );
}

const Logo = () =>
{
    return(
        <>
            
            <li className="standard"><p className="menu-title"><img style={{width:"100px",marginLeft:"-20%"}} src={logo}/>React</p></li>
            <li className="menu-li separator"></li>
        </>
    );
}

const MenuVoice = (props) =>
{
    let {to,name} = props;
    return(
        <li className="menu-li"><Link className="Link" to={to}>{name}</Link></li>
    );
}

const DropDownVoice = (props) =>
{
    let {name,voices} = props;
    return(
        <li className="dropDown">
        <div className="title">
            <p> {name} <MdArrowDropDown style={{width:"15px",height:"15px"}}/></p>
            <div className="sub-menu-div">
                <ul className="sub-menu">
                    {voices.map((obj)=>{
                        let {to,name} = obj;
                       return( 
                       <li className="sub-menu-li">
                            <Link className="SubLink" to={to}>{name}</Link>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    </li>
    );
}


export default Menu;