import React from 'react'

const Users = ({users}) => {
  return (
    <div>
        <p>{users.name}</p>
        <p>{users.email}</p>
    </div>
  )
}

export default Users