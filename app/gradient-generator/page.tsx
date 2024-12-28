'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ColorFormatSelector, ColorFormat } from '../components/ColorFormatSelector'
import { convertColor } from '@/utils/colorUtils'
import { motion } from 'framer-motion'

export default function GradientGenerator() {
  const [color1, setColor1] = useState('#ff0000')
  const [color2, setColor2] = useState('#0000ff')
  const [direction, setDirection] = useState('to right')
  const [format, setFormat] = useState<ColorFormat>('hex')
  const [copied, setCopied] = useState(false)
  const [textGradient, setTextGradient] = useState('Hello, Gradient!')

  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
  }

  const generateRandomGradient = () => {
    setColor1(generateRandomColor())
    setColor2(generateRandomColor())
  }

  const gradientStyle = {
    background: `linear-gradient(${direction}, ${color1}, ${color2})`,
  }

  const textGradientStyle = {
    backgroundImage: `linear-gradient(${direction}, ${color1}, ${color2})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  }

  const gradientCode = `background: linear-gradient(${direction}, ${convertColor(color1, format)}, ${convertColor(color2, format)});`
  const textGradientCode = `
background-image: linear-gradient(${direction}, ${convertColor(color1, format)}, ${convertColor(color2, format)});
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
color: transparent;
`

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  return (
    <div className="container mx-auto px-4 bg-teal-300/25 backdrop-blur-lg">
      <h1 className="text-4xl font-bold mb-8 mt-14 text-center" style={{
      filter: 'drop-shadow(0px 0px 2px #393737)',
    }}>Gradient Generator</h1>
      <div className="flex justify-center mb-8">
        <ColorFormatSelector onFormatChange={setFormat} />
      </div>
      <Tabs defaultValue="background" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-teal-200/30">
          <TabsTrigger value="background" >Background Gradient</TabsTrigger>
          <TabsTrigger value="text">Text Gradient</TabsTrigger>
        </TabsList>
        <TabsContent value="background">
          <motion.div 
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div 
              className="w-64 h-64 rounded-2xl shadow-lg" 
              style={gradientStyle}
            ></div>
            <div className="flex space-x-4">
              <div>
                <Label htmlFor="color1">Color 1:</Label>
                <Input
                  id="color1"
                  type="color"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="w-24 h-12"
                />
              </div>
              <div>
                <Label htmlFor="color2">Color 2:</Label>
                <Input
                  id="color2"
                  type="color"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="w-24 h-12"
                />
              </div>
            </div>
            <div className="w-64">
              <Label htmlFor="direction">Direction:</Label>
              <Select onValueChange={setDirection} defaultValue={direction}>
                <SelectTrigger className='w-full bg-gray-500/50 backdrop-blur-xl text-white'
        style={{
          filter: 'drop-shadow(0px 0px 2px #767474)'>
                  <SelectValue placeholder="Select direction" />
                </SelectTrigger>
                <SelectContent className='bg-gray-500/50 backdrop-blur-xl text-white'
        style={{
          filter: 'drop-shadow(0px 0px 2px #767474)'>
                  <SelectItem value="to right">Left to Right</SelectItem>
                  <SelectItem value="to left">Right to Left</SelectItem>
                  <SelectItem value="to bottom">Top to Bottom</SelectItem>
                  <SelectItem value="to top">Bottom to Top</SelectItem>
                  <SelectItem value="to bottom right">Top Left to Bottom Right</SelectItem>
                  <SelectItem value="to bottom left">Top Right to Bottom Left</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={generateRandomGradient} size="lg">Generate Random Gradient</Button>
            <div className="w-full max-w-md">
              <Label htmlFor="gradient-code">Gradient Code:</Label>
              <Input
                id="gradient-code"
                value={gradientCode}
                readOnly
                className="font-mono text-sm"
              />
            </div>
            <Button onClick={() => handleCopy(gradientCode)} size="lg" variant="outline">
              {copied ? 'Copied!' : 'Copy Gradient Code'}
            </Button>
          </motion.div>
        </TabsContent>
        <TabsContent value="text">
          <motion.div 
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 
              className="text-4xl font-bold"
              style={textGradientStyle}
            >
              {textGradient}
            </h2>
            <Input
              value={textGradient}
              onChange={(e) => setTextGradient(e.target.value)}
              className="w-full max-w-md"
              placeholder="Enter your text here"
            />
            <div className="flex space-x-4">
              <div>
                <Label htmlFor="color1">Color 1:</Label>
                <Input
                  id="color1"
                  type="color"
                  value={color1}
                  onChange={(e) => setColor1(e.target.value)}
                  className="w-24 h-12"
                />
              </div>
              <div>
                <Label htmlFor="color2">Color 2:</Label>
                <Input
                  id="color2"
                  type="color"
                  value={color2}
                  onChange={(e) => setColor2(e.target.value)}
                  className="w-24 h-12"
                />
              </div>
            </div>
            <div className="w-64">
              <Label htmlFor="direction">Direction:</Label>
              <Select onValueChange={setDirection} defaultValue={direction}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="to right">Left to Right</SelectItem>
                  <SelectItem value="to left">Right to Left</SelectItem>
                  <SelectItem value="to bottom">Top to Bottom</SelectItem>
                  <SelectItem value="to top">Bottom to Top</SelectItem>
                  <SelectItem value="to bottom right">Top Left to Bottom Right</SelectItem>
                  <SelectItem value="to bottom left">Top Right to Bottom Left</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={generateRandomGradient} size="lg">Generate Random Gradient</Button>
            <div className="w-full max-w-md">
              <Label htmlFor="text-gradient-code">Text Gradient Code:</Label>
              <Input
                id="text-gradient-code"
                value={textGradientCode}
                readOnly
                className="font-mono text-sm"
              />
            </div>
            <Button onClick={() => handleCopy(textGradientCode)} size="lg" variant="outline">
              {copied ? 'Copied!' : 'Copy Text Gradient Code'}
            </Button>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

