"use client"

import { ChevronDown, ChevronLeft, ChevronRight, Save, User } from "lucide-react";
import Sidebar from "@/app/components/sidebar/page";
import React from "react";
import { useState } from "react";

export default function EditApplication(){
    const [currentStep, setCurrentStep] = useState(2); // Starting at Alamat (index 2)
    const steps = [
        "Pinjaman",
        "Pekerjaan",
        "Alamat",
        "Informasi Asset",
        "Informasi Tambahan",
        "Upload Dokumen",
        "Review",
        "Pilihan Produk & Bank",
        "Bank Officer",
        "Surat Keterangan",
        "PDF CPA",
        "Summary"
      ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
        }
    };
    
    return(
        <main className="grid sm:grid-cols-1 lg:grid-cols-7 bg-gray-200 text-black capitalize">
            <Sidebar/>
            <section className=' flex flex-col col-span-6'>
                {/* TOP */}
                <section className='flex justify-between border-b-2 xs:py-1 md:py-3 border-gray-400 min-w-full pr-4 bg-white'>
                    <p className='xs:text-sm md:text-xl ml-3'>edit application</p>
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
                {/* PROGRESS */}
                <section>
                    <div className="w-full px-8 py-10 bg-white">
                        <div className="relative flex justify-between">
                            {/* bg progress bar */}
                            <div className="absolute top-5 left-0 h-1 w-full bg-gray-200" />
                            
                            {/* aktif */}
                            <div className="absolute top-5 left-0 h-1 bg-blue-500 transition-all duration-500" style={{ width: `${((currentStep) / (steps.length - 1)) * 100}%` }} />
                            
                            {/* Steps */}
                            {steps.map((step, idx) => (
                            <div key={idx} className="relative flex flex-col items-center">
                                {/* Circle */}
                                <div
                                className={`z-10 flex xs:h-4 xs:w-4 md:h-10 md:w-10 items-center justify-center rounded-full border-2 transition-colors duration-500
                                    ${idx < currentStep 
                                    ? 'border-blue-500 bg-blue-500 text-white'  // Completed
                                    : idx === currentStep
                                    ? 'border-blue-500 bg-white text-blue-500'  // Current
                                    : 'border-gray-300 bg-white text-gray-300'  // Upcoming
                                    }`}
                                >
                                {idx < currentStep ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <span className="xs:text-xs md:text-sm font-medium">{idx + 1}</span>
                                )}
                                </div>
                                
                                {/* Step Label */}
                                <span 
                                className={`absolute mt-12 w-32 text-center text-xs xs:invisible lg:visible
                                    ${idx <= currentStep ? 'text-blue-500' : 'text-gray-400'}
                                `}
                                >
                                {step}
                                </span>
                            </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* FORM */}
                <section>
                    <div className="flex flex-row justify-between px-8 mt-4">
                        <button 
                            onClick={handlePrev}
                            disabled={currentStep === 0}
                            className="p-2 bg-blue-500 text-white rounded-full disabled:bg-gray-300"
                            >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <p className="my-auto font-bold text-lg">{steps[currentStep]}</p>
                        <button 
                            onClick={handleNext}
                            disabled={currentStep === steps.length - 1}
                            className="p-2 bg-blue-500 text-white rounded-full disabled:bg-gray-300"
                            >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </section>
                {currentStep == 2 &&(
                    <section className="mx-8 my-4 bg-white">
                        <div className="bg-white p-4">
                            <p className="ea-titleForm">data KTP</p>
                            <div className="ea-formTemp">
                                <div>
                                    <div>
                                        <p className="ea-subTitleForm">Alamat Lengkap (Jalan, Komplek, RT/RW)</p>
                                        <input className="ea-textInputArea" type="textArea" name="" id="" placeholder="--Isi Alamat Lengkap--"/>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">Provinsi</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option' name="kredit" id="">
                                                <option value="1">--Pilih Provinsi--</option>
                                                <option value="2">--Pilih Provinsi--</option>
                                                <option value="3">--Pilih Provinsi--</option>
                                                <option value="4">--Pilih Provinsi--</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">Kecamatan</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option' name="kredit" id="">
                                                <option value="1">--Pilih Kecamatan--</option>
                                                <option value="2">--Pilih Kecamatan--</option>
                                                <option value="3">--Pilih Kecamatan--</option>
                                                <option value="4">--Pilih Kecamatan--</option> 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="ea-subTitleForm">Kode POS</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Isi Kode POS--</option>
                                                <option value="2">--Isi Kode POS--</option>
                                                <option value="3">--Isi Kode POS--</option>
                                                <option value="4">--Isi Kode POS--</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">kabupaten / kota</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Pilih Kota--</option>
                                                <option value="2">--Pilih Kota--</option>
                                                <option value="3">--Pilih Kota--</option>
                                                <option value="4">--Pilih Kota--</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">kelurahan</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Pilih Kelurahan--</option>
                                                <option value="2">--Pilih Kelurahan--</option>
                                                <option value="3">--Pilih Kelurahan--</option>
                                                <option value="4">--Pilih Kelurahan--</option> 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* FIRST CB */}
                        <div className="flex flex-row justify-between px-4">
                            <div className="flex gap-1">
                                <input type="checkbox" name="" id="" />
                                <p className="capitalize my-auto xs:text-xs md:text-sm">domilisi sesuai KTP</p>
                            </div>
                            <div className="ea-clearButton">
                                <p>CLEAR</p>
                            </div>
                        </div>
                        {/* DATA DOMISILI */}
                        <div className="bg-white p-4">
                            <p className="ea-titleForm">data domisili</p>
                            <div className="ea-formTemp">
                                <div>
                                    <div>
                                        <p className="ea-subTitleForm">Alamat Lengkap (Jalan, Komplek, RT/RW)</p>
                                        <input className="ea-textInputArea" type="textArea" name="" id="" placeholder="--Isi Alamat Lengkap--"/>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">Provinsi</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Pilih Provinsi--</option>
                                                <option value="2">--Pilih Provinsi--</option>
                                                <option value="3">--Pilih Provinsi--</option>
                                                <option value="4">--Pilih Provinsi--</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">Kecamatan</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Pilih Kecamatan--</option>
                                                <option value="2">--Pilih Kecamatan--</option>
                                                <option value="3">--Pilih Kecamatan--</option>
                                                <option value="4">--Pilih Kecamatan--</option> 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="ea-subTitleForm">Kode POS</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Isi Kode POS--</option>
                                                <option value="2">--Isi Kode POS--</option>
                                                <option value="3">--Isi Kode POS--</option>
                                                <option value="4">--Isi Kode POS--</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">kabupaten / kota</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Pilih Kota--</option>
                                                <option value="2">--Pilih Kota--</option>
                                                <option value="3">--Pilih Kota--</option>
                                                <option value="4">--Pilih Kota--</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">kelurahan</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Pilih Kelurahan--</option>
                                                <option value="2">--Pilih Kelurahan--</option>
                                                <option value="3">--Pilih Kelurahan--</option>
                                                <option value="4">--Pilih Kelurahan--</option> 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SECOND CB */}
                        <div className="flex flex-row justify-between px-4">
                            <div className="flex gap-1">
                                <input type="checkbox" name="" id="" />
                                <p className="capitalize my-auto xs:text-xs md:text-sm">alamat tempat bekerja / perusahaan sesuai KTP</p>
                            </div>
                            <div className="ea-clearButton">
                                <p>CLEAR</p>
                            </div>
                        </div>
                        {/* DATA ALAMAT PERUSAHAAN */}
                        <div className="bg-white p-4">
                            <p className="ea-titleForm">data alamat tempat bekerja</p>
                            <div className="ea-formTemp">
                                <div>
                                    <div>
                                        <p className="ea-subTitleForm">Alamat Lengkap (Jalan, Komplek, RT/RW)</p>
                                        <input className="ea-textInputArea" type="textArea" name="" id="" placeholder="--Isi Alamat Lengkap--"/>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">Provinsi</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Pilih Provinsi--</option>
                                                <option value="2">--Pilih Provinsi--</option>
                                                <option value="3">--Pilih Provinsi--</option>
                                                <option value="4">--Pilih Provinsi--</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">Kecamatan</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Pilih Kecamatan--</option>
                                                <option value="2">--Pilih Kecamatan--</option>
                                                <option value="3">--Pilih Kecamatan--</option>
                                                <option value="4">--Pilih Kecamatan--</option> 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className="ea-subTitleForm">Kode POS</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Isi Kode POS--</option>
                                                <option value="2">--Isi Kode POS--</option>
                                                <option value="3">--Isi Kode POS--</option>
                                                <option value="4">--Isi Kode POS--</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">kabupaten / kota</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Pilih Kota--</option>
                                                <option value="2">--Pilih Kota--</option>
                                                <option value="3">--Pilih Kota--</option>
                                                <option value="4">--Pilih Kota--</option> 
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="ea-subTitleForm">kelurahan</p>
                                        <div className='flex bg-white p-2 rounded-md cursor-pointer border border-gray-400'>
                                            <select className='ea-option ' name="kredit" id="">
                                                <option value="1">--Pilih Kelurahan--</option>
                                                <option value="2">--Pilih Kelurahan--</option>
                                                <option value="3">--Pilih Kelurahan--</option>
                                                <option value="4">--Pilih Kelurahan--</option> 
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* SAVE */}
                        <div className="flex flex-row justify-end px-4 pb-4">
                            <div className="p-2 bg-blue-600 text-white text-sm flex gap-2">
                                <Save stroke="white"/>
                                <p className="my-auto xs:text-xs md:text-base">UPDATE</p>
                            </div>
                        </div>
                    </section>
                )}
            </section>
        </main>
    )
}