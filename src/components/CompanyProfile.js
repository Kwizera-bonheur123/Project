import React from 'react'
import LocationLogo from './Vector.png'
import { useNavigate } from 'react-router-dom'
import Photo from '../components/add photo.png'
import email from './Group 118994.png'
import phone from './Group 118999.png'
import CS from './CS.png'
import CompanyLayOut from './CompanyLayOut'
const CompanyProfile = () => {
    const navigate = useNavigate();
    const Edit = () => {
        navigate("/EditProfilePictute");
    }
    return (
        <CompanyLayOut>
            <div className='w-full bg-white'>
                <div style={{
                    backgroundImage: `url(${CS})`,
                    backgroundSize: '100px 60px',
                }} onClick={Edit} className='border-2 shadow-lg border-gray-300 w-full h-[130px]'>
                    <div className='absolute bg-white shadow-xl border-2 border-gray-500 rounded-full w-[120px] h-[120px] mt-[70px] ml-[25px] '>
                        <img src={CS} className='w-full h-full rounded-full' ></img>
                    </div>
                    <img src={Photo} className='absolute mt-[150px] ml-[127px]'></img>
                    <div className='absolute mt-[145px] ml-[160px]'>
                        <h1 className='h1 text-xl font-bold'>Creative Solution</h1>
                        <div className='flex gap-2'>
                            <img src={LocationLogo} className=''></img>
                            <h1 className='text-gray-600 text-[10px] text-semibold'>Kigali Rwanda</h1>
                        </div>
                    </div>
                </div>
                <div className='bg-gray-200 h-screen max-h-[200%] w-full mt-[80px]'>
                    <div className='px-[30%]'>
                        <h1 className='text text-2xl font-bold absolute mt-[40px]'>Personal information</h1>
                        <div className='flex absolute mt-[100px]'>
                            <img src={email}></img>
                            <div>
                                <h1 className='text-md text font-semibold'>Email address</h1>
                                <h1 className='text-lg font-bold text'>Creative@gmail.com</h1>
                            </div>
                        </div>
                        <div className='flex absolute mt-[180px]'>
                            <img src={phone}></img>
                            <div>
                                <h1 className='text-md text font-semibold'>Phone number</h1>
                                <h1 className='text-lg font-bold text'>+250781353224</h1>
                            </div>
                        </div>
                        <div className='flex absolute mt-[240px]'>
                            <img src={phone}></img>
                            <div>
                                <h1 className='text-md text font-semibold'>Address</h1>
                                <h1 className='text-lg font-bold text'>2KG 412 ST</h1>
                            </div>
                        </div>
                        <p className='bg-black h-[1px] w-[570px] absolute mt-[330px]'></p>
                        <h1 className='text font-bold text-[30px] absolute mt-[350px]'>About Company</h1>
                        <p className='absolute mt-[400px] font-bold text-md text'>Lorem ipsum dolor sit amet consectetur. Mauris enim sed sit <br></br>pellentesque libero cras urna in accumsan. Faucibus nunc <br></br>aliquet commodo id lectus imperdiet imperdiet.<br></br><br></br>Urna malesuada lectus augue laoreet. Mattis ac blandit fringilla <br></br>amet faucibus tincidunt neque libero a.<br></br>Orci metus placerat gravida tempus viverra purus. Et sed gravida<br></br>viverra vitae at at tincidunt molestie quisque. Donec volutpat<br></br>mauris in cursus a ultrices curabitur.<br></br><br></br>

                            Ornare neque diam id quam aliquam aliquet ultrices. Magna <br></br>amet aliquam mi mauris vel morbi.</p>
                    </div>
                </div>
            </div>
        </CompanyLayOut>
    )
}

export default CompanyProfile
