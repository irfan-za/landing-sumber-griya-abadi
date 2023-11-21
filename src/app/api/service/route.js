import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      title:'Desa Binaan elah melaksanakan Desa Binaan dengan mengajar pengajian.',
      description: "Saya telah melaksanakan Desa Binaan dengan mengajar pengajian. Kegiatan ini berjalan dengan lancar dan sangat berarti, terutama karena banyak anak-anak yang hadir dengan antusiasme tinggi. Pengajaran pengajian ini menjadi momen berharga, karena tidak hanya memberikan ilmu agama kepada anak-anak, tetapi juga membangun ikatan positif dengan mereka. ",
      imageUrl:'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700560370/sga_uttegw.png',
    },
  ])
}
