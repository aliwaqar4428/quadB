import React from 'react'

function Hero() {
  return (
    <div>
        <div className="mx-auto">
            <h4 className='text-gray-400 font-normal text-sm '> Best Price to Trade</h4>
            <div className='flex justify-between mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"'>
                
                
                    <div className='flex flex-col'>
                        <h4 className='text-teal-300 text-xl font-bold'	>0.1 %</h4>
                        <p className='text-gray-400	text-sm'>5 Mins</p>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-teal-300 text-xl font-bold	'>0.96 %</h4>
                        <p className='text-gray-400 text-sm	'>1 Hour</p>
                    </div>
                
               
                    <div className='flex flex-col'>
                        <h1 className='text-7xl	 text-white font-medium	'>₹ 26,56,111</h1>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-teal-300 text-xl font-bold'	>2.73 %</h4>
                        <p className='text-gray-400	text-sm'>1 Day</p>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='text-teal-300 text-xl font-bold	'>7.51 %</h4>
                        <p className='text-gray-400 text-sm	'>7 Days</p>
                    </div>
                </div>
                <p className='text-gray-400 font-normal text-sm '>Average BTC/INR net pride Including commission</p>
      </div>
    </div>
  )
}

export default Hero