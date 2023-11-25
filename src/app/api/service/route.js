import { NextResponse } from 'next/server'

export async function GET(req, res) {
  return NextResponse.json([
    {
      id:1,
      title:'Jasa Pemasangan Plafon Gypsum',
      description: `
      <p>Kami telah meyelesaikan proyek plafon Gypsum seperti SDIT Insan Mulia Surakarta, SMP IT NUR HASAN, proyek rumah tinggal, serta berbagai proyek lainnya </p>
      <p>Pasang plafon gyspum sesuai kebutuhan anda. Kami siap mengerjakan plafon gypsum berbagai model dengan jaminan kualitas pemasangan dan keamanan.</p>
      <p>Dengan harga mulai dari 100rb/m Anda sudah mendapatkan plafon gypsum lengkap dengan cat, lis profil, dan model plafon minimalis. Anda dapat menyesuaikan kebutukan plafon dengan kami. Mari konsultasikan kebutuhanmu gratis</p>
      `,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889820/sga/products/scwvkeoz4mzfadrbxl57.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889224/sga/products/cs80ka70v1dgjt4xjwh1.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889820/sga/products/kcd2yknhp1m6rnrtbukx.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889226/sga/products/rfirgpbsufhmeb8n6rav.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889222/sga/products/leb3brs4w5niil1trtrl.jpg',
      ]
    },
    {
      id:2,
      title:'Jasa Pemasangan Plafon PVC',
      description: `
      <p>Kami telah meyelesaikan proyek plafon PVC seperti plafon Masjid, proyek rumah tinggal, serta berbagai proyek lainnya </p>
      <p>Pemasangan plafon PVC sesuai lengkap mulai dari rangka plafon, plafon PVC, lis profil, ornamen hingga lampu Strip. Kami mampu mengerjakan proyek plafon PVC berbagai model dan variasi dengan jaminan kualitas pemasangan dan keamanan.</p>
      <p>Dengan harga mulai dari 150rb/m Anda sudah dapat plafon PVC komplit dengan rangka dan lis profil. Anda dapat menyesuaikan kebutukan plafon dengan kami. Mari konsultasikan kebutuhanmu gratis</p>
      `,
      imageUrl:[
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700890301/sga/products/mn0kgdreqf2p0rncbdew.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889222/sga/products/ktphf0nay0pg2qpe9j7o.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889226/sga/products/ej3x0x2khf0k638hgt0o.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700889825/sga/products/mrmxqsh0csc7i0ivy92y.jpg',
        'https://res.cloudinary.com/ddjmxrrij/image/upload/v1700890365/sga/products/v17jqscqjoki9pm6yvdi.jpg',
      ]
    },
  ])
}
