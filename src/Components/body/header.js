import React from "react";
import search_icon from "../../assets/Images/UI images/search_icon.png"; 
import styles from "../../assets/Styles/header/header_styles.css"
import prev_btn_img from "../../assets/Images/UI images/prev.png"; 
import next_btn_img from "../../assets/Images/UI images/next.png"; 
import recommended_topics from "./recommend_topics_api"
import { useState } from "react/cjs/react.development";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import youtube_logo from "../../assets/Images/UI images/youtube_logo.png"; 

function prev_topics(topics,set_topics){
    let first_place; 
    for(let i=0;i<recommended_topics.length;i++){
        if(topics[0] == recommended_topics[i]){
            first_place = i; 
        }
    }

    let arr; 
    if(first_place == 3){
        arr = recommended_topics.slice(0,3);  
    }else if(first_place == 6){
        arr = recommended_topics.slice(3,6);  
    }else{
        arr = topics; 
    }
    set_topics(arr); 
}

function next_topics(topics,set_topics){
    let first_place; 
    for(let i=0;i<recommended_topics.length;i++){
        if(topics[0] == recommended_topics[i]){
            first_place = i;
            break;  
        } 
    }
    console.log(first_place); 

    let arr; 
    if(first_place == 3){
        arr = recommended_topics.slice(6,9); 
    }else if(first_place == 0){
        arr = recommended_topics.slice(3,6); 
    }else{
        arr = topics; 
    }
    set_topics(arr); 
}


const Header=()=>{
    const [topics,set_topics] = useState(recommended_topics.slice(0,3));

    return(
        <>

            <div className="searching-div">
                <img className="yt-logo-img" src={youtube_logo}></img>
                <input placeholder="Search" className="search-box"></input>
                <button className="search-btn"><img className="search-icon-img" src={search_icon}></img></button>
               
            </div>

            <div className="recommended-topics">
                <button  onClick={()=>{
                            prev_topics(topics,set_topics) 
                        }} className="recommended-topic" id="prev-nav-btn" className="nav-btns"> <img className="nav-btn-imgs" src={prev_btn_img}></img> </button>
                {topics.map((e)=>{ 
                    return(
                        <button className = "recommended-topic-btn"> {e} </button>
                    )
                })}
                <button onClick={()=>{next_topics(topics,set_topics)}} id="next-nav-btn" className="nav-btns"> <img className="nav-btn-imgs" src={next_btn_img}></img> </button>
            </div>
        

        </>
    )
}

export default Header

