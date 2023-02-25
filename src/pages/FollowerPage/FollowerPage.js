import React from 'react';
import FollowersList from '../../components/FollowersList/FollowersList';
import './FollowerPage.css';

const FollowerPage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <div className='follower-container'>

    <FollowersList />
    </div>
    </div>
  )
}

export default FollowerPage