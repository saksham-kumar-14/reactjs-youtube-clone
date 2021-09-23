import React from "react";
import style from "../../assets/Styles/search result/search_result.css"; 

const SearchResult=({search_input,search_results})=>{

    return(
        <>  

            <div className="search-results">
                <span className="search-result-heading">Results based on <span className="search-result-heading-topic">' {search_input} ' </span> : </span>
                
                
                {search_results.map((e)=>{
                    return(
                        <div className="search-result">
                            <div className="search-result-section-1">
                                <img className="search-result-thumbnail" src={e.thumbnail}></img>
                            </div>
                            
                            <div className="search-result-section-2">
                                <span className="search-result-title">{e.title}</span>
                                <div className="search-result-section-2a">
                                    <span className="search-result-views">{e.views}</span> 
                                    <span className="search-result-posted"> • {e.posted}</span>
                                </div>
                                <div className="search-result-section-2b">
                                    <img className="search-result-channel-img" src={e.channel_img}></img>
                                    <span className="search-result-channel-name">{e.channel_name}</span>
                                </div>
                            </div>
                        </div> 
                    )
                })}
            
            </div>
        </>
    )
}

export default SearchResult


