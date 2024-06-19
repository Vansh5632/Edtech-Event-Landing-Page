import React from 'react'

const body = () => {
  return (
    <div>
      <main>
        <section>
            <div id="div1">
                <div id="start" className='flex flex-col items-center p-4 gap-3 text-center'>
                    
                    <h1 className='text-[50px] font-[800]  leading-none items-center justify-center'>
                        
                        <span className='text-lime-500'>Attend Live</span>
                        <br />
                        Classes Every Week
                    </h1>
                    
                    <h2 className='text-left leading-7 font-sans text-lg mt-3'>Join founders, freelancers, designers, FAANG engineers, indie hackers, and more in our 24/7 WhatsApp Group for less than a cup of coffee. </h2>
                    <button className='bg-lime-500 p-2 text-lg border-spacing-0 rounded-xl mt-4' >Join 24/7 WhatsApp + discord at $5</button>
                </div>
            </div>
        </section>
      </main>
    </div>
  )
}

export default body
