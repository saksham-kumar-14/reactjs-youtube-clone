import React from "react";
import Header from "./Components/body/header";
import Sidebar from "./Components/sidebar/side_bar";
import Body from "./Components/body/body";
import styles from "./assets/Styles/global/global_styles.css"

const App=()=>{

    return(
        <>
            <div className="yt-home-divs">
                <div className="yt-home-div-1">
                    <Sidebar/>
                </div>
                <div className="yt-home-div-2">
                    <Header/>
                    <Body/>
                </div>
            </div>
        </>
    )
}

export default App