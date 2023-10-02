import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAllUsers } from '../store/slices/userSlice';
const Deleteusers = () => {
  const dispatch = useDispatch();
  const clearUsers =() =>{
   dispatch(removeAllUsers())
  }
  return (
    <div>
      <button onClick={clearUsers} className=' cursor-pointer hover:border-rose-700 border-2 rounded-lg p-2 mt-3' title='Clear all users'>Remove All Users</button>
    </div>
  )
}

export  {Deleteusers}
