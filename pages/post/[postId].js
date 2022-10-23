import React from 'react'

const PostA = ({post}) => {
  return (
    <div>
        <h1>Post</h1>
        <p>{post.id} ~ {post.title}</p>
        <p>{post.body}</p>
    </div>
  )
}

export default PostA

export const getStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths = data.map((item) => {
        return {
            params : {
                postId : `${item.id}`
            }
        }
    })
    return {
        paths,
        fallback : false
    }
}

export const getStaticProps = async (context) => {
    const {params} = context
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();

    return {
        props : {
            post : data
        }
    }
}