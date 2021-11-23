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
                import React,{useState,useEffect,useRef} from 'react';
                import {withRouter,Link} from "react-router-dom";
                import {FaUserAlt} from "react-icons/fa";
                import {IoReloadOutline} from "react-icons/io5";
                import "./style.css";


               const url = "https://api.github.com/users";

                const UseEffectFetchDataContent = () =>
                {
                    const [users,setUsers] = useState([]);
                    const getUsers = async() =>
                    {
                        const response = await fetch(url);
                        const data = await response.json();
                        setUsers(data);
                    }

                    useEffect(()=>
                    {   
                            setUsers([]);
                            getUsers();    
                    },[])

                    return(
                        <>
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
                                                <Link target="_blank" to={\`users/\${login}\`} className="profile-link"><FaUserAlt style={{marginBottom:"5px"}}/> Profile</Link>
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


                
                export default UseEffectFetchDataContent;
                `} 
            </CodeSegment>

            <h3>SCSS</h3>
            <h6>style.scss</h6>

            <CodeSegment language="css">
                {`
                .content-page
                {
                    border: 1px;
                    border-radius:5px;
                    padding-top:100px;
                    padding-bottom:100px;
                }

                .profile-line
                {
                width:95%;
                align-items: center;
                text-align: center;
                border-radius:10px;
                box-shadow : 2px 2px 10px black;
                margin: 30px 0px;
                overflow: hidden;
                }

                .profile-container
                {
                margin: 0 auto;
                width:600px;
                height:150px;
                padding: 20px;
                border : 0px;
                text-align:left;
                }

                .profile-pic
                {
                box-shadow : 5px 5px 10px gray;
                float:left;
                border-radius: 50px;
                width:100px;
                height:100px;
                margin: 0px 20px;
                }

                .profile-link
                {
                float:left;
                padding:5px 10px;
                border-radius:10px;
                text-decoration:none;
                background-color:#235cb8;
                box-shadow:1px 1px 5px black;
                color:white;
                }

                .profile-link:hover
                {
                background-color:#2f7af5;
                color:white;
                cursor: pointer;
                }

                .text {
                float: inline-block;
                background-color: #444;
                height: 12px;
                border-radius: 100px;
                margin: 5px 0;
                min-width: 100px;
                opacity: .1;
                animation: fading 1.5s infinite;
                
                &:first-child {
                    margin-top: 0;
                }
                
                &:last-child {
                    margin-bottom: 0;
                }
                
                &.logo{
                    width:100px;
                    height:100px;
                }

                &.link {
                    background-color: var(--blue);
                    opacity: .4;
                }
                
                &.line {
                    width: 100%;
                }
                
                &.category {
                    width: 100px;
                    margin-bottom: 10px;
                }
                }

                @keyframes fading {
                0% {
                    opacity: .15;
                }
                
                50% {
                    opacity: .3;
                }
                
                100% {
                    opacity: .15;
                }
                }
                `} 
            </CodeSegment>
        
        </p>
    );
};

export default Code;