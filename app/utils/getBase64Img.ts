import type { Sharp } from 'sharp';

const getBase64Img = async (uint8: Uint8Array) => {
  const sharp = require('sharp');
  const src: Sharp = sharp(uint8);
  const buffer = await src.toFormat('avif', { quality: 80 }).toBuffer();
  const base64Image = `data:image/avif;base64,${buffer.toString('base64')}`;

  return base64Image;
};

export default getBase64Img;
