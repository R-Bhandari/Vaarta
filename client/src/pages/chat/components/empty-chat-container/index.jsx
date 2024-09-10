import React from 'react'
import Lottie from 'react-lottie'

function EmptyChatContainer() {
  return (
    <div className='flex-1 md:bg-[#1c1d25] md:flex flex-col justify-center intems-center hidden duration-1000 transition-all'>
        <Lottie
        isClickToPauseDisabled={true}
        height={200}
        width={200}
        options={animationDefaultOptions}

        />

    </div>
  )
}

export default EmptyChatContainer