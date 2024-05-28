import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CallApi } from '../Utills/CallApi';
import ProductDetails from './ProductDetails';
import { GB_CURRENCY } from '../Utills/Constants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const Productpage = () => {
  const { id } = useParams();
  const [product, setproduct] = useState(null);
  const [quantity, setQuantity] = useState("1");

  const addQuantitytoProduct = () => {
    setQuantity(product.quantity = quantity);
    return product;
  }
  const dispatch = useDispatch();
  const getproduct = () => {
    CallApi(`data/products.json`)
      .then((productresults) => {
        setproduct(productresults[id])
      })
  }

  useEffect(() => {
    getproduct();
  }, [])
  if (!product?.title) return <h1>Loading Product....</h1>
  return (product &&
    <div className='h-screen bg-amazonclone-background '>
      <div className="min-w-[1000px] max-w-[1500px] p-4 m-auto">
        <div className="grid grid-cols-10 gap-2 ">
          {/* left */}
          <div className="col-span-3 p-8 rounded bg-white m-auto">
            <img src={`${product.image}`} alt="" />
          </div>
          {/* Middle */}
          <div className="col-span-5 p-4 rounded bg-white  divide-y divide-gray-400">
            <div className='mb-3'>
              <ProductDetails product={product} ratings={true} />
            </div>
            <div className='text-base xl:text-lg mt-3'>
              {product.description}
            </div>
          </div>
          {/* Right */}
          <div className="col-span-2 p-4 rounded bg-white">
            <div className='text-xl xl:text-xl text-red-700 font-semibold text-right'>{GB_CURRENCY.format(product.price)}</div>
            <div className='text-base xl:text-lg text-gray-500 font-semibold text-right'>RRP: <span className='line-through'>{GB_CURRENCY.format(product.oldPrice)}</span></div>
            <div className='text-sm xl:text-base text-blue-500 font-semibold mt-3'>FREE DELIEVERY</div>
            <div className='text-sm xl:text-base text-pink-500 font-semibold mt-1'>FREE RETURN</div>
            <div className='text-base xl:text-lg text-blue-500 font-semibold mt-1'>IN STOCKS</div>
            <div className='text-base xl:text-lg mt-1'>Quantity:
              <select onChange={(e) => setQuantity(e.target.value)} className='p-2 bg-white border rounded-md focus:border-indigo-600'>
                <option > 1 </option>
                <option > 2 </option>
                <option > 3 </option>
              </select>
            </div>
            <Link to={"/checkout"}>
              <button onClick={() => dispatch(addToCart(addQuantitytoProduct()))} className='bg-yellow-400 mt-3 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500'>Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Productpage