import React from 'react'

const PasswordStrengthMeter = ({ score }) => {
  const scoreColors = [
    'red',
    'orange',
    'yellow',
    'yellowgreen',
    'green'
  ];

  return (
    <div className="meter">
      {
        scoreColors.map(
          (value, index) =>
            <div
              key={value}
              className="meter-unit"
              style={{ backgroundColor: index <= score ? scoreColors[score] : 'lightgray' }}
            >
            </div>
        )
      }
    </div>
  )
}

export default PasswordStrengthMeter