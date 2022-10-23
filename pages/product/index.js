import React from 'react';
import Link from 'next/link';

const Product = ({product}) => {
  return (
    <div>
        <h1>Produk</h1>
        {
            product.map((item) => {
                return (
                    <div key={item.id}>
                        <Link href={`product/${item.id}`}><p>{item.id} ~ {item.title} Rp.{item.price} : {item.des}</p></Link>
                        <hr/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product


export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3004/product');
    const data = await response.json();

    return {
        props : {
            product : data
        }
    }
}