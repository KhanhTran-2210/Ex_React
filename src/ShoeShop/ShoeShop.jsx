import React, { useState } from 'react'
import ShoeList from './ShoeList'
import data from "./data.json"
import ModalShoe from './ModalShoe'

export default function ShoeShop() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const handleGetProduct = (product) => {
    setSelectedProduct(product);
    setIsOpen(true)
  }
  const handleCloseCard = () =>{
    setIsOpen(false)
  }
  return (
    <div >
        <h1 className='text-center fs-3 text-danger my-3'>ShoeShop</h1>
        <ShoeList products={data} onGetProduct={handleGetProduct} />
        {isOpen && <ModalShoe product={selectedProduct} onCloseCard={handleCloseCard} />}
    </div>
  )
}
