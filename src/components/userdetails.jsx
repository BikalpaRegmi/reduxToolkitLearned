import React from 'react'
import { Deleteusers } from './deleteusers'
import {fakeUserData} from '../api'
import DisplayUsers from './DisplayUsers'
import {useDispatch} from 'react-redux';
import { addUsers } from "../store/slices/userSlice";
const Userdetails = () => {
  const dispatch = useDispatch();
  const addNewUsers = (name) =>{
   dispatch(addUsers(name));
  }
  return (
    <>
    <div className=' flex justify-around text-2xl mt-5 pb-3'>
      <h1>List of current users</h1>
<button className='border p-1 border-solid border-3 cursor-pointer hover:shadow-md hover:shadow-green-700 rounded-lg' title='Add user details' onClick={()=>addNewUsers(fakeUserData())}>Add new users</button>   
 </div>
  <DisplayUsers/>
  
 <div className='text-center '>
  <Deleteusers className=''/>

 </div>
 </>
  )
}

export { Userdetails}
