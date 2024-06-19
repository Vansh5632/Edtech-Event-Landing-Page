import React from 'react'

const header = () => {
return (
    <div>
        <header className=''>
            <div className='flex justify-between p-4 sticky top-0 z-10 shadow-md'>
                 <img src="src\assets\images\logo.svg" alt="" /> 
                 <button className='bg-black text-white p-1.5 rounded-[20px] font-bold text-[20px]'>Join Community</button>
            </div>
        </header>
    </div>
)
}

export default header
