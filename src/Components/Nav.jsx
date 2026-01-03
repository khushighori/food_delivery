import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BiSolidShoppingBags } from "react-icons/bi";
import { datacontext } from '../Context/Usercontext';
import food_items from '../Food';
import { useSelector } from 'react-redux';

function Nav() {
  const { input, setInput, setcate, setShowcard } = useContext(datacontext)

  useEffect(() => {
    const newlist = food_items.filter(item =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    )
    setcate(newlist)
  }, [input, setcate])

  const items = useSelector(state => state.card)

  return (
    <nav className='w-full bg-slate-200 sticky top-0 z-40 overflow-x-hidden'>
      <div className='w-full max-w-[1400px] mx-auto
        h-[70px] sm:h-[80px]
        flex items-center justify-between
        px-3 sm:px-6 lg:px-10 box-border'>

        {/* Logo */}
        <div className='flex-shrink-0 w-[45px] h-[45px] sm:w-[50px] sm:h-[50px]
          bg-white flex justify-center items-center rounded-md shadow-md'>
          <MdFastfood className='text-[26px] sm:text-[30px] text-green-500' />
        </div>

        {/* Search Bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex-1 min-w-0 mx-2 sm:mx-6 max-w-[700px]
          h-[45px] sm:h-[50px] bg-white flex items-center gap-3
          px-3 rounded-md shadow-md'
        >
          <IoSearch className='text-green-500 text-[18px] sm:text-[20px] flex-shrink-0' />
          <input
            type='text'
            placeholder='Search food...'
            className='w-full h-full outline-none text-sm sm:text-base bg-transparent'
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>

        {/* Cart Icon */}
        <div
          onClick={() => setShowcard(true)}
          className='flex-shrink-0 w-[45px] h-[45px] sm:w-[50px] sm:h-[50px]
          bg-white flex justify-center items-center rounded-md shadow-md
          relative cursor-pointer'
        >
          {items.length > 0 && (
            <span className='absolute -top-1 -right-1 bg-green-500
              text-white text-xs sm:text-sm font-semibold
              w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full'>
              {items.length}
            </span>
          )}
          <BiSolidShoppingBags className='text-[26px] sm:text-[30px] text-green-500' />
        </div>
      </div>
    </nav>
  )
}

export default Nav