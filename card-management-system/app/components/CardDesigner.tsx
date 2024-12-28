'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { generateMessage } from '../actions/generateMessage'
import { useToast } from "@/components/ui/use-toast"

const cardDesigns = ['Birthday', 'Thank You', 'Congratulations', 'Sympathy']
const stationeryTypes = ['Matte', 'Glossy', 'Textured', 'Recycled']

export default function CardDesigner() {
  const [design, setDesign] = useState(cardDesigns[0])
  const [stationery, setStationery] = useState(stationeryTypes[0])
  const [message, setMessage] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const handleGenerateMessage = async () => {
    try {
      setIsGenerating(true)
      const generatedMessage = await generateMessage(design)
      setMessage(generatedMessage)
      
      if (generatedMessage === 'Unable to generate message. Please try again.') {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to generate message. Please try again.",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate message. Please try again.",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Card Designer</h2>
        <Select onValueChange={(value) => setDesign(value)} defaultValue={design}>
          <SelectTrigger>
            <SelectValue placeholder="Select card design" />
          </SelectTrigger>
          <SelectContent>
            {cardDesigns.map((design) => (
              <SelectItem key={design} value={design}>{design}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => setStationery(value)} defaultValue={stationery}>
          <SelectTrigger>
            <SelectValue placeholder="Select stationery type" />
          </SelectTrigger>
          <SelectContent>
            {stationeryTypes.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Textarea
          placeholder="Enter your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
        />
        <Button 
          onClick={handleGenerateMessage} 
          disabled={isGenerating}
        >
          {isGenerating ? 'Generating...' : 'Generate AI Message'}
        </Button>
      </div>
      <div className="border p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Preview</h3>
        <div className="aspect-[4/5] bg-gray-100 rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
            <p className="font-bold">{design}</p>
            <p className="text-sm text-gray-500">{stationery}</p>
            <p className="mt-4">{message}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

