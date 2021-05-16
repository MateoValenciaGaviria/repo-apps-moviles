import React from 'react';
import './Video.css'

interface VideoProps{
    tittle: string,
    videoUrl: string
}

export const Video: React.FC<VideoProps> = ( { tittle, videoUrl } ) => {

    return(
        <div className="video__main">
            <iframe className="video__video" loading='lazy' src={videoUrl} title={tittle} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}