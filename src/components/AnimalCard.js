import React from 'react'

function AnimalCard({name,eats,isAlive}) {

    let styles = {
        backgroundColor: !isAlive ? "red" : "" 
    }

  return (
    <div className='animalCard' style={styles} >
        <h6>{name} eats {eats}</h6>
    </div>
  )
}

export default AnimalCard

// student cards

// I want to show the student name, the student grade

//background color green if passed, red if failed

//One student should be the "best", make that student card yellow