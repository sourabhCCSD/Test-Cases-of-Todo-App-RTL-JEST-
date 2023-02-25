import React from 'react'
import { Link } from 'react-router-dom'

const TodoFooter = ({noOfIncompleteTask}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', opacity: '70%'}}>
        <div>
{noOfIncompleteTask < 2 ?  `${noOfIncompleteTask} task` : `${noOfIncompleteTask} tasks`} left
</div>
<div style={{cursor: 'pointer', fontSize: '20px', color: '#AA46CA'}}>
   <Link to='/followers'>Followers</Link> 
</div>
    </div>
  )
}

export default TodoFooter