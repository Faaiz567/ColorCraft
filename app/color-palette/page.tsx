'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ColorFormatSelector, ColorFormat } from '../components/ColorFormatSelector'
import { convertColor } from '@/utils/colorUtils'
import { colors } from '@/utils/colors'
import { motion } from 'framer-motion'

export default function ColorPalette() {
  const [format, setFormat] = useState<ColorFormat>('hex')
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (index: number, colorValue: string) => {
    navigator.clipboard.writeText(colorValue)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 3000)
  }

  return (
    <div className="container mx-auto px-4 bg-cyan-200/50 backdrop-blur-lg">
     <h1 className="text-4xl font-bold mb-8 mt-14 text-center"
     style={{
      filter: 'drop-shadow(0px 0px 2px #393737)',
    }}>Color Palette</h1>
      <div className="flex justify-center mb-8">
        <ColorFormatSelector onFormatChange={setFormat} />
      </div>
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {colors.map((color, index) => {
          const colorValue = format === 'tailwind' ? color.tailwind : convertColor(color.hex, format)
          return (
            <motion.div 
              key={color.hex} 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div 
                className="w-32 h-32 rounded-2xl shadow-lg transition-transform duration-300 ease-in-out transform hover:rotate-3"
                style={{ backgroundColor: color.hex }}
              ></div>
              <p className="mt-3 font-medium text-lg">{color.name}</p>
              <p className="text-sm text-gray-600 break-all text-center mt-1">{colorValue}</p>
              <Button
                className="mt-3"
                onClick={() => handleCopy(index, colorValue)}
                variant="outline"
              >
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </Button>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

