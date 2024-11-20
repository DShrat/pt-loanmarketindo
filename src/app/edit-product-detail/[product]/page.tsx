"use client"

import Sidebar from '@/app/components/sidebar/page';
import { ChevronDown, StepBack, Edit, TrashIcon } from 'lucide-react';
import { useRouter, useParams } from 'next/navigation';

export default function EditProductDetail(){
    const router = useRouter();
    const params = useParams();

    const productId = params?.product;

    return(
        <main className="grid sm:grid-cols-1 lg:grid-cols-7 bg-gray-200 text-black capitalize">
            <Sidebar/>
            <section className=' flex flex-col col-span-6'>
                {/* top */}
                <section className='flex justify-between border-b-2 xs:py-1 md:py-3 border-gray-400 min-w-full px-4 bg-white'>
                    <p className='xs:text-sm md:text-xl'>product</p>
                    <section className='flex items-center'>
                        <div className='border-l-2 border-r-2 border-gray-400 px-3 flex align-middle items-center gap-1'>
                        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="40" height="40" fill="url(#pattern0_6757_11651)"/>
                            <defs>
                            <pattern id="pattern0_6757_11651" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_6757_11651" transform="scale(0.015625)"/>
                            </pattern>
                            <image id="image0_6757_11651" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACLUlEQVR4nO2aO4tTQRSAPx+JyBIsrDQRtli0sBH8DQuCksrexkJ3YWHttxA7QdTGPyA2S2AXTGEfIvHVKLauu40LouJKEBfhysAEwmHuNa+5mTv3fHAgcMOcx53zGO6AoiiKouTNOaAFHFjZAi5QIue/AYmQ7/ZZ9LQczg9kkxJwkBGAn0TMCaAJHGYEwDy7BlSIiLPAE+BHhuNSvgIPgNMUmApwF+iP4birMK4BRygYdaA7heNS2sApCsJ54EuKI7vAPWDZBslQtTPAVZsqrhZp5H0RUqIBfHYYvwdcB46OsIYJyJ2UbmF21UkC5Tjw1mH0U2BhgvXMDnnlWO8ZgbLhMPb+lAXMBO6FY13TKoNiEfjjmOpmUb1NED46aklQqfBQGPgJqM1w/YvAb6HjJoFQcxSsGx70PHJ0hSBoCsN2gGMe9Jxx7IJLBMBjYZRJB1+0ha51AqAnjLriUdeK0LVNAOwIo5Y86rosdH0gAPrCqEmGnnFOlsO69gmARIjvaXNY119KFoB56PsvGgB0B6ApgNYAtAiiXQBtg/hH5wB0EEInQXQURs8C6GEIPQ0SAEmZT4MNYYz5PuAb+Q1i8JV5Ls63hTGdHPR2hM7neQchCVw0AL5JAhcNQKh0UopX3f7Ou5jmTlb7mkc7zR0ZAON0qQLQS0kB1zzxkghZHaOS3yJCqsC7EZx/HdtlaXnNxXWXcCBv7H+ipgLctrc+f1np2m0f7ZtXFEVRCJB/o+dK8t0n4NEAAAAASUVORK5CYII="/>
                            </defs>
                        </svg>
                        <ChevronDown className='h-5 w-5' />
                        </div>
                        <div className='border-r-2 border-gray-400 px-3 flex align-middle items-center gap-1'>
                        <p className='xs:text-xs md:text-lg uppercase'>yohannes affandy</p>
                        <ChevronDown className='h-5 w-5' />
                        </div>
                    </section>
                </section>
                {/* option */}
                <section className='flex flex-row justify-between bg-white py-4 px-4'>
                    <div className='flex flex-row items-center cursor-pointer' onClick={()=>{router.back()}}>
                        <StepBack/>
                        <p className='capitalize xs:text-xs md:text-base my-auto'>bank product detail</p>
                    </div>
                    <div className='flex flex-row gap-5 text-sm'>
                        <div className='flex flex-row gap-3 bg-blue-600 py-1 px-2 rounded-sm cursor-pointer' onClick={()=>{router.push(`/edit-product-specific/${productId}`)}}>
                            <Edit stroke='white'/>
                            <p className="capitalize text-white my-auto xs:text-xs md:text-base">edit product</p>
                        </div>
                        <div className='flex flex-row gap-3 bg-red-600 py-1 px-2 rounded-sm cursor-pointer'>
                            <TrashIcon stroke='white'/>
                            <p className="capitalize text-white my-auto xs:text-xs md:text-base">delete product</p>
                        </div>
                    </div>
                </section>
                {/* form */}
                <section className='flex flex-col xs:gap-2 md:gap-5 bg-white m-4 p-6'>
                    <div className='topForm'>
                        <p className='p-1'>bank</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'Mandiri'} disabled/>
                    </div>
                    <div className='topForm'>
                        <p className='p-1'>nama product</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'bunga spesial tengah imlek 2023'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>jaminan</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'ruko, rukan, rumah, apartemen'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>target market</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'karyawan, pengusaha'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>komisi</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'1 %'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>appraisal</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'1 %'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>floating</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'1 %'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>loan to value</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'1 %'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>penalty fee</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'-'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>interest rate</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'3.65 %'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>fix rate %</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'3.88 %'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>fix rate (year)</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'3'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>max tenor (year)</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'12'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>keterangan</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'Mandiri KRP adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak'} disabled/>
                    </div>
                    <div className="topForm">
                        <p className='p-1'>URL</p>
                        <input className='inputForm' type="text" name="" id="" defaultValue={'null'} disabled/>
                    </div>
                </section>
            </section>
        </main>
    )
}