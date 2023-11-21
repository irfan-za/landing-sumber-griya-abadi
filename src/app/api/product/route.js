import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      title:'Pimpinan Umum',
      description: [
        "IMMawan Ramzidhia Alifadhil Razaan (Ketua Umum)",
        "IMMawati Nusaibah Nurul 'Izzah (Sekretaris Umum)",
        "IMMawati Rabbi'ah Al-azizah (Bendahara Umum)",
        "IMMawati Retno Gumilang (Bendahara I)",
      ],
      imageUrl:'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
    },
  ])
}
