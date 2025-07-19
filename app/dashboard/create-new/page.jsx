"use client"
import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { validators } from 'tailwind-merge'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { storage } from '@/config/firebaseCpnfig'

const CreateNew = () => {
  const [formData, setFormData] = useState([]);
    const onHandleInputChange = (value, fieldName) => {
      // console.log("fieldname: ", fieldName, "value: ", value);
      setFormData(prev => ({
        ...prev,
        [fieldName]: value
      }))
    }

    const GenerateAiImage = async() => {
      const rawImageUrl = await SaveRawImageToFirebase();
      const result = await axios.post('/api/redesign-room',{
        imageUrl:rawImageUrl,
        roomType:formData?.roomType,
        designType:formData?.designType,
        additionalReq:formData?.additionalReq
      });
      console.log("result: ", result.data)
    }

    const SaveRawImageToFirebase=async() => {
      const filename = Date.now()+"_raw.png";
      const imageRef = ref(storage,'room-redesign/'+filename);
      await uploadBytes(imageRef, formData.image).then(resp=>{
        console.log("File uploaded");
      })

      const downloadUrl=await getDownloadURL(imageRef);
      console.log('downloadUrl: ', downloadUrl);
      return downloadUrl;
    }

  return (
    <div>
        <h2 className='font-bold text-center text-3xl text-[#875BF7]'>Experience the Magic of AI Remodeling</h2>
        <p className='text-center text-gray-500 mt-2'>Transform any room with a click. Select a space, choose a style, and watch as AI instantly reimagines your environment</p>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>

            {/* Image selection */}
            <ImageSelection selectedImage={(value) => onHandleInputChange(value, 'image')} />

            {/* Form input section */}
            <div>
              {/* Room type */}
              <RoomType selectedRoomType = {(value) =>onHandleInputChange(value, 'roomType')} />

              {/* Design type */}
              <DesignType selectedDesignType={(value) => onHandleInputChange(value, 'designType')} />

              {/* Additional requirement tex area */}
              <AdditionalReq additionalRequirementInput={(value) => onHandleInputChange(value, 'additionalReq')} />

              {/* Button to generate image */}
              <Button className="w-full mt-5" onClick={GenerateAiImage}>Generate</Button>
              <p className='text-sm text-gray-400 mb-52'>NOTE: 1 Credit will use to redesign your room</p>
            </div>
        </div>
    </div>
  )
}

export default CreateNew