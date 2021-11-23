import React,{useState,useEffect,useRef} from 'react';
import Ex from './Ex';
import Code from './Code';
import StandardContent from "../../Utils/StandardContent";
import {withRouter,Link} from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
import {IoReloadOutline} from "react-icons/io5";
import "./style.scss";

const UseEffectFetchData = () => 
{
    let explain = <Ex title="useEffect CLEAN UP"/>
    let code = <Code/>
    let page = <UseEffectFetchDataContent/>

    return(
        <>
            <StandardContent explain={explain} code={code} page={page} multiline={true}/>
        </>
    );
};

const url = "https://api.github.com/users";

const UseEffectFetchDataContent = () =>
{
    const [users,setUsers] = useState([]);
    const [reload,setReload] = useState(true);
    const [time,setTime] = useState(0);
    const getUsers = async() =>
    {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
        setReload(false);
    }

    useEffect(()=>
    {   
        if(reload)
            setUsers([]); 

        let timeout = setTimeout(function() 
        {
                getUsers();    
        }, time);
            

        return () => 
        {
            clearTimeout(timeout);
        }
    },[reload])

    return(
        <>
        <span>
            <button className="reload-btn" onClick={() => {setReload(true)}}><IoReloadOutline/></button>
            <p className="time-input-label">Time Delay (ms) : </p><input type="number" className="time-input" defaultValue={time} onBlur={e => setTime(e.target.value)}/>
        </span>
        <div className="content-page shadow-lg">
            <h1>Profiles</h1>
                {
                users.length>0 ? 
                users.map(obj => 
                {
                    let {avatar_url,login} = obj;
                    return(
                        <>
                        <div className="profile-line">
                        <div className="profile-container">
                            <img className="profile-pic" src={avatar_url}></img>
                            <div>
                                <h1>{login}</h1>
                                <Link target="_blank" to={`users/${login}`} className="profile-link"><FaUserAlt style={{marginBottom:"5px"}}/> Profile</Link>
                            </div>
                        </div>
                        </div>
                        </>
                    );
                }) 
                : 
                    [...Array(10)].map(()=>
                    {
                        return(
                            
                            <div className="profile-line">
                                <div className="profile-container">
                                    <LoadingText/>
                                </div>
                            </div>
                
                        );
                    }   
                    )
                }
            </div>
        </>
    );
}

const LoadingText = () =>
{
    return (
    <>
            <div className="text logo"/>
            <div className="text line"/>
            <div className="text line"/>
            <div className="text "/>

    </>
    );
}

export default UseEffectFetchData;