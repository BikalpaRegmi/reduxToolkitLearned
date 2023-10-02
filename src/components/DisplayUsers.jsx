import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUsers } from '../store/slices/userSlice';
const DisplayUsers = () => {
  const dispatch = useDispatch();
  const deleteUser=(ind)=>{
   dispatch(deleteUsers(ind))
  }
    const data = useSelector((state)=>{
        return state.users;
    })
    console.log(data);
  return (
    <div>
    { data.map((curval,ind)=>{
       return(  
        <>
        <ol type='1' key={ind} className=''>
       
    <li className='text-2xl p-3 pl-12 flex justify-between bg-green-900'>{curval} <button className='bg-red-600 px-3 h-9 rounded-full cursor-pointer text-xl ' onClick={()=>deleteUser(ind)}>x</button></li>
    
    <hr className='py-1'/>
   </ol>
</>
    )})

    }
    
    </div>
  )
}

export default DisplayUsers;
