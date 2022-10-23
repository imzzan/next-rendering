import React from 'react';
import Users from '../component/users';

const UsersList = ({users}) => {
  return (
    <div>
        <h1>Users List</h1>
        {
            users.map((item) => {
                return (
                    <div key={item.id}>
                       <Users users={item}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UsersList


export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props : {
            users : data
        }
    }
}