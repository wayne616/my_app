import React, { useState, useEffect } from 'react';

import axios from 'axios';


export default function Skills() {

  const [Skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/skills`)
      .then((response) => {
        setSkills(response.data);
      });
  }, []);

  return (
    <section>
      <div id='block-info'>
        <p>
          mais avant toute choses en voici un peu plus sur moi !
        </p>
      </div>
      <h2 id='h2-skills'>Skills</h2>
      <div id='block-skills'>

        {Skills.map((val, skills) => {
          return <div key={skills} className={"skills" + skills}>

            <div className='block-skills'>
              <img id="img-skills" src={val.img} alt="img" />
              <div className='block-skills-data'>
                <h2 className='titre-skills'>{val.titre}</h2>
                <p className='description-skills'>{val.description}</p>
              </div>
            </div>
            
          </div>
        })}

      </div>
    </section>
  )
}
