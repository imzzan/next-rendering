import React from 'react'

const ProductA = ({product}) => {
  return (
    <div>
        <p>{product.id} ~ {product.title}, {product.price}</p>
    </div>
  )
}

export default ProductA;

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:3004/product');
    const data = await response.json();

    const paths = data.map((item) => {
        return {
            params : {
                productId : `${item.id}`
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
    const response = await fetch(`http://localhost:3004/product/${params.productId}`);
    const data = await response.json();

    return {
        props : {
            product : data
        },
        revalidate : 10
    }
}