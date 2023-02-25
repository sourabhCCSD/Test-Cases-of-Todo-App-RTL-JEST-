import React, {useEffect, useState} from 'react'
import Follower from '../Follower/Follower'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
/* import Axios from 'axios'; */

const FollowersList = () => {

    const [followerList, setFollowerList] = useState([]);
/* 
    useEffect(() => {
      Axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
      .then(result => {
        setFollowerList(result.data)
      })
      .catch(error => {
        console.log(error)
      });
    }, []) */
    

  return (
    <div>
        <Header title="Followers" />
        <div style={{marginTop: '100px'}}>
        {
            followerList.map((follower) => (
                <Follower name={follower.title} image={follower.url}/>
            ))
        }
       <Link to='/'> Go Back </Link>
       </div>
    </div>
  )
}

export default FollowersList