import React from 'react';
import rocket from '../img/rocket.jpg';

const ContentCard = (props) => {
  return(
    <div className="content-card">
      <img className="content-card-header" src={rocket} alt="rocket in space" />
      <div className="info">
        <h2>{props.rocket_id}</h2>
        <h3>{props.rocket_name}</h3>
        <h3>{props.rocket_type}</h3>
      </div>
    </div>
  )
}

export default ContentCard;
