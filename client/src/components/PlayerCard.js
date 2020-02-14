import React from 'react';

const PlayerCard = props =>{
    return (
        <div className= "card-wrapper">
            <p className='card-name'>Name:
            {props.name}
            </p>
            <p className='card-rank'> Rank: 
             {props.rank}
            </p>
            <p className="card-team">Team: 
             {props.team}
            </p>
        </div>
    );
};

export default PlayerCard;