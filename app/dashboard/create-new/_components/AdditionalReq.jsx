import { Textarea } from "@/components/ui/textarea"
import React from 'react'

const AdditionalReq = ({additionalRequirementInput}) => {
  return (
    <div className="mt-5">
        <label className="text-gray-400">Enter Additional Requirements (Optional)</label>
        <Textarea className="mt-3" onChange={(e) => {additionalRequirementInput(e.target.value);}} />
    </div>
  )
}

export default AdditionalReq