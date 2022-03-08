import React from 'react'

const Result = ({ result }) => {
  const rating = [
    'very weak',
    'weak',
    'medium',
    'strong',
    'very strong'
  ];

  return (
    <div>
      {
        result ?
          <>
            <h2>Your password is {rating[result.score]}!</h2>
            <h4 style={{ fontWeight: 400 }}>It will take {result.guessTimeString} to guess your password. {result?.warning}</h4>
            {
              result.suggestions?.map((value, index) => <h3 key={index}>{value}</h3>)
            }
          </>
          : undefined
      }
    </div>
  )
}

export default Result