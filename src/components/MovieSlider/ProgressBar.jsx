import React from 'react'

const ProgressBar = () => {
  return (
    <div className="progress-bar">
            {Array.from({ length: 10 }, (_, i) => (
                <div key={i + 'a'}
                    className={`bar b${i} ${i === 0 ? 'activeItem' : ''}`}
                    />
            ))}
    </div>
  )
}

export default ProgressBar