import React from 'react'
import AnimalCard from './AnimalCard.js'

function AnimalContainer() {

    // const animals = [
    //     {
    //         name: "Polar Bear",
    //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppDJo6VJCI9azGsxdLKrWwfBEZiapmmQ4WQ&s",
    //         origin: "North America"
    //     },
    //     {
    //         name: "Black Panther",
    //         image: "https://suchscience.net/wp-content/uploads/2024/03/v2-7vx5e-vs118.jpg",
    //         origin: "Africa and Asia"
    //     },
    //     {
    //         name: "Hippopotamus",
    //         image: "https://i.redd.it/nq6d8gts9wt81.jpg",
    //         origin: "Sub-Saharan Africa"
    //     },
    //     {
    //         name: "Cougar",
    //         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXV_13UP3CTemT7KUY1EPbV9cpOBIXxIalAfvZesNsHNFK8NV-eVq5L8wBDZ3IroYX7Yw&usqp=CAU",
    //         origin: "Americas"
    //     },
    //     {
    //         name: 'Food',
    //         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRiVWacSOH18ROq7tNzj9kVm36naMjsGxKwg&s',
    //         origin: 'Antartica'
    //     }
    // ];

    // const showAnimals = animals.map(a => <AnimalCard animal={a} />)
    
    
  return (
    <div className='animalContainer'>
        <AnimalCard isAlive={false} name='Grizzly' eats="🐟"/>
        <AnimalCard isAlive={true} name='Lion' eats="🦌" />
        <AnimalCard isAlive={false} name='Parrot' eats="🫐" />
        <AnimalCard isAlive={true} name='Black Panther' eats="🥩" />
        <AnimalCard isAlive={true} name='Hippopotamus' eats="🍉" />
        <AnimalCard isAlive={false} name='Wolf' eats="🐏" />
        <AnimalCard isAlive={true} name='Gay Couple' eats="🌮" />
    </div>
  )
}

export default AnimalContainer

/*
    choose a few, make them dead

    and if an animal is dead, show a red background

    <div styles={{
			backgroundColor: type === "admin" ? "green" : "red" 
            border: `solid ${color} 2px`
		}}>

*/