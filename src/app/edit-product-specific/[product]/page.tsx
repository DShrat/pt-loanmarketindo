"use client"
import Sidebar from '@/app/components/sidebar/page';
import { ChevronDown, StepBack, Calendar, ArrowBigRight, Plus, Minus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function EditProductDetail(){
    const router = useRouter();
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
                        <StepBack />
                        <p className='capitalize xs:text-xs md:text-base my-auto'>Edit Product</p>
                    </div>
                </section>
                {/* form */}
                <section className='grid xs:grid-cols-1 md:grid-cols-2 gap-6 bg-white m-4 p-6'>
                    <div>
                        <div className='eps-titleform'>
                            <p className='eps-title'>Bank</p>
                            <div className='flex bg-white rounded-md cursor-pointer w-full'>
                                <select className='bg-white cursor-pointer w-full border border-gray-400 p-2 rounded-sm' name="kredit" id="">
                                    <option value="1">mandiri</option>
                                    <option value="2">mandiri</option>
                                    <option value="3">mandiri</option>
                                    <option value="4">mandiri</option> 
                                </select>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className='eps-title'>Jenis Product</p>
                            <div className='flex bg-white rounded-md cursor-pointer w-full'>
                                <select className='bg-white cursor-pointer w-full border border-gray-400 p-2 rounded-sm' name="kredit" id="">
                                    <option value="1">kredit pemilikan rumah secondary (KPR Secondary)</option>
                                    <option value="2">kredit pemilikan rumah secondary (KPR Secondary)</option>
                                    <option value="3">kredit pemilikan rumah secondary (KPR Secondary)</option>
                                    <option value="4">kredit pemilikan rumah secondary (KPR Secondary)</option> 
                                </select>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <div className='flex flex-row gap-4'>
                                <input type="checkbox" name="promotional" id="" />
                                <p className='eps-title'>promotional product</p>
                            </div>
                            <div className='flex flex-row w-full bg-gray-400 justify-between px-3 py-1 rounded-sm'>
                                <div className='flex flex-row my-auto gap-5'>
                                    <p>22/01/2010</p>
                                    <ArrowBigRight />
                                    <p>22/02/2010</p>
                                </div>
                                <div className='my-auto'>
                                    <Calendar />
                                </div>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className='eps-title'>Jaminan</p>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Ruko</p>
                                    </div>    
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Rumah</p>
                                    </div>    
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Kendaraan Pribadi</p>
                                    </div>    
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Slip Gaji</p>
                                    </div>    
                                </div>
                                <div>
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Rukan</p>
                                    </div>    
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Apartemen</p>
                                    </div>    
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Sertifikat Perusahaan</p>
                                    </div>     
                                </div>
                                
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className='eps-title'>target market</p>
                            <div className='grid grid-cols-2'>
                                <div>
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Pengusaha</p>
                                    </div>    
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Profesional</p>
                                    </div>    
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>ASN</p>
                                    </div>    
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>TNI</p>
                                    </div>    
                                </div>
                                <div>
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Karyawan</p>
                                    </div>    
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Milenial</p>
                                    </div>    
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>POLRI</p>
                                    </div>     
                                    <div className='flex gap-3'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Lainnya</p>
                                    </div>     
                                </div>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className="eps-title">Komisi</p>
                            <div className='flex justify-between border border-gray-400'>
                                <Plus stroke='white' className='bg-blue-400'/>
                                <p className='text-center w-full'>1%</p>
                                <Minus stroke='white' className='bg-blue-400'/>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className="eps-title">Appraisal</p>
                            <div className='flex justify-between border border-gray-400'>
                                <Plus stroke='white' className='bg-blue-400'/>
                                <p className='text-center w-full'>1%</p>
                                <Minus stroke='white' className='bg-blue-400'/>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className="eps-title">Floating</p>
                            <div className='flex justify-between border border-gray-400'>
                                <Plus stroke='white' className='bg-blue-400'/>
                                <p className='text-center w-full'>1%</p>
                                <Minus stroke='white' className='bg-blue-400'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="eps-titleForm">
                            <p className="eps-title">Loan to Value</p>
                            <div className='flex justify-between border border-gray-400'>
                                <Plus stroke='white' className='bg-blue-400'/>
                                <p className='text-center w-full'>1%</p>
                                <Minus stroke='white' className='bg-blue-400'/>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className="eps-title">Penalty Fee</p>
                            <div className='flex justify-between border border-gray-400'>
                                <Plus stroke='white' className='bg-blue-400'/>
                                <p className='text-center w-full'>0%</p>
                                <Minus stroke='white' className='bg-blue-400'/>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className="eps-title">interest rate</p>
                            <div className='flex justify-between border border-gray-400'>
                                <Plus stroke='white' className='bg-blue-400'/>
                                <p className='text-center w-full'>3,65%</p>
                                <Minus stroke='white' className='bg-blue-400'/>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className="eps-title">fix rate</p>
                            <div className='flex justify-between border border-gray-400'>
                                <Plus stroke='white' className='bg-blue-400'/>
                                <p className='text-center w-full'>3,88%</p>
                                <Minus stroke='white' className='bg-blue-400'/>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className="eps-title">fix rate (year)</p>
                            <div className='flex justify-between border border-gray-400'>
                                <Plus stroke='white' className='bg-blue-400'/>
                                <p className='text-center w-full'>3,88%</p>
                                <Minus stroke='white' className='bg-blue-400'/>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className="eps-title">max tenor (year)</p>
                            <div className='flex justify-between border border-gray-400'>
                                <Plus stroke='white' className='bg-blue-400'/>
                                <p className='text-center w-full'>3,88%</p>
                                <Minus stroke='white' className='bg-blue-400'/>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className="eps-title">keterangan</p>
                            <div className='flex justify-between'>
                                <textarea className='w-full border border-gray-400 h-32 rounded-sm p-3 text-wrap break-words' name="" id="" defaultValue='Mandiri KRP adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak'/>
                            </div>
                        </div>
                        <div className="eps-titleForm">
                            <p className="eps-title">url</p>
                            <div className='flex justify-between'>
                                <input className='w-full border border-gray-400 rounded-sm p-3' type="text" name="" id="" defaultValue={'null'}/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    )
}