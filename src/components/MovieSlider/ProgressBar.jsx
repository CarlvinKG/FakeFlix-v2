import React from 'react'

const ProgressBar = ({bars = 10}) => {
  return (
    <div className="progress-bar">
            {Array.from({ length: bars }, (_, i) => (
                <div key={i + 'a'}
                    className={`bar ${bars === 10 ? 'b' : 't'}${i} ${i === 0 ? 'activeItem' : ''}`}
                    />
            ))}
    </div>
  )
}

export default ProgressBar