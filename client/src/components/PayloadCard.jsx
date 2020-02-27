import React from 'react';
import payload from '../img/payload.jpg';
import rocket from '../img/rocket.jpg';

const PayloadCard = (props) => {

  return(
    <div className="content-card">
      <img className="content-card-header" src={payload} alt="payload car" />
      <div className="info">
        <h2>{props.payload_id} ({props.payload_type})</h2>
        <h3>{props.nationality}</h3>
        {(props.manufacturer) ? (<h3>{`Manufactured by ${props.manufacturer}`}</h3>) : ''}
        {(props.payload_mass_lbs) ? (<h3>{`Weighs ${props.payload_mass_lbs} Lbs`}</h3>) : ''}
      </div>
    </div>
  )
}

export default PayloadCard;
