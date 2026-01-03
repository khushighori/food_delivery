import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../Redux/cardslice';
import { toast } from 'react-toastify';

function Card({ name, price, image, id, type }) {
  const dispatch = useDispatch()

  return (
    <div
      className='w-full max-w-[280px] sm:max-w-[300px]
      bg-white p-3 sm:p-4 rounded-xl shadow-lg
      flex flex-col gap-3 hover:scale-105 hover:border-2
      border-green-500 duration-300 cursor-pointer'
    >
      {/* Image */}
      <div className='w-full h-[160px] sm:h-[180px] md:h-[200px]
        overflow-hidden rounded-lg'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover'
        />
      </div>

      {/* Name */}
      <h3 className='text-lg sm:text-xl font-semibold line-clamp-1'>
        {name}
      </h3>

      {/* Price & Type */}
      <div className='w-full flex justify-between items-center'>
        <span className='text-base sm:text-lg font-bold text-green-500'>
          Rs {price}/-
        </span>
        <span className='flex items-center gap-1 text-green-500 text-sm sm:text-base font-semibold capitalize'>
          {type === 'veg' ? <LuLeafyGreen /> : <GiChickenOven />}
          {type}
        </span>
      </div>

      {/* Button */}
      <button
        className='w-full p-2.5 sm:p-3 mt-auto bg-green-500
        rounded-lg text-white text-sm sm:text-base
        hover:bg-green-400 transition-all'
        onClick={() => {
          dispatch(AddItem({ id, name, price, image, qty: 1 }))
          toast.success('Item added')
        }}
      >
        Add To Dish
      </button>
    </div>
  )
}

export default Card