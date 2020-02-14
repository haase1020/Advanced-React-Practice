import React from 'react';

const PlayerCard = props =>{
    return (
        <div className= "card-wrapper">
            <p>
            {props.name}
            </p>
            <p>
             {props.rank}
            </p>
            <p>
             {props.team}
            </p>
        </div>
    );
};

export default PlayerCard;