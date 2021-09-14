import React, { useState } from "react";
import side_bar_api from "./side_bar_api";
import styles from "../../assets/Styles/sidebar/sidebar_styles.css" ; 

/*Importing UI images */
import yt_explore_option from "../../assets/Images/UI images/yt_explore_option.png"
import yt_explore_option_selected from "../../assets/Images/UI images/yt_explore_option_selected.png"
import yt_home_option from "../../assets/Images/UI images/yt_home_option.png"
import yt_home_option_selected from "../../assets/Images/UI images/yt_home_option_selected.png"
import yt_subscriptions_option from "../../assets/Images/UI images/yt_subscriptions_option.png"
import yt_subscriptions_option_selected from "../../assets/Images/UI images/yt_subscriptions_option_selected.png"
import yt_library_option from "../../assets/Images/UI images/yt_library_option.png"
import yt_library_option_selected from "../../assets/Images/UI images/yt_library_option_selected.png"

function option_clicked(name,sidebar_options,set_sidebar_options){
    let arr = []; 

    for(let i=0;i<sidebar_options.length;i++){
        if(sidebar_options[i].name===name){
            let obj = sidebar_options[i]; 
            if(sidebar_options[i].image === yt_home_option){
                sidebar_options[i].image = yt_home_option_selected
            }else if(sidebar_options[i].image === yt_explore_option){
                sidebar_options[i].image = yt_explore_option_selected
            }else if(sidebar_options[i].image === yt_subscriptions_option){
                sidebar_options[i].image = yt_subscriptions_option_selected
            }else if(sidebar_options[i].image === yt_library_option){
                sidebar_options[i].image = yt_library_option_selected
            }
            arr.push(obj); 
        }else{
            let obj = sidebar_options[i]; 
            if(sidebar_options[i].image ===yt_home_option_selected){
                sidebar_options[i].image = yt_home_option
            }else if(sidebar_options[i].image === yt_explore_option_selected){
                sidebar_options[i].image = yt_explore_option
            }else if(sidebar_options[i].image === yt_subscriptions_option_selected){
                sidebar_options[i].image = yt_subscriptions_option
            }else if(sidebar_options[i].image === yt_library_option_selected){
                sidebar_options[i].image = yt_library_option
            }
            arr.push(obj); 
        }
    }

    set_sidebar_options(arr); 
}

const Sidebar=()=>{ 
    const [sidebar_options,set_sidebar_options] = useState(side_bar_api); 

    return(
        <>
            <div className="yt-options">
                {sidebar_options.map((e)=>{
                    return(
                        <button onClick={()=>{option_clicked(e.name,sidebar_options,set_sidebar_options)}} className="yt-options-btn">
                            <img className="yt-options-btn-img" src={e.image}></img>
                            <span className="yt-options-btn-name">{e.name}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}

export default Sidebar

