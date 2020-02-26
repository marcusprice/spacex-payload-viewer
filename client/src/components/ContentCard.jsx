import React from 'react';
import payload from '../img/payload.jpg';
import rocket from '../img/rocket.jpg';

const ContentCard = (props) => {
  const headerImg = (props.type === 'payload') ? payload : rocket;
  const headerImgAlt = (props.type === 'payload') ? 'payload car' : 'rocket in space';

  return(
    <div className={`content-card ${props.type}`}>
      <img className="content-card-header" src={headerImg} alt={headerImgAlt} />
      <div className="info">
        <h2>FalconSAT-2 (Satellite)</h2>
        <h3>United States</h3>
        <h3>Manufactured by SSTL</h3>
        <h3>Weighs 43 Lbs</h3>
      </div>
    </div>
  )
}

export default ContentCard;
