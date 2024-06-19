import React from 'react'
import Header from './Components/header'
import Body from './Components/body'
import Footer from './Components/footer'

const App = () => {
  return (
    <div className='h-full font-sans antialiased bg-white text-gray-950 selection:bg-primary-500 selection:text-white'>
      <Header />
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
