import React from 'react'

function NotesCard(){
    return(
        <div className='flex p-1 min-h-20 bg-[#2d2929] rounded-sm border-[#373737] border-solid border-2'>
            <h2>English Group</h2>
        </div>
    )
}

const NotesMenu = () => {

    const cards = [1,5,,7,8,9,9]

  return (
    <div className='w-full'>NotesMenu
        <div className='flex gap-2 p-3 w-full bg-red-500 flex-wrap'>
         {cards.map((e,index)=><NotesCard key={index}/>)}
        </div>

    </div>
  )
}

export default NotesMenu