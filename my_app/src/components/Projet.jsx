import React, { useState, useEffect } from 'react'

import axios from 'axios';

export default function Projet() {

  const [Projet, setProjet] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/projet`)
      .then((response) => {
        setProjet(response.data);
      });
  }, []);

  return (
    <section>
      <div id='liste-projet'>

        {Projet.map((val, index) => {
          return <div key={index} className={"index" + index}>

            <div className='block-projet'>

              <div className='block-projet-data'>
                <h2 className='titre-projet'>{val.titre}</h2>
                <p className='description-projet'>{val.description}</p>
                <button className='button-projet'>
                  GitHub
                </button>
              </div>
              <br />
              <img className="img-projet" src={val.img} alt="img" />
              
            </div>

          </div>
        })}

      </div>
    </section>
  );
}
