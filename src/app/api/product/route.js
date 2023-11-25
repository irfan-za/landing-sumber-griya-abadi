import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      title:'Hollow Cross 2x4 & 4x4',
      description: `
      <ul>
      <li>Pilihan Jenis 2x4 dan 4x4</li>
      <li>Tebal : 0.3mm</li>
      <li>Panjang : 4m</li>
      <li>Kokoh, kuat, berkualitas, cocok digunakan untuk plafon gypsum dan PVC.</li>
      </ul>`,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883993/sga/products/hcsc4f9vock6bllutjmv.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700884362/sga/products/ae2nm7yzll3evsdteasc.jpg',
      ]
    },
    {
      id:2,
      title:'Hollow plafon 2x4 & 4x4 mini',
      description: `
      <ul>
      <li>Harga (november 2023)</li>
      <li>ecer 11.500</li>
      <li>Grosir 10.500</li>
      <li>Cocok digunakan untuk plafon PVC</li>
      </ul>
      `,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883528/sga/products/gbc7dhvgsha5jrluiddi.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883528/sga/products/tto12lrymoh4xtsxn8f5.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883527/sga/products/u4jqfuuvvsdrrnjg0jco.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700884420/sga/products/be2ehxmgj95gkelluzco.jpg',
      ]
    },
    {
      id:3,
      title:'Papan Gypsum | Board Gypsum KNAUF 9mm',
      description: `
      <ul>
      <li>Panjang 2,4m</li>
      <li>Lebar 1,2m</li>
      <li>Tebal 9mm</li>
      <li>Board gypsum merk Knauf, tidak lendut, cocok digunakna untuk plafon kantor/rumah, pemasangan mudah dan dapat divariasikan.</li>
      </ul>
      `,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883525/sga/products/u5lzow1m6ffa3rolni5d.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700884363/sga/products/f4hyoiwqu5xtfmfnqs4j.jpg',
      ]
    },
    {
      id:4,
      title:'Plafon PVC 8mm',
      description: `
      <ul>
      <li>Lebar 20cm</li>
      <li>Tebal 8mm</li>
      <li>Tahan air, anti rayap, dan tidak merambat api, cocok digunakan sebagai plafon rumah dan kantor.</li>
      <li>Pilihan motif banyak dan pemasangannya cepat serta mudah. Dapat divariasikan dalam pemasangannya.</li>
      </ul>
      `,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700885373/sga/products/20220726_222209_gobsga.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883521/sga/products/zeiyfthtorvcvfrnirnf.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700885490/sga/products/kzgioyjkpp1y5cviyufj.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883976/sga/products/z9wetbbf8e8enbkw4qk8.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700890365/sga/products/v17jqscqjoki9pm6yvdi.jpg',
      ]
    },
    {
      id:5,
      title:'Papan Gypsum Star Brand / Board Gypsum',
      description: `
      <ul>
      <li>Merk Star Brand</li>
      <li>Lebar 1200mm</li>
      <li>Panjang 2400mm</li>
      <li>Tebal 9mm</li>
      <li>Beli 50lbr harga 49rb</li>
      <li>Beli 100lbr harga 48rb (november 2023)</li>
      <li>Papan gypsum murah, pemasangan mudah</li>
      </ul>
      `,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/bvn6bqlaf2cwjz5p14vw.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700883531/sga/products/tiovqf2yhwdlpgobgl4p.jpg',
      ]
    },
  ])
}
