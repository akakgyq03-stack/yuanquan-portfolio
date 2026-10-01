import path from 'node:path';
import sharp from 'sharp';

const reviewDirectory = path.resolve('.impeccable/review');
const targets = [
  ['home-desktop.png', 1440, 1000],
  ['home-mobile.png', 390, 844],
  ['perfume-lab-desktop.png', 1440, 1000],
  ['perfume-lab-mobile.png', 390, 844],
  ['aigc-desktop.png', 1440, 1000],
  ['art-exhibitions-desktop.png', 1440, 1000],
  ['textual-scent-lab-desktop.png', 1440, 1000],
];

for (const [filename, cropWidth, cropHeight] of targets) {
  const source = path.join(reviewDirectory, filename);
  const metadata = await sharp(source).metadata();
  const maxTop = Math.max(0, (metadata.height ?? cropHeight) - cropHeight);
  const positions = [0, 1 / 3, 2 / 3, 1].map((progress) =>
    Math.round(maxTop * progress),
  );
  const tileWidth = cropWidth >= 1000 ? 720 : 390;
  const tileHeight = Math.round((cropHeight / cropWidth) * tileWidth);
  const tiles = await Promise.all(
    positions.map((top) =>
      sharp(source)
        .extract({ left: 0, top, width: cropWidth, height: cropHeight })
        .resize(tileWidth, tileHeight)
        .png()
        .toBuffer(),
    ),
  );
  const canvasWidth = tileWidth * 2;
  const canvasHeight = tileHeight * 2;
  const output = path.join(
    reviewDirectory,
    filename.replace('.png', '-contact.png'),
  );
  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: '#111111',
    },
  })
    .composite(
      tiles.map((input, index) => ({
        input,
        left: (index % 2) * tileWidth,
        top: Math.floor(index / 2) * tileHeight,
      })),
    )
    .png()
    .toFile(output);
}
