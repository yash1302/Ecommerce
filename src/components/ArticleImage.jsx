import React from 'react'

const ArticleImage = (props) => {
    const {heading,img,title,button} = props.obj
  return (
    <div className='flex flex-col justify-center items-center gap-4 mt-6' >
        <p className='font-display font-light text-2xl tracking-wide' >{heading}</p>
        <img className='w-[30rem] h-[40rem] object-cover' src={img} alt="" />
        <p className='font-openSans font-light text-md tracking-normal lg:tracking-wide h-10 text-center'>{title}</p>
        <p className='font-openSans font-light text-md underline underline-offset-2 hover:cursor-pointer'>{button}</p>
    </div>
  )
}

export default ArticleImage