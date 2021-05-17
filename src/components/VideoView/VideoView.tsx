import Loader from "react-loader-spinner";
import React, {Suspense, lazy} from 'react';
import './VideoView.css'
const Video = lazy( () => import('../Video/Video').then(({Video}) => ({default: Video})));

interface VideoViewProps{
    tittle: string,
    videoUrl: string
}

export const VideoView: React.FC<VideoViewProps> = ( { tittle, videoUrl } ) => {

    return(
        <div className="videoView__main">
            <div  className="videoView__video__container">
                <Suspense fallback={<div className="videoView__fallback"></div>}>
                <Video
                tittle={tittle}
                videoUrl={videoUrl}></Video>
                </Suspense>
                <div className="videoView__loader">
                    <Loader 
                        type="TailSpin"
                        color="#DBDBDB"
                        height={50}
                        width={50}
                        timeout={10000} //3 secs
                    />
                </div>
            </div>
            <p className="videoView__tittle">
                {tittle}
            </p>    
        </div>
    );
}