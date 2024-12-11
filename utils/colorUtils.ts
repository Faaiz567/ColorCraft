import { ColorFormat } from '../app/components/ColorFormatSelector'

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : [0, 0, 0]
}

function rgbToCmyk(r: number, g: number, b: number): [number, number, number, number] {
  let c = 1 - (r / 255)
  let m = 1 - (g / 255)
  let y = 1 - (b / 255)
  let k = Math.min(c, m, y)

  c = (c - k) / (1 - k)
  m = (m - k) / (1 - k)
  y = (y - k) / (1 - k)

  return [Math.round(c * 100), Math.round(m * 100), Math.round(y * 100), Math.round(k * 100)]
}

function hexToPms(hex: string): string {
  // This is a simplified conversion. In reality, PMS conversion requires a complex lookup table.
  return `PMS ${hex.substring(1).toUpperCase()}`
}

function hexToTailwind(hex: string): string {
  // This is a simplified conversion. In reality, you'd need to find the closest Tailwind color.
  return `bg-[${hex}]`
}

export function convertColor(hex: string, format: ColorFormat): string {
  switch (format) {
    case 'hex':
      return hex
    case 'rgb':
      const [r, g, b] = hexToRgb(hex)
      return `rgb(${r}, ${g}, ${b})`
    case 'cmyk':
      const [c, m, y, k] = rgbToCmyk(...hexToRgb(hex))
      return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`
    case 'pms':
      return hexToPms(hex)
    case 'tailwind':
      return hexToTailwind(hex)
    default:
      return hex
  }
}

