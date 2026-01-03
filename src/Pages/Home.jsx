import React, { useContext } from 'react'
import Nav from '../Components/Nav'
import Categories from '../Categories.jsx'
import Card from '../Components/Card.jsx'
import food_items from '../Food.js'
import { datacontext } from '../Context/Usercontext.jsx'
import { RxCross1 } from "react-icons/rx";
import { useSelector } from 'react-redux'
import Card2 from '../Components/card2.jsx'
import { toast } from 'react-toastify'

const Home = () => {
  const { cate, setcate, input, setShowcard, showcard } = useContext(datacontext)

  const filter = (category) => {
    if (category === 'All') setcate(food_items)
    else setcate(food_items.filter(item => item.food_category === category))
  }

  const items = useSelector(state => state.card)
  const subtotal = items.reduce((t, i) => t + i.qty * i.price, 0)
  const deliveryFee = 20
  const taxes = subtotal * 0.5 / 100
  const total = Math.floor(subtotal + deliveryFee + taxes)

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />

      {/* Categories (horizontal scroll on mobile) */}
      {!input && (
        <section className='w-full mt-4 px-4'>
          <div className='flex flex-wrap gap-3 justify-center'>
            {Categories.map(item => (
              <button
                key={item.name}
                onClick={() => filter(item.name)}
                className='min-w-[110px] h-[120px] sm:w-[130px] sm:h-[140px]
                bg-white flex flex-col justify-center items-center gap-2
                rounded-lg shadow-xl hover:bg-green-200 duration-300
                text-[16px] sm:text-[18px] text-gray-700 font-semibold'
              >
                {item.Icon}
                {item.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Food Grid */}
      <section className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-4 px-4 sm:px-6 md:px-10 pt-6 md:pt-10'>
        {cate.length ? (
          cate.map(item => (
            <Card
              key={item.id}
              id={item.id}
              name={item.food_name}
              price={item.price}
              image={item.food_image}
              type={item.food_type}
            />
          ))
        ) : (
          <div className='col-span-full text-center text-xl font-semibold text-gray-600'>
            No Dish Found
          </div>
        )}
      </section>

      {/* Cart Drawer (full-screen on mobile) */}
      <aside className={`fixed inset-y-0 right-0 w-full sm:w-[70vw] md:w-[40vw]
        bg-white shadow-xl p-5 sm:p-8 flex flex-col transition-transform duration-200 z-50
        ${showcard ? 'translate-x-0' : 'translate-x-full'}`}>

        <header className='flex items-center justify-between'>
          <span className='text-green-500 text-lg font-semibold'>Order Items</span>
          <RxCross1
            className='h-5 w-5 text-green-500 cursor-pointer hover:text-gray-800'
            onClick={() => setShowcard(false)}
          />
        </header>

        {items.length ? (
          <>
            <div className='mt-6 flex flex-col gap-4 overflow-y-auto flex-1'>
              {items.map(item => (
                <Card2
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              ))}
            </div>

            <div className='border-t border-gray-300 mt-5 pt-4 flex flex-col gap-2'>
              <div className='flex justify-between font-semibold'>
                <span>Subtotal</span>
                <span className='text-green-500'>Rs{subtotal}/-</span>
              </div>
              <div className='flex justify-between font-semibold'>
                <span>Delivery Fee</span>
                <span className='text-green-500'>Rs{deliveryFee}/-</span>
              </div>
              <div className='flex justify-between font-semibold'>
                <span>Taxes</span>
                <span className='text-green-500'>Rs{taxes}/-</span>
              </div>
            </div>

            <div className='flex justify-between items-center font-semibold mt-3'>
              <span className='text-xl'>TOTAL</span>
              <span className='text-xl text-green-500'>Rs{total}/-</span>
            </div>

            <button
              className='w-full sm:w-[80%] mx-auto p-3 mt-4 bg-green-500 rounded-lg
              text-white hover:bg-green-400 transition-all'
              onClick={() => toast.success('Order Placed')}
            >
              Place Order
            </button>
          </>
        ) : (
          <div className='text-center font-semibold text-2xl text-green-500 mt-10'>
            Empty Cart
          </div>
        )}
      </aside>
    </div>
  )
}

export default Home