import React from 'react'

const News = ({artikels}) => {
  return (
    <div>
        <h1>List News Articles</h1>
        {
            artikels.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.id}. {item.title}: {item.des}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default News


export const getServerSideProps = async () => {
    const response = await fetch('http://localhost:3004/news');
    const data = await response.json();

    return {
        props : {
            artikels : data
        }
    }
}