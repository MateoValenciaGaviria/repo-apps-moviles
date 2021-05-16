import React from 'react';
import './VideoView.css'

interface VideoViewProps{
    tittle: string,
    videoUrl: string
}

export const VideoView: React.FC<VideoViewProps> = ( { tittle, videoUrl } ) => {

    return(
        <div className="videoView__main">
            <div  className="videoView__video__container">
                <video className="videoView__video" controls>
                    <source src={videoUrl} type='video/mp4'></source>
                </video>
            </div>
            <p className="videoView__tittle">
                {tittle}
            </p>    
        </div>
    );
}