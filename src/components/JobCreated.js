import React from 'react'
import CV from './CS.png'
import CompanyLayOut from './CompanyLayOut'
import { useNavigate } from 'react-router-dom'
const JobCreated = () => {
    const navigate = useNavigate();
    return (
        <CompanyLayOut>
            <div className=' py-[3%] px-[4%] rounded- xl w-full bg-white rounded-3xl shadow-2xl shadow-slate-600'>
                <div>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='bg-white  w-[100px] h-[100px] border-gray-300 shadow-lg border-2 rounded-xl'>
                                <img src={CV} className='pt-[20px]'></img>
                            </div>
                            <div>
                                <h1 className='text-2xl text-gray-500 font-bold'>UI/UX Designer</h1>
                                <h1 className='text-lg text-gray-500 font-semibold'>Kigali, Rwanda</h1>
                            </div>
                        </div>
                        <div className='grid gap-1'>
                            <h1 className='text-gray-500 font-semibold text-xl'>4 openings</h1>
                            <h1 className='text-gray-500 font-semibold text-xl'>6 days ago</h1>
                        </div>
                        <div className='grid gap-2'>
                            <h1 className='h1 font-semibold text-xl px-[24%]'>Full time</h1>
                            <button onClick={() => navigate('/ViewApplies')} className='post w-[180px] font-bold h-[50px] rounded-3xl text-white'>View applies</button>
                        </div>
                    </div>
                </div>
                <p className='h-[2px] w-full bg-gray-400 my-5'></p>
                <div>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='bg-white  w-[100px] h-[100px] border-gray-300 shadow-lg border-2 rounded-xl'>
                                <img src={CV} className='pt-[20px]'></img>
                            </div>
                            <div>
                                <h1 className='text-2xl text-gray-500 font-bold'>UI/UX Designer</h1>
                                <h1 className='text-lg text-gray-500 font-semibold'>Kigali, Rwanda</h1>
                            </div>
                        </div>
                        <div className='grid gap-1'>
                            <h1 className='text-gray-500 font-semibold text-xl'>4 openings</h1>
                            <h1 className='text-gray-500 font-semibold text-xl'>6 days ago</h1>
                        </div>
                        <div className='grid gap-2'>
                            <h1 className='h1 font-semibold text-xl px-[24%]'>Full time</h1>
                            <button onClick={() => navigate('/ViewApplies')} className='post w-[180px] font-bold h-[50px] rounded-3xl text-white'>View applies</button>
                        </div>
                    </div>
                </div>
                <p className='h-[2px] w-full bg-gray-400 my-5'></p>
            </div>
        </CompanyLayOut>
    )
}

export default JobCreated
