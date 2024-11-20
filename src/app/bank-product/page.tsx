"use client"
import Sidebar from '@/app/components/sidebar/page';
import Rating from '@/app/components/rating/page';
import { ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';
import ProductBank from '../utils/data/product-bank';
import { useRouter } from 'next/navigation';

export default function BankProduct(){
    const [highlight, setHighlight] = useState<boolean>(false);
    const router = useRouter();

    const handleDetailButton = (id: string) => {
        router.push(`/edit-product-detail/${id}`)
    }
    return(
        <main className="grid sm:grid-cols-1 lg:grid-cols-7 bg-gray-200 text-black capitalize">
            <Sidebar/>
            <section className=' flex flex-col col-span-6'>
                {/* top */}
                <section className='flex justify-between border-b-2 xs:py-1 md:py-3 border-gray-400 min-w-full pr-4 bg-white'>
                    <p className='xs:text-sm md:text-xl ml-3'>product</p>
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
                {/* BANK/DEV */}
                <section className='flex flex-row justify-center bg-white py-4'>
                    <div>
                        <p className={`${!highlight ? 'font-bold text-blue-500 underline decoration-blue-500' : ''} mx-3 cursor-pointer`} onClick={()=>setHighlight(false)}>Bank</p>    
                    </div>
                    <div>
                        <p className={`${highlight ? 'font-bold text-blue-500 underline decoration-blue-500' : ''} mx-3 cursor-pointer`} onClick={()=>setHighlight(true)}>Developer</p>
                    </div>
                </section>
                {/* BANK SIDE */}
                {!highlight ? (
                    <section>
                        <section className='grid grid-cols-1'>
                            <section className='grid xs:grid-cols-2 md:grid-cols-5 gap-10 m-8'>
                                <div className='bank-card'>
                                    <div className='flex justify-center m-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                                    </div>
                                    <p>KPR dan Multiguna</p></div>
                                <div className='bank-card'>
                                    <div className='flex justify-center m-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                                    </div>
                                    <p>Refinancing</p>
                                </div>
                                <div className='bank-card'>
                                    <div className='flex justify-center m-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M240-160q-66 0-113-47T80-320v-320q0-66 47-113t113-47h480q66 0 113 47t47 113v320q0 66-47 113t-113 47H240Zm0-480h480q22 0 42 5t38 16v-21q0-33-23.5-56.5T720-720H240q-33 0-56.5 23.5T160-640v21q18-11 38-16t42-5Zm-74 130 445 108q9 2 18 0t17-8l139-116q-11-15-28-24.5t-37-9.5H240q-26 0-45.5 13.5T166-510Z"/></svg>
                                    </div>
                                    <p>Kredit Modal Usaha dan Investasi</p>
                                </div>
                                <div className='bank-card'>
                                    <div className='flex justify-center m-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z"/></svg>
                                    </div>
                                    <p>Deposito</p>
                                </div>
                                <div className='bank-card'>
                                    <div className='flex justify-center m-4'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
                                    </div>
                                    <p>Take Over dan Bridging Loan</p></div>
                            </section>
                        </section>
                        <section className="flex flex-row xs:justify-start md:justify-normal flex-wrap mx-8 gap-10 cursor-pointer xs:text-xs lg:text-base">
                            <div className='flex bg-white p-2 rounded-md my-auto '>
                                <input className='w-72' type="search" name="" id="" placeholder='Cari berdasarkan nama'/>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#3498eb"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>                     
                            </div>
                            <div className='flex bg-white p-2 rounded-md cursor-pointer'>
                                <select className='bg-white cursor-pointer' name="kredit" id="">
                                    <option value="1">Kredit Pemilikan</option>
                                    <option value="2">Kredit Pemilikan</option>
                                    <option value="3">Kredit Pemilikan</option>
                                    <option value="4">Kredit Pemilikan</option> 
                                </select>
                            </div>
                            <div className='flex bg-white p-2 rounded-md my-auto cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m80-280 150-400h86l150 400h-82l-34-96H196l-32 96H80Zm140-164h104l-48-150h-6l-50 150Zm328 164v-76l202-252H556v-72h282v76L638-352h202v72H548ZM360-760l120-120 120 120H360ZM480-80 360-200h240L480-80Z"/></svg>
                                <p className='mx-2 font-bold my-auto'>Sort</p>
                            </div>
                            <div className='flex bg-blue-400 text-white p-2 rounded-md cursor-pointer'>
                                <Plus />
                                <p className='mx-2 my-auto font-bold'>Tambah Product</p>
                            </div>
                        </section>
                        <section>
                            {ProductBank.map((item, index) => (
                                <div key={index}>
                                    <div className="flex xs:flex-col lg:flex-row m-8 bg-white p-4 rounded-md shadow-lg">
                                        <section className='xs:flex xs:flex-col md:grid md:grid-cols-2'>
                                            <div className='xs:col-span-1 md:col-span-2 m-4'>
                                                <picture className='grid place-content-center'>
                                                    <img className='max-w-48 h-16' src={item.BankImg} alt="" />
                                                </picture>
                                            </div>
                                            <div className="flex items-center justify-center flex-col text-center px-6 md:border-r-2 md:border-gray-400">
                                                <span>rating : </span>
                                                <Rating rate={item.Rating} />
                                                <span className='text-xs font-bold flex items-end'>{' '} {item.Review} Review</span>
                                            </div>
                                            <div className="flex flex-col items-center text-center px-6 justify-center">
                                                <span>user :{' '}</span>
                                                <span>{item.Users}</span>
                                                <span className='text-xs font-bold flex items-end'>{' '} users yearsly</span>
                                            </div>
                                        </section>
                                        <section className='grid grid-cols-2 xs:text-xs md:text-sm mx-10'>
                                            <div className="col-span-2 xs:text-sm md:text-xl my-2">
                                                <div><span className='capitalize font-bold'>{item.BankName}{' '}</span><span className='capitalize font-bold text-blue-400'>{item.Additional}</span></div>
                                            </div>
                                            <div className='grid grid-cols-1 gap-3'>
                                                <div className="flex gap-2">
                                                    <div className='my-auto'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/></svg>
                                                    </div>
                                                    <p className='my-auto'>Fix Rate (year): {item.FixRate}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className='my-auto'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
                                                    </div>
                                                    <p className='my-auto'>max-tenor: {item.MaxTenor}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className='my-auto'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z"/></svg>
                                                    </div>
                                                    <p className='my-auto'>loan to value: {item.LoanToValue}</p>
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-1 gap-3'>
                                                <div className="flex gap-2">
                                                    <div className='my-auto'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg>
                                                    </div>
                                                    <p className='my-auto'>jaminan: {item.Jaminan}</p></div>
                                                <div className="flex gap-2">
                                                    <div className='my-auto'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
                                                    </div>
                                                    <p className='my-auto'>target: {item.Target}</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className='my-auto'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M444-200h70v-50q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q32 0 50 15.5t26 38.5l64-26q-11-35-40.5-61T516-710v-50h-70v50q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-33 0-58.5-20.5T390-396l-66 26q14 48 43.5 77.5T444-252v52Zm36 120q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                                    </div>
                                                    <p className='my-auto'>komisi: {item.Komisi}</p>
                                                </div>
                                            </div>
                                        </section>
                                        <section className='grid place-content-center mx-auto xs:mt-2 lg:mt-0'>
                                            <div className='xs:text-xs md:text-lg border-2 border-gray-200 shadow-lg px-5 py-2 text-center text-blue-400 font-bold cursor-pointer flex justify-center' onClick={()=>{handleDetailButton(item.id)}}>Detail</div>
                                        </section>
                                    </div>
                                </div>
                            ))}
                        </section>    
                    </section>  
                ):(
                    <section></section>
                )}
                
            </section>
        </main>
    )
}