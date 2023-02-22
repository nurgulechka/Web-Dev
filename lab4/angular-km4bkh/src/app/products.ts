export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;

  image : string;
  description: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Fenty Beauty Contour Stick',
    price: 42,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h48/51042004467742/fenty-beauty-match-stix-matte-skinstick-skulptor-amber-105009381-1.jpg',
    description: 'Contouring stick in neutral, cool, and warm shades',
    link: 'https://kaspi.kz/shop/p/fenty-beauty-match-stix-matte-skinstick-skul-ptor-amber-105009381/?c=710000000#!/item'
  },
  {
    id: 2,
    name: 'Fenty Beauty Bomb Gloss',
    price: 42,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h17/69223058538526/fenty-beauty-gloss-bomb-universal-lip-luminizer-nfl-showstopp-r-edition-riri-108979286-1.jpg',
    description: 'Moisturizing lip gloss in pink shades',
    link: 'https://kaspi.kz/shop/p/fenty-beauty-gloss-bomb-universal-lip-luminizer-blesk-dlja-gub-rozovyi-riri-108979286/?c=710000000#!/item'
  },
  {
    id: 3,
    name: 'Charlotte Tilburry Lipstick',
    price: 45,
    rating: 5,
    image: 'https://static.insales-cdn.com/images/products/1/7324/553295004/Pillow-Talk-1-800x960__1_.jpg',
    description: 'Lipstick in a popular "Pillow talk" shade',
    link: 'https://kaspi.kz/shop/p/charlotte-tilbury-matte-revolution-lipstick-pomada-bezhevyi-pillow-talk-original-101193299/?c=710000000#!/item'
  },
  {
    id: 4,
    name: 'Rare Beauty Lip Liner',
    price: 38,
    rating: 4,
    image: 'https://www.temptalia.com/wp-content/uploads/2022/06/summer-2022_rare-beauty-kind-words_003_promo.jpg',
    description: 'Rare Beauty lip liners',
    link: 'https://kaspi.kz/shop/p/charlotte-tilbury-matte-revolution-lipstick-pomada-bezhevyi-pillow-talk-original-101193299/?c=710000000#!/item'
  },
  {
    id: 5,
    name: 'Dior Lip Maximizer',
    price:  28,
    rating: 5,
    image: 'https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_420/01/nm_4516648_100000_c',
    description: 'Lipstick in a popular "Pillow talk" shade',
    link: 'https://kaspi.kz/shop/p/dior-addict-lip-maximizer-blesk-dlja-gub-rozovyi-010-holo-pink-105187340/?c=710000000'
  },
  {
    id: 6,
    name: 'Dior BackStage Blush',
    price: 36,
    rating: 5,
    image: 'https://image.harrods.com/16/13/23/92/16132392_30318825_2048.jpg',
    description: 'Best-selling blush in the shade Baby Pink',
    link: 'https://kaspi.kz/shop/p/dior-backstage-rosy-glow-rumjana-001-rozovyi-106212070/?c=710000000#!/item'
  },
  {
    id: 7,
    name: 'TOM FORD Eye Color Quad Nude Dip',
    price: 45,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h70/33539271229470/tom-ford-eye-color-quad-nude-dip-100985470-1.jpg',
    description: 'Pressed eyeshadow palette in cool tones with brushes',
    link: 'https://kaspi.kz/shop/p/tom-ford-eye-color-quad-nude-dip-100985470/?c=710000000#!/item'
  },
  {
    id: 8,
    name: 'MAC Mascara',
    price: 36,
    rating: 5,
    image: 'https://sdcdn.io/mac/us/mac_sku_MTK801_1x1_0.png?width=1080&height=1080',
    description: 'Black waterproof mascara with volumising and elongating effect ',
    link: 'https://www.anastasiabeverlyhills.com/on/demandware.static/-/Sites-anastasia-master-catalog/default/dwf09e19bd/images/products/2021/070521_SummerLaunch/ABH_052022_StickHighlighter_Update_IcedOut_WEB-Standard_Hero_optimized.jpg'
  },
  {
    id: 9,
    name: 'Anastasia Beverly Hills Stick Highlighter ',
    price: 34,
    rating: 5,
    image: 'https://www.anastasiabeverlyhills.com/on/demandware.static/-/Sites-anastasia-master-catalog/default/dwf09e19bd/images/products/2021/070521_SummerLaunch/ABH_052022_StickHighlighter_Update_IcedOut_WEB-Standard_Hero_optimized.jpg',
    description: 'Cream highlighter with a brush in golden and pink shades',
    link: 'https://kaspi.kz/shop/p/anastasia-beverly-hills-stick-highlighter-krem-hailaiter-cognac-diamond-108925630/?c=710000000'
  },
  {
    id: 10,
    name: 'Estee Lauder Foundation',
    price: 83,
    rating: 5,
    image: 'https://images.asos-media.com/products/estee-lauder-double-wear-stay-in-place-foundation-spf10/10769690-1-4n3maplesugar?$n_640w$&wid=513&fit=constrain',
    description: 'Double wear foundation with SPF-50',
    link: 'https://kaspi.kz/shop/p/estee-lauder-double-wear-stay-in-place-tonal-nyi-krem-1n1-ivory-nude-30-ml-103070444/?c=710000000#!/item'
  }


];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/