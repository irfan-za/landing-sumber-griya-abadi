import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      title:'Jasa Pemasangan Plafon Gypsum',
      description: "Jasa pemasangan plafon Gyspum sesuai kebutuhan anda. Kami siap mengerjakan plafon gypsum berbagai model dengan jaminan kualitas pemasangan dan keamanan. ",
      imageUrl:'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
    },
    {
      id:2,
      title:'Jasa Pemasangan Plafon PVC',
      description: "Jasa pemasangan plafon PVC sesuai kebutuhan anda. Kami siap mengerjakan plafon gypsum berbagai model dengan jaminan kualitas pemasangan dan keamanan. ",
      imageUrl:'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
    },
    {
      id:3,
      title:'Jasa Pemasangan Plafon Gypsum',
      description: "Jasa pemasangan plafon Gyspum sesuai kebutuhan anda. Kami siap mengerjakan plafon gypsum berbagai model dengan jaminan kualitas pemasangan dan keamanan. ",
      imageUrl:'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
    },
  ])
}
