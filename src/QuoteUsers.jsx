import React from 'react'


const QuoteUsers = ({randomUser, randomColor, getRandomAll}) => {
const objectStyle={
    color:randomColor
}  

const objectBg={
    backgroundColor:randomColor
}

    console.log(randomColor, randomUser)
  return (

  <div className="quotesUsers" style={objectStyle}>
    <div className="quotesicon">
    <div className="quotes"><i class='bx bxs-quote-alt-left'></i></div>
    <div className="quote">{`${randomUser.quote}`}</div>
    </div>
    <div className="author">{`${randomUser.author}`}</div>
    <button onClick={getRandomAll} style={objectBg}><i class='bx bx-chevron-right'></i>
    </button>
    
    
  </div>
  )

}

export default QuoteUsers