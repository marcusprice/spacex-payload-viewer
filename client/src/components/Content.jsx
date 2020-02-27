import React, { useState, useEffect } from 'react';
import PayloadCard from './PayloadCard';
import RocketCard from './RocketCard';

const Content = (props) => {
  let [spacexData, setSpacexData] = useState([]); //stores the data

  //hits the api for data every time the content type prop changes
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
        if(props.contentType === 'payload') {
          setSpacexData(result.data.payloads);
        } else {
          setSpacexData(result.data.rockets);
        }
      })
  }, [props.contentType]);

  const handleDisplay = () => {
    let output;
    if(spacexData.length > 1) {
      if(props.contentType === 'payload') { //if content type is payload
        //build a list of payload cards
        output = spacexData.map((value, key) => {
          return (
            <PayloadCard
              key={key}
              payload_id={spacexData[key].payload_id}
              manufacturer={spacexData[key].manufacturer}
              nationality={spacexData[key].nationality}
              payload_type={spacexData[key].payload_type}
              payload_mass_lbs={spacexData[key].payload_mass_lbs}
            />
          )
        })
      } else {  //if content type is rocket
        //build a list of rocket cards
        output = spacexData.map((value, key) => {
          return (
            <RocketCard
              key={key}
              rocket_id={spacexData[key].rocket_id}
              rocket_name={spacexData[key].rocket_name}
              rocket_type={spacexData[key].rocket_type}
            />
          )
        })
      }
    } else {  //no data, render no cards
      output = '';
    }

    return output;
  }

  return(
    <section>
      {handleDisplay()}
    </section>
  )
}

export default Content;
