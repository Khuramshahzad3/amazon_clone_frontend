import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CallApi } from '../Utills/CallApi';
import ProductDetails from './ProductDetails';
import { GB_CURRENCY } from '../Utills/Constants';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const catergory = searchParams.get("category");

    CallApi(`data/search.json`)
      .then((SearchResults) => {
        const categoryResults = SearchResults[catergory];
        if (searchTerm) {
          const Results = categoryResults.filter(product => product.title.toLowerCase().includes
            (searchTerm.toLowerCase()));
          setProducts(Results);
        }
        else {
          setProducts(categoryResults);
        }
      })
  }
  useEffect(() => {
    getSearchResults();
  }, [searchParams])
  return (
    <div className='min-w-[1280px] max-w-[1380] m-auto p-4'>
      {
        products && products.map((product, key) => {
          return (
            // <Link to={`/product/${product.id}`} key={key}>
              <div className='h-[250px] grid grid-cols-12 rounded mt-1 mb-1' >
                <div className='col-span-2 bg-gray-200 p-4'>
                  <img className='m-auto' src={product.image_small} alt="" />
                </div>
                <div className='col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100'>
                  <div className='font-medium text-black p-2'>
                    <ProductDetails product={product} ratings={true}/>
                    <div>{GB_CURRENCY.format(product.price)}</div>
                  </div>
                </div>
              </div>
            // </Link>
          )
        })
      }

    </div>
  )
}

export default SearchResults