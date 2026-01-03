import React from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../Redux/cardslice';

const Card2 = ({ name, id, price, image, qty }) => {
  const dispatch = useDispatch()

  return (
    <div className='w-full bg-white p-3 sm:p-4 rounded-lg shadow-md
      flex flex-col sm:flex-row justify-between gap-4'>

      {/* Left Section */}
      <div className='flex gap-3 sm:gap-5 w-full sm:w-[70%]'>
        {/* Image */}
        <div className='w-[90px] h-[90px] sm:w-[110px] sm:h-[110px]
          overflow-hidden rounded-lg flex-shrink-0'>
          <img src={image} alt={name} className='w-full h-full object-cover' />
        </div>

        {/* Info */}
        <div className='flex flex-col justify-between flex-1'>
          <h4 className='text-base sm:text-lg text-gray-700 font-semibold line-clamp-2'>
            {name}
          </h4>

          {/* Quantity Control */}
          <div className='w-[90px] h-[36px] bg-slate-300 flex rounded-lg
            overflow-hidden border border-green-400 text-lg'>
            <button
              className='w-[30%] bg-white text-green-500 hover:bg-gray-200'
              onClick={() => qty > 1 && dispatch(DecrementQty(id))}
            >
              -
            </button>
            <span className='w-[40%] bg-slate-200 flex items-center justify-center'>
              {qty}
            </span>
            <button
              className='w-[30%] bg-white text-green-500 hover:bg-gray-200'
              onClick={() => dispatch(IncrementQty(id))}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='flex sm:flex-col justify-between sm:items-end items-center'>
        <span className='text-lg sm:text-xl text-green-500 font-semibold'>
          Rs {price}/-
        </span>
        <RiDeleteBinLine
          className='w-6 h-6 sm:w-7 sm:h-7 text-red-400 cursor-pointer hover:text-red-600'
          onClick={() => dispatch(RemoveItem(id))}
        />
      </div>
    </div>
  )
}

export default Card2
