import React from 'react'

const Links = () => {
    const links = [
        'Home',
        'TV Shows',
        'Movies',
        'Games',
        'New & Popular',
        'My List',
        'Browse by Language'
    ]

  return <ul>
      {links.map((link, index) => <li key={index}>{link}</li>)}
  </ul>
}

export default Links