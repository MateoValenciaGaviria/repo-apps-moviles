import React from 'react';
import { WeekType } from '../../utils/WeekType';
import { VideoView } from '../VideoView/VideoView';
import './WeekView.css'

interface WeekViewProps{
    week: string,
    weekTopic: string,
    weeksArray: WeekType[]
}

export const WeekView: React.FC<WeekViewProps> = ( { week, weekTopic, weeksArray } ) => {

    return(
        <div className="weekView__main">
            <div className="weekView__tittle__container">
                <h2 className="weekView__week">{week}: </h2>
                <h3 className="weekView__weekTopic">{weekTopic}</h3>
            </div>
            <div className="weekView__videos__container">
                {weeksArray.map(({key, tittle, videoUrl}) => {
                    return <VideoView
                    key={key}
                    tittle={tittle}
                    videoUrl={videoUrl}
                    ></VideoView>
                })}
            </div>
        </div>
    );
}