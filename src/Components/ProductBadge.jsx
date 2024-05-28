import React from 'react'

const ProductBadge = ({badge}) => {
    if (badge === 'choice') {
        return (
            <span className='text-xs xl:text-sm bg-slate-800 text-white  p-1'>Amazon's<span
                className='text-orange-500'>Choice</span></span>
        )

    }
    else if (badge === 'seller') {
        return (
            <span className='text-xs xl:text-sm bg-orange-800 text-white  p-1'>#1 Best Seller</span>
        )
    }

    else if (badge === 'limited') {
        return (
            <span className='text-xs xl:text-sm bg-red-800 text-white  p-1'>Limited Time Deal</span>
        )
    }
    return (
        <div>ProductBadge</div>
    )
}

export default ProductBadge