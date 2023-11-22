import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      title:'Hollow Cross 2x4',
      description: "Dimensi 2x4",
      imageUrl:'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
    },
    {
      id:2,
      title:'Hollow Cross 4x4',
      description: "Dimensi 4x4cm",
      imageUrl:'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
    },
  ])
}
