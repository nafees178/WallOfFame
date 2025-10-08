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
'/images/00ddbf22bfee267c36deda4be737503e.jpg',
    '/images/055f561031f0d523c49b8078ac978a2b.jpg',
    '/images/0c494083862f7e3311bc3c07ca296785.jpg',
    '/images/0dbd8ffc2152cbb4e1c24bf5f882265e.jpg',
    '/images/1575abf31cbbe7eb38423508f3e83bcf.jpg',
    '/images/169c2377256c5907418544c2fbe8f613 (1).jpg',
    '/images/3c870c987fc64a559fc254505084b88b.jpg',
    '/images/3d52322b0488bbc353d82a435f402e6e.jpg',
    '/images/4a4ef77397ad50e8a018fd543c36a6ce.jpg',
    '/images/4b23616ff413b6b4bc2ca262bec07ca7.jpg',
    '/images/50f0bf30e146bb58a7f3f27ee3f3ebc4.jpg',
    '/images/5cc7ff0857e69665895ed8099da20b0a.jpg',
    '/images/5d8fab06ac3b4f65e1d62245ac0fd001.jpg',
    '/images/6f7a44c14e532d3f06727e62c9bf068c.jpg',
    '/images/726b81cdd30ea4785083c7609d5a0ab5.jpg',
    '/images/739a4b0e8685121ffb7fc295ca444546.jpg',
    '/images/76884c4a332edb6d5b3e34abf9b96793.jpg',
    '/images/78d0d7ed1542304891b3fedb563b4b4e.jpg',
    '/images/78f2a90840e5a8116564356823fa8807.jpg',
    '/images/79fe54ccfdde655261a3613963b8d5a5.jpg',
    '/images/7e9b893c792996848fbe498819e7d4c1.jpg',
    '/images/9255304520c6587d12f1e3479a19c2c1.jpg',
    '/images/96be6631c36844e243791c57c3cf3f66 (1).jpg',
    '/images/9e97544b04677fd63743e435e7a40c66.jpg',
    '/images/a7501c2c45c629175eeff154bb56877f.jpg',
    '/images/b2540e280d86979c7ff29b7b28e63b7e.jpg',
    '/images/b312d1a30be229e5bc57c5ad27409d52.jpg',
    '/images/b9d1eb52c607608e60bd91691897f137.jpg',
    '/images/bb71a9ca6f4bcb877763c091c17c4ad5.jpg',
    '/images/caf0a3aad36b7f243501381a577fe739.jpg',
    '/images/cf373d0d00a1c82c4e4ea6d2aa1e303a.jpg',
    '/images/d0cc5d7a7127d9b557a8767572672707.jpg',
    '/images/ead008607bb347ab858aecb8a6de1d4c.jpg',
    '/images/f36b28b2bc9a8fc6d7addb7cd1088cca.jpg',
    '/images/f992552e8efe85e22450867e4f3849c9.jpg',
    '/images/fbc5bd71d9ec81ed6180b0e5db591bb9.jpg',
    '/images/IMG_2148.JPG',
    '/images/IMG_2152.JPG',
    '/images/IMG_2168.JPG',
    '/images/IMG_2169.JPG',
    '/images/IMG_2170.JPG',
    '/images/IMG_2179.JPG',
    '/images/IMG_2180.JPG',
    '/images/IMG_2181.JPG',
    '/images/IMG_2186.JPG',
    '/images/IMG_2187.JPG',
    '/images/IMG_2189.JPG',
    '/images/IMG_2190.JPG',
    '/images/IMG_2191.JPG',
    '/images/IMG_2192.JPG',
    '/images/IMG_2193.JPG',
    '/images/IMG_2196.JPG',
    '/images/IMG_2197.JPG',
    '/images/IMG_2198.JPG',
    '/images/IMG_2199.JPG',
    '/images/IMG_2201.JPG',
    '/images/IMG_2202.JPG',
    '/images/IMG_2204.JPG',
    '/images/IMG_2208.JPG',
    '/images/IMG_2217.JPG',
    '/images/IMG_2218.JPG',
    '/images/IMG_2228.JPG',
    '/images/IMG_2504.JPG',
    '/images/IMG_2505.JPG',
    '/images/IMG_2506.JPG',
    '/images/IMG_2508.JPG',
    '/images/IMG_2509.JPG',
    '/images/IMG_2511.JPG',
    '/images/IMG_2512.JPG',
    '/images/IMG_2517.JPG',
    '/images/IMG_2518.JPG',
    '/images/IMG_2519.JPG',
    '/images/IMG_2520.JPG',
    '/images/IMG_2521.JPG',
    '/images/IMG_2523.JPG',
    '/images/IMG_2524.JPG',
    '/images/IMG_2525.JPG',
    '/images/IMG_2527.JPG',
    '/images/IMG_2528.JPG',
    '/images/IMG_2529.JPG',
    '/images/IMG_2530.JPG',
    '/images/WhatsApp Image 2025-10-07 at 6.10.05 PM.jpeg'
];

// Split category images (from Split folder)
const splitImages = [
  '/images/bd648fb2ae8a91bc7c0f2d49be48a152.jpg',
  '/images/c3027ef428dc450713ef2dccd782a3a6.jpg',
  '/images/IMG_2514.JPG'
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
