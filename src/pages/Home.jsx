import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductsItem from '../components/ProductsItem'
import { Empty, Input, Select } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import useDebounce from '../hook/useDebounce'

function Home() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("")


    function handleProductsSearch(e) {
        setLoading(true)
        setSearchValue(e.target.value)
    }

    const searchWaitingValue = useDebounce(searchValue, 800)


///
    const [categoryData, setCategoryData] = useState([])
    const [categoryId, setCategoryId] = useState(null)
    const onChange = (value) => {
        setLoading(true)
        setTimeout(() => setCategoryId(value), 800)
    };

      useEffect(() => {
        axios.get("https://api.escuelajs.co/api/v1/categories").then(res => {
            setCategoryData(res.data.map(item => {
                const data = {
                    value: item.id,
                    label: item.name
                }
                return data;
            }))
        })
      })
///



    useEffect(() => {
        axios.get(`https://api.escuelajs.co/api/v1/products/?title=${searchWaitingValue}&offset=0&limit=20`,{
            params:{
                categoryId:categoryId
            }
        }).then(res => {
            setProducts(res.data)
            setLoading(false)
        })
    }, [searchWaitingValue, categoryId])

    return (
        <div className='p-10'>
            <div className='pb-10 flex justify-between'>
                <Input onChange={handleProductsSearch} size='large' allowClear name='search' className='w-[300px]' placeholder='Search products' />
                <Select
                    allowClear
                    className='w-[300px]'
                    size='large'
                    showSearch
                    placeholder="Choose category"
                    optionFilterProp="label"
                    onChange={onChange}
                    options={categoryData}
                />
            </div>
            <ul className='flex justify-between gap-10 flex-wrap'>
                {loading ? <li className='mx-auto mt-10'><LoadingOutlined className='text-blue-600' style={{ fontSize: "80px" }} /></li>
                    : products.length > 0 ? products.map(item => <ProductsItem key={item.id} item={item} />) : <Empty className='block mt-[150px] mx-auto scale-[3]' />}
            </ul>
        </div>
    )
}

export default Home