export interface Poster {
  id: number;
  title: string;
  thumbnail: string;
  fullImage: string;
  description: string;
  theme: string;
  inspiration: string;
}


// Normal category images (from Image folder)
const normalImages = [
  '/src/Image/00ddbf22bfee267c36deda4be737503e.jpg',
  '/src/Image/055f561031f0d523c49b8078ac978a2b.jpg',
  '/src/Image/0c494083862f7e3311bc3c07ca296785.jpg',
  '/src/Image/0dbd8ffc2152cbb4e1c24bf5f882265e.jpg',
  '/src/Image/1575abf31cbbe7eb38423508f3e83bcf.jpg',
  '/src/Image/169c2377256c5907418544c2fbe8f613 (1).jpg',
  '/src/Image/3c870c987fc64a559fc254505084b88b.jpg',
  '/src/Image/3d52322b0488bbc353d82a435f402e6e.jpg',
  '/src/Image/4a4ef77397ad50e8a018fd543c36a6ce.jpg',
  '/src/Image/4b23616ff413b6b4bc2ca262bec07ca7.jpg',
  '/src/Image/50f0bf30e146bb58a7f3f27ee3f3ebc4.jpg',
  '/src/Image/5cc7ff0857e69665895ed8099da20b0a.jpg',
  '/src/Image/5d8fab06ac3b4f65e1d62245ac0fd001.jpg',
  '/src/Image/6f7a44c14e532d3f06727e62c9bf068c.jpg',
  '/src/Image/726b81cdd30ea4785083c7609d5a0ab5.jpg',
  '/src/Image/739a4b0e8685121ffb7fc295ca444546.jpg',
  '/src/Image/76884c4a332edb6d5b3e34abf9b96793.jpg',
  '/src/Image/78d0d7ed1542304891b3fedb563b4b4e.jpg',
  '/src/Image/78f2a90840e5a8116564356823fa8807.jpg',
  '/src/Image/79fe54ccfdde655261a3613963b8d5a5.jpg',
  '/src/Image/7e9b893c792996848fbe498819e7d4c1.jpg',
  '/src/Image/9255304520c6587d12f1e3479a19c2c1.jpg',
  '/src/Image/96be6631c36844e243791c57c3cf3f66 (1).jpg',
  '/src/Image/9e97544b04677fd63743e435e7a40c66.jpg',
  '/src/Image/a7501c2c45c629175eeff154bb56877f.jpg',
  '/src/Image/b2540e280d86979c7ff29b7b28e63b7e.jpg',
  '/src/Image/b312d1a30be229e5bc57c5ad27409d52.jpg',
  '/src/Image/b9d1eb52c607608e60bd91691897f137.jpg',
  '/src/Image/bb71a9ca6f4bcb877763c091c17c4ad5.jpg',
  '/src/Image/caf0a3aad36b7f243501381a577fe739.jpg',
  '/src/Image/cf373d0d00a1c82c4e4ea6d2aa1e303a.jpg',
  '/src/Image/d0cc5d7a7127d9b557a8767572672707.jpg',
  '/src/Image/ead008607bb347ab858aecb8a6de1d4c.jpg',
  '/src/Image/f36b28b2bc9a8fc6d7addb7cd1088cca.jpg',
  '/src/Image/f992552e8efe85e22450867e4f3849c9.jpg',
  '/src/Image/fbc5bd71d9ec81ed6180b0e5db591bb9.jpg',
  '/src/Image/IMG_2148.JPG',
  '/src/Image/IMG_2152.JPG',
  '/src/Image/IMG_2168.JPG',
  '/src/Image/IMG_2169.JPG',
  '/src/Image/IMG_2170.JPG',
  '/src/Image/IMG_2179.JPG',
  '/src/Image/IMG_2180.JPG',
  '/src/Image/IMG_2181.JPG',
  '/src/Image/IMG_2186.JPG',
  '/src/Image/IMG_2187.JPG',
  '/src/Image/IMG_2189.JPG',
  '/src/Image/IMG_2190.JPG',
  '/src/Image/IMG_2191.JPG',
  '/src/Image/IMG_2192.JPG',
  '/src/Image/IMG_2193.JPG',
  '/src/Image/IMG_2196.JPG',
  '/src/Image/IMG_2197.JPG',
  '/src/Image/IMG_2198.JPG',
  '/src/Image/IMG_2199.JPG',
  '/src/Image/IMG_2201.JPG',
  '/src/Image/IMG_2202.JPG',
  '/src/Image/IMG_2204.JPG',
  '/src/Image/IMG_2208.JPG',
  '/src/Image/IMG_2217.JPG',
  '/src/Image/IMG_2218.JPG',
  '/src/Image/IMG_2228.JPG',
  '/src/Image/IMG_2504.JPG',
  '/src/Image/IMG_2505.JPG',
  '/src/Image/IMG_2506.JPG',
  '/src/Image/IMG_2508.JPG',
  '/src/Image/IMG_2509.JPG',
  '/src/Image/IMG_2511.JPG',
  '/src/Image/IMG_2512.JPG',
  '/src/Image/IMG_2517.JPG',
  '/src/Image/IMG_2518.JPG',
  '/src/Image/IMG_2519.JPG',
  '/src/Image/IMG_2520.JPG',
  '/src/Image/IMG_2521.JPG',
  '/src/Image/IMG_2523.JPG',
  '/src/Image/IMG_2524.JPG',
  '/src/Image/IMG_2525.JPG',
  '/src/Image/IMG_2527.JPG',
  '/src/Image/IMG_2528.JPG',
  '/src/Image/IMG_2529.JPG',
  '/src/Image/IMG_2530.JPG',
  '/src/Image/WhatsApp Image 2025-10-07 at 6.10.05 PM.jpeg'
];

// Split category images (from Split folder)
const splitImages = [
  '/src/Split/bd648fb2ae8a91bc7c0f2d49be48a152.jpg',
  '/src/Split/c3027ef428dc450713ef2dccd782a3a6.jpg',
  '/src/Split/IMG_2514.JPG'
];


export function generatePosters(): Poster[] {
  const posters: Poster[] = [];
  let globalIdCounter = 1;

  // Add Normal posters
  normalImages.forEach((image, index) => {
    posters.push({
      id: globalIdCounter++,
      title: `Poster ${index + 1}`,
      thumbnail: image,
      fullImage: image,
      description: '',
      theme: 'Normal',
      inspiration: ''
    });
  });

  // Add Split posters
  splitImages.forEach((image, index) => {
    posters.push({
      id: globalIdCounter++,
      title: `Poster ${index + 1}`,
      thumbnail: image,
      fullImage: image,
      description: '',
      theme: 'Split',
      inspiration: ''
    });
  });

  return posters;
}
