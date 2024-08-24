import React from 'react'
import Photos from './Photos'

const PhotoGallery = () => {
  return (
    <div className='mt-[6rem] container flex flex-col items-center justify-center'>
        <p className='text-2xl font-thin font-display mb-4'>Everlane On You</p>
        <p>Share your latest look with #EverlaneOnYou for a chance to be featured.</p>
        <p>Add Your Photo</p>
        <div>
            <Photos/>
        </div>
    </div>
  )
}

export default PhotoGallery