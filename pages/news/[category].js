import React from 'react'

const ArtikelByCategory = ({artikels, category}) => {
  return (
    <div>
        <h1>Showing News for Category | {category}</h1>
        {
            artikels.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.id} ~ {item.title}</p>
                        <p>{item.des}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ArtikelByCategory


export const getServerSideProps = async (context) => {
    const {params} = context
    const {category} = params
    const response = await fetch(`http://localhost:3004/news?category=${category}`);
    const data = await response.json();

    return {
        props : {
            artikels : data,
            category,
        }
    }
}