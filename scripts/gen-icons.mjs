import sharp from 'sharp'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const publicDir = join(root, 'public')
const srcSvg = join(publicDir, 'favicon.svg')

async function run() {
  try {
    // Apple touch icon (180x180)
    await sharp(srcSvg)
      .resize(180, 180, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toFile(join(publicDir, 'apple-touch-icon.png'))

    // Standard favicons
    await sharp(srcSvg).resize(32, 32).png({ compressionLevel: 9 }).toFile(join(publicDir, 'favicon-32x32.png'))
    await sharp(srcSvg).resize(16, 16).png({ compressionLevel: 9 }).toFile(join(publicDir, 'favicon-16x16.png'))

    // PWA icons
    await sharp(srcSvg).resize(192, 192).png({ compressionLevel: 9 }).toFile(join(publicDir, 'icon-192.png'))
    await sharp(srcSvg).resize(512, 512).png({ compressionLevel: 9 }).toFile(join(publicDir, 'icon-512.png'))

    console.log('Icons generated successfully in public/.')
  } catch (err) {
    console.error('Failed to generate icons:', err)
    process.exitCode = 1
  }
}

run()
