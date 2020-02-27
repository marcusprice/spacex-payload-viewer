import React, { useState, useEffect } from 'react';
import ContentCard from './ContentCard';

const Content = (props) => {
  let [spacexData, setSpacexData] = useState([])

  useEffect(() => {
    let request;
    if(props.contentType === 'payload') {
      request = `
      {
        payloads {
          payload_id,
          manufacturer,
          nationality,
          payload_type,
          payload_mass_lbs
        }
      }`;
    } else {
      request = `
      {
      	rockets {
      	  rocket_id
      	  rocket_name
      	  rocket_type
      	}
      }`;
    }

    console.log(request);

    //fetch data from api
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: request})
    })
      .then(response => response.json())
      .then((result) => {
        console.log(result);
        //setSpacexData(result);
      })
  }, [props.contentType]);

  return(
    <section>
      <ContentCard contentType={props.contentType} />
      <ContentCard contentType={props.contentType} />
      <ContentCard contentType={props.contentType} />
      <ContentCard contentType={props.contentType} />
    </section>
  )
}

export default Content;
