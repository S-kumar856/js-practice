import React from 'react'
import MenuList from '../components/MenuListData'

const Menu = () => {
    return (
        <div className='menu-cards flex flex-col items-center justify-center'>
            <div className='md:grid grid-cols-4 gap-10'>
            {MenuList.map((item,index) => {
                return (
                    <div key={index} className='flex flex-col items-center gap-5 cursor-pointer'>
                        <div className="circle">
                            <img src={item.image} alt="image" className='w-50 h-50 rounded-full'/>
                        </div>
                        <span className='text-2xl font-semibold'>{item.name}</span>
                    </div>
                )
            })}
            </div>

        </div>
    )
}

export default Menu
