import React, { useEffect, useState } from 'react'

const Api = () => {
    const [Product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/').then(res => {
            return res.json()
        }).then((result) => {
            console.log(result);
            setProduct(result)
        })

    }, [])

    return (
        <>
            <div className="container m-auto d-flex gap-4 flex-wrap mt-5 mb-5 justify-content-center">
                {Product.map((prd) => {
                    return (
                        <div className="card" style={{ height: '400px', width: '250px' }}>
                            <img height={'200px'} src={prd.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className='card-title'>{prd.title}</h5>
                                <p className="card-text">{prd.description.substr(1,40)}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Api