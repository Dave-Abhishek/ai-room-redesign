"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const ImageSelection = ({selectedImage}) => {
    const [file, setFile] = useState();
    const onFileSelected = (event) => {
        // console.log(event.target.files);
        setFile(event.target.files[0]);
        selectedImage(event.target.file[0]);
    }
  return (
    <div>
        <label>Select Image of your room</label>
        <div className='mt-3'>
            <label htmlFor="upload-image">
                <div className={`border rounded-xl border-dotted flex justify-center border-primary bg-slate-200 cursor-pointer hover:shadow-lg ${file ? 'p-0 bg-white' : 'p-28'}`}>
                    {!file ?<Image src={'/imageupload.png'} width={70} height={70} alt='imageupload' /> : <Image src={URL.createObjectURL(file)} width={300} height={300} className='w-[300px] h-[300px] object-cover' alt='selected image' />}
                </div>
            </label>
            <input type="file" accept='image/*' id='upload-image' style={{display:"none"}} onChange={onFileSelected} />
        </div>
    </div>
  )
}

export default ImageSelection