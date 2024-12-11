'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ColorFormatSelector, ColorFormat } from '../components/ColorFormatSelector'
import { convertColor } from '@/utils/colorUtils'
import { motion } from 'framer-motion'

export default function ColorGenerator() {
  const [color, setColor] = useState('#000000')
  const [format, setFormat] = useState<ColorFormat>('hex')
  const [copied, setCopied] = useState(false)

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    setColor("#" + randomColor.padStart(6, '0'))
  }

  const handleCopy = () => {
    const colorValue = convertColor(color, format)
    navigator.clipboard.writeText(colorValue)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="container mx-auto px-4 h-auto flex flex-col items-center bg-teal-300/25 backdrop-blur-lg">
      <h1 className="text-4xl font-bold mb-8 mt-14 text-center" style={{
      filter: 'drop-shadow(0px 0px 2px #393737)',
    }}>Color Generator</h1>
      <ColorFormatSelector onFormatChange={setFormat} />
      <motion.div 
        className="flex flex-col items-center space-y-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-64 h-64 rounded-2xl shadow-lg"
          style={{ backgroundColor: color }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        ></motion.div>
        <p className="text-2xl font-medium">{convertColor(color, format)}</p>
        <div className="flex items-center space-x-4">
          <Label htmlFor="color-input" className="text-lg">Pick a color:</Label>
          <Input
            id="color-input"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-24 h-12 cursor-pointer"
          />
        </div>
        <div className="flex space-x-4">
          <Button onClick={generateRandomColor} size="lg">Generate Random Color</Button>
          <Button onClick={handleCopy} size="lg" variant="outline">
            {copied ? 'Copied!' : 'Copy Color Code'}
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

