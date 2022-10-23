import React from 'react';
import useSWR from 'swr';

const fetcher = async () => {
    const response = await fetch('http://localhost:3004/dashboard');
    const data = await response.json();
    return data
}

const DasboardSwr = () => {

    const {data, error} = useSWR('Dashboard', fetcher)

    if(error) return 'An Error has occured'
    if(data) return 'Loading'

  return (
    <div>
        <h1>Dashborad Swr</h1>
        <p>Posts : {dashboardData.posts}</p>
        <p>Likes : {dashboardData.likes}</p>
        <p>Followers : {dashboardData.followers}</p>
        <p>Following : {dashboardData.following}</p>
    </div>
  )
}

export default DasboardSwr