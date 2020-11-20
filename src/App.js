import React, { useState } from "react";
import "./App.css"
import SearchBar from "./components/SearchBar/SearchBar"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import Logo from "./components/Logo/Logo"

const App = () => {

    const [videoId, setVideoId] = useState("");

    const onSearchBarChange = (link) => {
        getVideoId(link)
    };

    const getVideoId = (url) => {
        const id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
        if (id != null) {
            setVideoId(id[1])

        } else {

        }
    };

    return (
        <div className="app-container">
            <Logo />
            <SearchBar
                onSearchBarChange={onSearchBarChange}
            />
            <VideoPlayer videoId={videoId} />
        </div>
    );
}

export default App;