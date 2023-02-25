import React from 'react';
import './Follower.css';

const Follower = ({name, image}) => {
  return (
    <div className='follower-block'>
        <div>
            <img className='follower-image' src={image} />
        </div>
        <div>
            <span className='follower-name'>{name.substring(0,12)}</span>
        </div>
    </div>
  )
}

export default Follower