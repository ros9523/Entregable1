import { useState } from 'react'
import './App.css'
import users from './json/users.json'
import QuoteUsers from './QuoteUsers'
import colors from './Utils/colors'




function App() {

  const getRandomElement=(array)=>{
    let indexRandom=Math.floor(Math.random()* array.length);
   return array[indexRandom]
  }

  let userRandom=getRandomElement(users);
  let colorRandom=getRandomElement(colors);

  const [randomUser, setRandomUser]= useState(userRandom);
  const [randomColor, setRandomColor]= useState(colorRandom);
  
  const objColor= {
    backgroundColor:randomColor
  }

  const getRandomAll=()=>{
    userRandom=getRandomElement(users);
   colorRandom=getRandomElement(colors);

   setRandomUser(userRandom);
   setRandomColor(colorRandom);

  }

  return (
    <div className="App" style={objColor} >
      <QuoteUsers randomUser={randomUser} randomColor={randomColor} getRandomAll={getRandomAll} />
    </div>
  )
}

export default App
