import React, { useState } from "react";
import Header from "./Components/body/header";
import Sidebar from "./Components/sidebar/side_bar";
import Body from "./Components/body/body";
import styles from "./assets/Styles/global/global_styles.css"
import SearchResult from "./Components/search page/search_page"

const App=()=>{
    const [search_input,set_search_input] = useState("");
    const [searched,set_searched] = useState(false);  
    const [search_results,set_search_results] = useState([]); 

    return(
        <>
            <div className="yt-home-divs">
                <div className="yt-home-div-1">
                    <Sidebar/>
                </div>
                <div className="yt-home-div-2">
                    <Header search_input={search_input} set_search_results={set_search_results} set_search_input = {set_search_input} set_searched = {set_searched}/>
                    {!searched && <Body/>} 
                    {searched && <SearchResult search_input={search_input} search_results={search_results}/>}
                </div>
            </div>
        </>
    )
}

export default App