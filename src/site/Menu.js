import React,{useState} from 'react';
import logo from './assets/ReactLogo.png';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import { MdArrowDropDown, MdMenu} from "react-icons/md";
import './style.css';
import GetStarted from "./GetStarted";

//Imported object that contains the voice content from MenuVoices
import {MenuVoices} from "./data/MenuVoices";
//Imported Every Components in the MenuRoutes file that provides an Object containing all the Routes.
import {MenuRoutes} from "./data/MenuRoutes";

import ScrollToTop from "./Utils/ScrollToTop";

const Menu = () =>
{
    let {start_subvoices,basiccomponents_subvoices,jsx_subvoices,useState_subvoices} = MenuVoices;
    return(
        <Router>
            <MenuHeader>
                    <Logo/>
                    <DropDownVoice name="Start" voices={start_subvoices}/>
                    <DropDownVoice name="Component" voices={basiccomponents_subvoices}/>
                    <DropDownVoice name="JSX" voices={jsx_subvoices}/>
                    <DropDownVoice name="useState" voices={useState_subvoices}/>
                    {/*<MenuVoice to="/" name="END"/>*/}
            </MenuHeader>
            <Content/>
        </Router>
    );
}

const Content = () => 
{
    let {start,components,jsx,UseState} = MenuRoutes;

    return (
                <>
                <ScrollToTop />
                        <div className="container">
                           
                            <Switch>
                            <Route exact path="/"><GetStarted/></Route>
                            {
                                    //COMPONENTS PART OF MENU
                                    start.map((single,index)=>
                                    {
                                       let {path,comp} = single;
                                        return(
                                                <Route key={index} path={path}>
                                                    {comp}
                                                </Route>
                                        );
                                    })
                                }
                                {
                                    //COMPONENTS PART OF MENU
                                    components.map((single,index)=>
                                    {
                                       let {path,comp} = single;
                                        return(
                                                <Route key={index} path={path}>
                                                    {comp}
                                                </Route>
                                        );
                                    })
                                }
                                 {
                                    //COMPONENTS PART OF MENU
                                    jsx.map((single,index)=>
                                    {
                                       let {path,comp} = single;
                                        return(
                                                <Route key={index} path={path}>
                                                    {comp}
                                                </Route>
                                        );
                                    })
                                }
                                {
                                      //COMPONENTS PART OF MENU
                                      UseState.map((single,index)=>
                                      {
                                         let {path,comp} = single;
                                          return(
                                                  <Route key={index} path={path}>
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
    const [hiddenMenu,setHiddenMenu] = useState("hidden-menu");
    return(
        <>
            <div className="d-none d-lg-block menu sticky-top">  
                <ul className="menu-ul">
                    {children}
                </ul>
            </div>
            <div className="d-block d-lg-none phone-menu sticky-top">
                <MdMenu onClick={() => {hiddenMenu=="hidden-menu" ? setHiddenMenu("hidden-menu-show") : setHiddenMenu("hidden-menu");}} style={{width:"50px",height:"70px",color:"white",marginLeft:"20px",marginTop:"5px",cursor:"pointer"}}/>
                <div className={hiddenMenu}>
                <ul className="menu-ul-vertical">
                    {children}
                </ul>
                </div>
            </div>
        </>
    );
}

const Logo = () =>
{
    return(
        <>
            <Link className="d-none d-lg-block" to="/">
                <li className="standard"><p className="menu-title"><img style={{width:"100px",marginLeft:"-20%"}} src={logo}/>React</p></li>
                <li className="menu-li separator"></li>
            </Link>
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
                    {voices.map((obj,index)=>{
                        let {to,name} = obj;
                       return( 
                       <li key={index} className="sub-menu-li">
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