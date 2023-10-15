import React from 'react';

const LogCard = ({log :{ 
    captainName, 
    title, 
    post, 
    mistakesWereMadeToday, 
    daysSinceLastCrisis}}) => {
    return (
        <div className='LogCard'>
            <span>{captainName}</span>
            <span>{title}</span>
            <span>{post}</span>
            <span>{mistakesWereMadeToday}</span>
            <span>{daysSinceLastCrisis}</span>
        </div>
    );
}

export default LogCard;
