import React, { useState } from "react";
import recommended_vids from "./recommended_vids_api"
import styles from "../../assets/Styles/body/body_styles.css"

const Body=()=>{
    
    const [videos,set_videos] = useState(recommended_vids);  

    return(
        <>
            <div className="recommended-videos-div">
                {videos.map((e)=>{
                    return(
                        <div className="video">
                            <div className="video-section-1">
                                <img className="video-img" src={e.thumbnail}></img>
                            </div>
                            <div className="video-section-2">
                                <div className="video-section-2a">
                                    <img src={e.channel_img} className="video-channel-img"></img>
                                </div>
                                <div className="video-section-2b">
                                    <span className="video-title">{e.title}</span>
                                </div>
                            </div>
                            <div className="video-section-3">
                                <div className="video-section-3a"></div>
                                <div className="video-section-3b">
                                    <span className="video-channel-name">{e.channel_name}</span> <br/>
                                    <span className="video-views">{e.views}</span>
                                    <span className="video-posted"> • {e.posted}</span>
                                </div>
                            </div>
                        </div> 
                    )
                })}
            </div>
        </>
    )
}

export default Body