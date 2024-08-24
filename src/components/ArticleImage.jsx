import React from 'react'

const ArticleImage = (props) => {
    const {heading,img,title,button} = props.obj
  return (
    <div className=' w-[25rem] h-[28rem] flex flex-col justify-center items-center gap-4'>
        <p className='font-display font-normal text-xl tracking-wide' >{heading}</p>
        <img className='w-full h-full object-cover' src={img} alt="" />
        <p className='font-openSans font-light text-sm'>{title}</p>
        <p className='font-openSans font-light text-sm underline underline-offset-2 hover:cursor-pointer'>{button}</p>
    </div>
  )
}

export default ArticleImage