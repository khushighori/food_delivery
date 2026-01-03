import React , {createContext, useState} from 'react'
import food_items from '../Food'
export const datacontext=createContext()


function Usercontext({children}) {
       let [cate,setcate]=useState(food_items)
    let [input,setInput]=useState("")
    let [showcard,setShowcard]=useState(false)
    let data = {
        input,
        setInput,
        cate,
        setcate,
        showcard,
        setShowcard
    }
  return (
    <div>
        <datacontext.Provider value={data}>
        {children}
        </datacontext.Provider>
    </div>
  )
}

export default Usercontext