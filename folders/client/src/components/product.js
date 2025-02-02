import sergelImg from '../image/sergel-20-mg-capsule-52083742307-i1-1zf66MWNieQiLLH3NXk6.jpg';
import azithroImg from '../image/medicines/azithro.jpg';
import monasImg from '../image/medicines/monas-10.webp';
import pantorixImg from '../image/Pantonix 40 Injection-600x600w.jpg.webp';
import alatrolImg from '../image/otc/alatrol-10-mg.webp';
import burnaImg from '../image/otc/burna.webp';
import napaImg from '../image/otc/napa-tablet-500mg-10-tablets.jpeg';
import viodinImg from '../image/otc/viodin.png';
import bextrimImg from '../image/vitamins/bextrim.jpeg';
import vitaminCImg from '../image/vitamins/c.jpeg';
import coracalImg from '../image/vitamins/coral.jpeg';
import multivitaminImg from '../image/vitamins/downloamulti.jpeg';
import listacareImg from '../image/personal/listacare.webp';
import listerGoldImg from '../image/personal/IMG-20231019-WA0497.webp';
import mediplusImg from '../image/personal/mediplas.webp';
import orastarImg from '../image/personal/orastar.webp';

const products = [
  {
    name: "Sergel",
    image: sergelImg,
    description: "Tablet",
    price: 7.00,
    discountPrice: 6.30,
    dose: "20 mg",
    type: "Tablet",
  },
  {
    name: "Azithromycin",
    image: azithroImg,
    description: "Tablet",
    price: 35.00,
    discountPrice: 31.50,
    dose: "500 mg",
    type: "Tablet",
  },
  {
    name: "Monas",
    image: monasImg,
    description: "Tablet",
    price: 262.50,
    discountPrice: 236.00,
    dose: "10 mg",
    type: "Tablet",
  },
  {
    name: "Pantorix",
    image: pantorixImg,
    description: "Tablet",
    price: 10.00,
    discountPrice: 6.50,
    dose: "40 mg",
    type: "Tablet",
  },
  {
    name: "Alatrol",
    image: alatrolImg,
    description: "Tablet",
    price: 3.00,
    discountPrice: 2.50,
    dose: "10 mg",
    type: "Tablet",
  },
  {
    name: "Burna",
    image: burnaImg,
    description: "Cream",
    price: 60.00,
    discountPrice: 54.50,
    dose: "1%",
    type: "Cream",
  },
  {
    name: "Paracetamol",
    image: napaImg,
    description: "Tablet",
    price: 2.00,
    discountPrice: 1.50,
    dose: "500 mg",
    type: "Tablet",
  },
  {
    name: "Viodin",
    image: viodinImg,
    description: "Solution",
    price: 120.00,
    discountPrice: 108.50,
    dose: "5 mg/ml",
    type: "Solution",
  },
  {
    name: "Bextrim Gold",
    image: bextrimImg,
    description: "Tablet",
    price: 360.00,
    discountPrice: 334.50,
    dose: "N/A",
    type: "Tablet",
  },
  {
    name: "Vitamin C",
    image: vitaminCImg,
    description: "Tablet",
    price: 2.00,
    discountPrice: 1.50,
    dose: "500 mg",
    type: "Tablet",
  },
  {
    name: "Coracal-D",
    image: coracalImg,
    description: "Tablet",
    price: 120.00,
    discountPrice: 100.50,
    dose: "1000 mg",
    type: "Tablet",
  },
  {
    name: "Multivitamin",
    image: multivitaminImg,
    description: "Tablet",
    price: 65.00,
    discountPrice: 67.50,
    dose: "N/A",
    type: "Tablet",
  },
  {
    name: "Listacare Blue Mint",
    image: listacareImg,
    description: "Solution",
    price: 80.00,
    discountPrice: 72.50,
    dose: "100 ml",
    type: "Solution",
  },
  {
    name: "Lister Gold",
    image: listerGoldImg,
    description: "Solution",
    price: 80.00,
    discountPrice: 72.50,
    dose: "100 ml",
    type: "Solution",
  },
  {
    name: "MediPlus",
    image: mediplusImg,
    description: "Cream",
    price: 90.00,
    discountPrice: 85.00,
    dose: "50 g",
    type: "Cream",
  },
  {
    name: "Orastar Plus",
    image: orastarImg,
    description: "Solution",
    price: 150.00,
    discountPrice: 135.00,
    dose: "30 ml",
    type: "Solution",
  },
];

export default products;
