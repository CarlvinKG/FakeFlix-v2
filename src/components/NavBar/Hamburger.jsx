import React, {useState} from 'react'
import Hamburger from 'hamburger-react'
import Links from './Links.jsx'

const HamburgerComp = () => {
    const [open, setOpen] = useState(false);

  return <div className="hamburger">
      <Hamburger
          size={24}
          toggled={open}
          toggle={setOpen}
      />
      {open && <div className="open-hamburger">
          <Hamburger
              size={24}
              toggled={open}
              toggle={setOpen}
          />
          <Links />
      </div>}
  </div>
}

export default HamburgerComp