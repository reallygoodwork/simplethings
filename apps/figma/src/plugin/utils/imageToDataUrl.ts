import { Buffer } from 'buffer'

export function imageToDataURL(data: Uint8Array): string | undefined {
  if (data[0] === 0x89 && data[1] === 0x50 && data[2] === 0x4e) {
    const base64 = Buffer.from(data).toString('base64')
    return 'data:image/png;base64,' + base64
  } else if (data[0] === 0xff && data[1] === 0xd8 && data[2] === 0xff) {
    const base64 = Buffer.from(data).toString('base64')
    return 'data:image/jpeg;base64,' + base64
  } else {
    console.error('TODO: unsupported image data type')
    return undefined
  }
}
