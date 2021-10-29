import React, {useState} from 'react'
import Modal from './Modal'
import { ProductData } from './ProductData'

function ProductList({searchTerm}) {
    const [showModal, setShowModal] = useState(false)
    const [currentImg, setCurrentImg] = useState('')
    const [typeNum, setTypeNum] = useState(0)

    const openModal = (id) => {
        setShowModal(prev => !prev)
        let index = ProductData.findIndex(x => x.productid === id)
        setCurrentImg(ProductData[index].image)
    }

    const displayType = (num) => {
        typeNum === 0 ? setTypeNum(num) : setTypeNum(0)
    }
    

    return (
        <>
            <div className="productType">
                <div className="sticky">
                    <p className="type" onClick={() => displayType(1)}>商品類型1</p>
                    <p className="type" onClick={() => displayType(2)}>商品類型2</p>
                    <p className="type" onClick={() => displayType(3)}>商品類型3</p>
                    <p className="type" onClick={() => displayType(4)}>商品類型4</p>
                </div>
            </div>
            <div className="productBlock">
                {typeNum === 0 ?
                    ProductData.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.productName.includes(searchTerm)) {
                            return val
                        }
                    }).map((productImg) => {
                        return (
                            <>
                                <div className="product" key={productImg.productid}>
                                    <img className="thumbnail" src={productImg.image} onClick={() => openModal(productImg.productid)}/>
                                    <p className="productName">{productImg.productName}</p>
                                </div>
                            </>
                        )
                    })    
                :
                    ProductData.map((productImg) => {
                        return (
                            <>
                                {typeNum === productImg.productType && 
                                    <div className="product" key={productImg.productid}>
                                        <img className="thumbnail" src={productImg.image} onClick={() => openModal(productImg.productid)}/>
                                        <p className="productName">{productImg.productName}</p>
                                    </div>
                                }
                            </>
                        )
                    })
                }
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} currentImg={currentImg}/>
        </>
    )
}

export default ProductList
