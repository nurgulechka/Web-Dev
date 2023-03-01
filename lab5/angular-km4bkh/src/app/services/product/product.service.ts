import { Injectable } from '@angular/core';
import {Product} from "../../products";
import {Category} from "../../category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getAllCategory(): Category[]{
    return [
      {
        name: 'Lip'
      },
      {
        name: 'Eyes'
      },
      {
        name : 'Eyebrows'
      },
      {
        name: 'Face'
      }
    ]
  }
  getItemByCategory(category: string): Product[]{
   return this.getAllItem().filter(product => product.category?.includes(category));
  }
  /*getItem(id : number): Product[]{
    return this.getAllItem().filter(product => product.id == id));
  }*/
  getAllItem(): Product[]{
    return[
      {
        id: 1,
        name: 'Fenty Beauty Contour Stick',
        price: 42,
        rating: 4,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h48/51042004467742/fenty-beauty-match-stix-matte-skinstick-skulptor-amber-105009381-1.jpg',
        description: 'Contouring stick in neutral, cool, and warm shades',
        link: 'https://kaspi.kz/shop/p/fenty-beauty-match-stix-matte-skinstick-skul-ptor-amber-105009381/?c=710000000#!/item',
        category: 'Face'
      },
      {
        id: 2,
        name: 'Fenty Beauty Bomb Gloss',
        price: 42,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h17/69223058538526/fenty-beauty-gloss-bomb-universal-lip-luminizer-nfl-showstopp-r-edition-riri-108979286-1.jpg',
        description: 'Moisturizing lip gloss in pink shades',
        link: 'https://kaspi.kz/shop/p/fenty-beauty-gloss-bomb-universal-lip-luminizer-blesk-dlja-gub-rozovyi-riri-108979286/?c=710000000#!/item',
        category: 'Lip'
      },
      {
        id: 3,
        name: 'Charlotte Tilburry Lipstick',
        price: 45,
        rating: 4,
        image: 'https://static.insales-cdn.com/images/products/1/7324/553295004/Pillow-Talk-1-800x960__1_.jpg',
        description: 'Lipstick in a popular "Pillow talk" shade',
        link: 'https://kaspi.kz/shop/p/charlotte-tilbury-matte-revolution-lipstick-pomada-bezhevyi-pillow-talk-original-101193299/?c=710000000#!/item',
        category: 'Lip'
      },
      {
        id: 4,
        name: 'Rare Beauty Lip Liner',
        price: 38,
        rating: 4,
        image: 'https://www.temptalia.com/wp-content/uploads/2022/06/summer-2022_rare-beauty-kind-words_003_promo.jpg',
        description: 'Rare Beauty lip liners',
        link: 'https://kaspi.kz/shop/p/charlotte-tilbury-matte-revolution-lipstick-pomada-bezhevyi-pillow-talk-original-101193299/?c=710000000#!/item',
        category: 'Lip'
      },
      {
        id: 5,
        name: 'Dior Lip Maximizer',
        price:  28,
        rating: 3,
        image: 'https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_420/01/nm_4516648_100000_c',
        description: 'Lipstick in a popular "Pillow talk" shade',
        link: 'https://kaspi.kz/shop/p/dior-addict-lip-maximizer-blesk-dlja-gub-rozovyi-010-holo-pink-105187340/?c=710000000',
        category: 'Lip'
      },
      {
        id: 6,
        name: 'Dior BackStage Blush',
        price: 36,
        rating: 5,
        image: 'https://image.harrods.com/16/13/23/92/16132392_30318825_2048.jpg',
        description: 'Best-selling blush in the shade Baby Pink',
        link: 'https://kaspi.kz/shop/p/dior-backstage-rosy-glow-rumjana-001-rozovyi-106212070/?c=710000000#!/item',
        category: 'Face'
      },
      {
        id: 7,
        name: 'TOM FORD Eye Color Quad Nude Dip',
        price: 45,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h26/h70/33539271229470/tom-ford-eye-color-quad-nude-dip-100985470-1.jpg',
        description: 'Pressed eyeshadow palette in cool tones with brushes',
        link: 'https://kaspi.kz/shop/p/tom-ford-eye-color-quad-nude-dip-100985470/?c=710000000#!/item',
        category: 'Eyes'
      },
      {
        id: 8,
        name: 'MAC Mascara',
        price: 36,
        rating: 5,
        image: 'https://sdcdn.io/mac/us/mac_sku_MTK801_1x1_0.png?width=1080&height=1080',
        description: 'Black waterproof mascara with voluming and elongating effect ',
        link: 'https://www.anastasiabeverlyhills.com/on/demandware.static/-/Sites-anastasia-master-catalog/default/dwf09e19bd/images/products/2021/070521_SummerLaunch/ABH_052022_StickHighlighter_Update_IcedOut_WEB-Standard_Hero_optimized.jpg',
        category: 'Eyes'
      },
      {
        id: 9,
        name: 'Anastasia Beverly Hills Stick Highlighter ',
        price: 34,
        rating: 4,
        image: 'https://www.anastasiabeverlyhills.com/on/demandware.static/-/Sites-anastasia-master-catalog/default/dwf09e19bd/images/products/2021/070521_SummerLaunch/ABH_052022_StickHighlighter_Update_IcedOut_WEB-Standard_Hero_optimized.jpg',
        description: 'Cream highlighter with a brush in golden and pink shades',
        link: 'https://kaspi.kz/shop/p/anastasia-beverly-hills-stick-highlighter-krem-hailaiter-cognac-diamond-108925630/?c=710000000',
        category: 'Face'
      },
      {
        id: 10,
        name: 'Esteé Lauder Foundation',
        price: 83,
        rating: 4,
        image: 'https://images.asos-media.com/products/estee-lauder-double-wear-stay-in-place-foundation-spf10/10769690-1-4n3maplesugar?$n_640w$&wid=513&fit=constrain',
        description: 'Double wear foundation with SPF-50',
        link: 'https://kaspi.kz/shop/p/estee-lauder-double-wear-stay-in-place-tonal-nyi-krem-1n1-ivory-nude-30-ml-103070444/?c=710000000#!/item',
        category: 'Face'
      },
      {
        id: 11,
        name: 'Anastasia Beverly Hills Brow Definer',
        price: 38,
        rating: 3,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4b/h9e/52601426051102/karandas-dla-brovej-brow-definer-ottenok-taupe-105893940-1.jpg',
        description: 'Anastasia Beverly Hills Brow Definer in the shade Taupe',
        link: 'https://kaspi.kz/shop/p/anastasia-beverly-hills-brow-definer-karandash-taupe-105893940/?c=750000000#!/item',
        category: 'Eyebrows'
      },
      {
        id: 12,
        name: 'MAC Eyebrow Great Brows Lingering',
        price: 39,
        rating: 4.4,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h60/hdf/63332566499358/mac-teni-dlya-brovei-nabor-tenei-dlya-brovei-great-brows-lingering-106928811-1.jpg',
        description: 'MAC eyebrow shadow in warm brown shades, with a highlighting shadow for underneath the brows. Brush\'s included',
        link: 'https://kaspi.kz/shop/p/mac-teni-dlja-brovei-great-brows-lingering-106928811/?c=750000000#!/item',
        category: 'Eyebrows'
      },
      {
        id: 13,
        name: 'Revolution Beauty Soap Styler Soap Brow',
        price: 11,
        rating: 3.5,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he4/h24/49180979068958/revolution-beauty-soap-styler-soap-brow-103995406-1.jpg',
        description: 'Brow fixing gel with a brush by Revolution',
        link: 'https://kaspi.kz/shop/p/anastasia-beverly-hills-brow-definer-karandash-taupe-105893940/?c=750000000#!/item',
        category: 'Eyebrows'
      },
      {
        id: 14,
        name: 'Anastasia Beverly Hills pressed Pro Pigment Palette Vol. 5',
        price: 11,
        rating: 3,
        image:'https://cdn.shopify.com/s/files/1/1699/6985/products/anastasia-beverly-hills-eyeshadow-anastasia-beverly-hills-norvina-pro-pigment-palette-vol-1-12087969775710.jpg?v=1597426800',
        description: '25 shimmers, satin, and matte shadows',
        link: 'https://kaspi.kz/shop/p/anastasia-beverly-hills-pressovannye-pro-pigment-palette-vol-5-108044733/?c=750000000#!/item',
        category: 'Eyes'
      },
      {
        id: 15,
        name: 'One Size Eye Popper Sparkle Vision Liquid Eyeshadow P - House',
        price: 11,
        rating: 4,
        image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h22/h45/52295068844062/one-size-eye-popper-sparkle-vision-liquid-eyeshadow-p-house-105713758-1.jpg',
        description: 'Glitter liquid eyeshadow in golden shimmer',
        link: 'https://kaspi.kz/shop/p/one-size-glitter-eye-popper-sparkle-vision-liquid-eyeshadow-p---house-105713758/?c=750000000#!/item',
        category: 'Eyes'
      }
    ]
  }

}
