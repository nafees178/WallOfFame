export interface Poster {
  id: number;
  title: string;
  thumbnail: string;
  fullImage: string;
  wallMockup: string;
  description: string;
  theme: string;
  inspiration: string;
}

const themes = [
  'Urban & Architecture',
  'Nature & Landscapes',
  'Abstract & Modern',
  'Minimalist & Classic',
  'Travel & Adventure',
  'Space & Science',
  'Floral & Botanical',
  'Geometric Patterns',
  'Vintage & Retro',
  'Contemporary Art'
];

const posterImages = [
  'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg',
  'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg',
  'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg',
  'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg',
  'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg',
  'https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg',
  'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
  'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
  'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg',
  'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
  'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
  'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg',
  'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
  'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg',
  'https://images.pexels.com/photos/1619569/pexels-photo-1619569.jpeg',
  'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg',
  'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg',
  'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
  'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg',
  'https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg'
];

const wallMockups = [
  'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
  'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
  'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
  'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
  'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
  'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg',
  'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg'
];

export function generatePosters(count: number = 100): Poster[] {
  const posters: Poster[] = [];

  for (let i = 1; i <= count; i++) {
    const themeIndex = (i - 1) % themes.length;
    const imageIndex = (i - 1) % posterImages.length;
    const mockupIndex = (i - 1) % wallMockups.length;

    posters.push({
      id: i,
      title: `Poster ${i}`,
      thumbnail: `${posterImages[imageIndex]}?auto=compress&cs=tinysrgb&w=600`,
      fullImage: `${posterImages[imageIndex]}?auto=compress&cs=tinysrgb&w=1200`,
      wallMockup: `${wallMockups[mockupIndex]}?auto=compress&cs=tinysrgb&w=1200`,
      description: `A stunning piece that captures the essence of ${themes[themeIndex].toLowerCase()}. This poster brings character and inspiration to any space.`,
      theme: themes[themeIndex],
      inspiration: `Design ${i} explores the beauty and meaning found in ${themes[themeIndex].toLowerCase()}.`
    });
  }

  return posters;
}
