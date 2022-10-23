import React from 'react';
import Link from 'next/Link';

const PostsList = ({posts}) => {
  return (
    <div>
        <h1>Post List</h1>
        {
            posts.map((item) => {
                return (
                    <div key={item.id}>
                        <Link href={`posts/${item.id}`}><p>{item.id} ~ {item.title}</p></Link>
                        <hr/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PostsList


export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props : {
            posts : data
        }
    }
}