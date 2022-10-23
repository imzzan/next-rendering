import Link from 'next/link';
import React from 'react';

const PostList = ({post}) => {
  return (
    <div>
        <h1>Post List</h1>
        {
            post.map((item) => {
                return (
                    <div key={item.id}>
                       <Link href={`/post/${item.id}`}><p>{item.id} ~ {item.title}</p></Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PostList;

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props : {
            post : data
        }
    }
}