import React from "react";
import search_icon from "../../assets/Images/UI images/search_icon.png"; 
import styles from "../../assets/Styles/header/header_styles.css"
import prev_btn_img from "../../assets/Images/UI images/prev.png"; 
import next_btn_img from "../../assets/Images/UI images/next.png"; 
import recommended_topics from "./recommend_topics_api"
import { useState } from "react/cjs/react.development";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import youtube_logo from "../../assets/Images/UI images/youtube_logo.png"; 
import available_vids from "../search page/avaiable_videos_api";

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
  
function processing_search_results(search_input,set_search_results,available_vids){
   let arr = []
   for(let i=0;i<available_vids.length;i++){
       if(available_vids[i].title.toLowerCase().includes(search_input.toLowerCase())){
           arr.push(available_vids[i]);  
       } 
   }

    set_search_results(arr); 
}

const Header=({search_input,set_search_results,set_search_input,set_searched})=>{
    const [topics,set_topics] = useState(recommended_topics.slice(0,3));
    const [temp_input,set_temp_input] = useState("");  

    return(
        <>
            <div className="header-division">
            <div className="searching-div">
                <button onClick={()=>{set_searched(false);}} className="yt-logo-btn"><img className="yt-logo-img" src={youtube_logo}></img></button>
                <input onChange={
                    (e)=>{
                        set_temp_input(e.target.value) 
                    }
                } placeholder="Search" className="search-box"></input>
                <button type="submit" onClick={()=>{
                    set_searched(true); set_search_input(temp_input); 
                    processing_search_results(temp_input,set_search_results,available_vids)
                    }}className="search-btn"><img className="search-icon-img" src={search_icon}></img></button>
                
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
            </div>

        </>
    )
}

export default Header

