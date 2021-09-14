import React from "react";
import Header from "./Components/header";
import Sidebar from "./Components/sidebar/side_bar";
import Body from "./Components/body";
import styles from "./assets/Styles/global/global_styles.css"

const App=()=>{

    return(
        <>
            <div className="yt-home-divs">
                <div className="yt-home-div-1">
                    <Sidebar/>
                    <Body/>
                </div>
                <div className="yt-home-div-2">
                    <Header/>
                </div>
            </div>
        </>
    )
}

export default App