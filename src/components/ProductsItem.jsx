import { EllipsisOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

function ProductsItem({ item }) {
    return (
        // <li className='w-[250px] p-5 rounded-lg bg-white shadow-lg'>
        //     <img className='rounded-md' src={item.images} alt="Product Img" width={200} height={300} />
        //     <h2>Title: <b>{item.title}</b></h2>
        //     <p className='line-clamp-3'>{item.description}</p>
        //     <p>Price: <b>{item.price}$</b></p>
        //     <p>Category: {item.category.name}</p>
        // </li>
        <li>
            <Card
                style={{
                    width: 300,
                }}
                cover={
                    <img
                        alt="example"
                        src={item.images[0]}
                    />
                }
                actions={[
                    <EllipsisOutlined className='scale-[1.5]' key="ellipsis" />,
                    <HeartOutlined className='scale-[1.5]' key="ellipsis" />,
                    <ShoppingCartOutlined className='scale-[1.5]' key="ellipsis" />
                ]}
            >
                <Meta
                    avatar={<Avatar src={item.category.image} />}
                    title={item.title}
                    description={
                        <>
                            <p className='line-clamp-3'>{item.description}</p>
                            <p style={{ fontWeight: 'bold' }}>${item.price}</p>
                        </>
                    }
                />
            </Card>
        </li>
    )
}

export default ProductsItem