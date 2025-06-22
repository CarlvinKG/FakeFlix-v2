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
      {links.map((link, index) => <li key={index}><a href={`${link === 'Home' ? 'home' : '/'}`}>{link}</a></li>)}
  </ul>
}

export default Links