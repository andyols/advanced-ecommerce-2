import React from 'react'

const TopNav = ({ changeCategory }) => {
  return (
    <div className="top-nav">
      <ul>
        <li>
          <a href="#" onClick={() => changeCategory('lights')}>
            car lights
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeCategory('tires')}>
            Car wheels
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeCategory('bumpers')}>
            car bumpers
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeCategory('audio')}>
            car audiosystem
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeCategory('bumpers')}>
            Truck bumpers
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeCategory()}>
            Feedback
          </a>
        </li>
        <div className="clear"> </div>
      </ul>
    </div>
  )
}

export default TopNav
