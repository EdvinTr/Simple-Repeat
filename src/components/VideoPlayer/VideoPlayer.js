import React from "react";
import "./VideoPlayer.css"

const VideoPlayer = ({ videoId }) => {

    const youtubeLink = `//www.youtube.com/embed/${videoId}?rel=0?version=3&autoplay=1&showinfo=0&playlist=${videoId}&loop=1`

    return (
        <div className="videoplayer-container">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    title="videoPlayer"
                    className="embed-responsive-item"
                    src={youtubeLink}
                    allowFullScreen

                >
                </iframe>
            </div>
        </div>
    );
}

export default VideoPlayer;