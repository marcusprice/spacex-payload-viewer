import React from 'react';
import payload from '../img/payload.jpg';
import rocket from '../img/rocket.jpg';

const ContentCard = (props) => {
  const headerImg = (props.contentType === 'payload') ? payload : rocket;
  const headerImgAlt = (props.contentType=== 'payload') ? 'payload car' : 'rocket in space';

  return(
    <div className={`content-card ${props.contentType}`}>
      <img className="content-card-header" src={headerImg} alt={headerImgAlt} />
      <div className="info">
        <h2>{props.name} ({props.type})</h2>
        <h3>{props.country}</h3>
        <h3>Manufactured by {props.manufacturer}</h3>
        <h3>Weighs {props.weight} Lbs</h3>
      </div>
    </div>
  )
}

export default ContentCard;
