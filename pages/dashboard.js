import React, {useEffect, useState} from 'react';

const Dashboard = () => {

    const [isLoading, setLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3004/dashboard');
            const data = await response.json();
            setDashboardData(data);
            setLoading(false)
        }
        fetchData();
    }, []);

    if(isLoading) {
        return (
            <p>Loading.....</p>
        )
    }

  return (
    <div>
        <h1>Dashboard</h1>
        <p>Posts : {dashboardData.posts}</p>
        <p>Likes : {dashboardData.likes}</p>
        <p>Followers : {dashboardData.followers}</p>
        <p>Following : {dashboardData.following}</p>
    </div>
  )
}

export default Dashboard