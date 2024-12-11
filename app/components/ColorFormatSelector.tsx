'use client'

import { useState, useEffect } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export type ColorFormat = 'hex' | 'rgb' | 'cmyk' | 'pms' | 'tailwind'

interface ColorFormatSelectorProps {
  onFormatChange: (format: ColorFormat) => void
}

export function ColorFormatSelector({ onFormatChange }: ColorFormatSelectorProps) {
  const [format, setFormat] = useState<ColorFormat>('hex')

  useEffect(() => {
    onFormatChange(format)
  }, [format, onFormatChange])

  return (
    <div className="w-48 ">
      <Select onValueChange={(value) => setFormat(value as ColorFormat)} defaultValue={format}>
        <SelectTrigger className='bg-slate-500/50 backdrop-blur-xl text-white'
         style={{
          filter: 'drop-shadow(0px 0px 2px #767474)',
        }}>
          <SelectValue placeholder="Select color format" />
        </SelectTrigger>
        <SelectContent  className='bg-gray-500/50 backdrop-blur-xl text-white'
        style={{
          filter: 'drop-shadow(0px 0px 2px #767474)',
        }}>
          <SelectItem value="hex">HEX</SelectItem>
          <SelectItem value="rgb">RGB</SelectItem>
          <SelectItem value="cmyk">CMYK</SelectItem>
          <SelectItem value="pms">PMS</SelectItem>
          <SelectItem value="tailwind">Tailwind</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

