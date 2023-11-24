import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      title:'Hollow Cross 2x4',
      description: "Dimensi 2x4",
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
      ]
    },
    {
      id:2,
      title:'Hollow Cross 4x4',
      description: "Dimensi 4x4cm",
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
      ]
    },
    {
      id:3,
      title:'Hollow plafon 2x4 mini',
      description: `
      Harga ecer 11.500
      Grosir 10.500
      `,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
      ]
    },
    {
      id:4,
      title:'Hollow plafon 4x4 mini',
      description: `
      Harga ecer 17.000
      `,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
      ]
    },
    {
      id:5,
      title:'Papan Gypsum Star Brand / Board Gypsum',
      description: `
      Papan gypsum / Board gypsum Merk Star Brand
      Lebar 1200mm
      Panjang 2400mm
      Tebal 9mm

      Beli 50lbr harga 49rb
      Beli 100lbr harga 48rb
      Papan gypsum murah, pemasangan mudah
      `,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
      ]
    },
  ])
}
