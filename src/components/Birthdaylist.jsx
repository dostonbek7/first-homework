import React from 'react'

function Birthdaylist({birthday, handleDelete}) {
  return (
    <div className=' bg-white px-7 py-8'>
    {birthday && birthday.map((item)=>{
      const {id, name, age, image} = item;
      return(
        <div className='flex items-center justify-between gap-20 mb-10 last:mb-0' key={id}>
          <div className='flex items-center gap-5'>
          <img className='w-[100px] h-[100px] object-cover rounded-full' src={image} alt="image"/>
          <div>
            <h3 className='font-nunito font-bold'>{name}</h3>
            <p className='font-nunito font-medium'>{age} yeras old</p>
          </div>
          </div>
          <button className='btn btn-error text-white' onClick={()=>handleDelete(item.id)}>Delete</button>
        </div>
      )
    })}
    </div>
  )
}

export default Birthdaylist